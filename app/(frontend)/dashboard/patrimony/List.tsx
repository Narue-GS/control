"use client"

import { IPatrimony, emptyModel } from "@/app/(backend)/api/(modules)/patrimony/types";
import EntityForm from "./Form";

import { useState } from "react";
import { CREATE, DELETE, UPDATE } from "@/app/(backend)/api/(modules)/patrimony/services";

export default function List({data}: {data:IPatrimony[]}){
  let [list, setList] = useState(data)
  const [search, setSearch] = useState("")
  const [form, setForm] = useState({state:false, data:{...emptyModel}, save:create, operation:""} )

  function create(data:IPatrimony) {
    data = {...data, fantasyId:createFantasyID(data.type)}
    CREATE(data)
    setList([...list, data])
  }

  function update(data:IPatrimony) {
    list = list.map(i => {
      if(i.id == data.id) {
        if(data.type != i.type) {
          data.fantasyId = createFantasyID(data.type)
        }
        i = data
      }
      return i
    })
    UPDATE(data)
    setList(list)
  }

  function delete_(id:number) {
    setList([...list.filter(i => i.id != id)])
    DELETE(id)
  }

  function createFantasyID(type:string) {
    // acha o último item com o a letra do id sendo igual a primeira letra do tipo informado
    let lastItem = list.filter(i => i.fantasyId.slice(0,1) == type.slice(0,1)).length ? list.filter(i => i.fantasyId.slice(0,1) == type.slice(0,1))  : [{fantasyId:type.slice(0,1) + "0"}]
    
    // almenta o numeral do item encontrado em 1
    let fantasyId = lastItem[lastItem.length -1 ].fantasyId.slice(0,1) + (parseInt(lastItem[lastItem.length -1 ].fantasyId.slice(1)) + 1)
    return fantasyId
  }

  function filterByProp(prop:string) {
    return prop.toLocaleUpperCase() == search.toLocaleUpperCase()
  }

  return(
    <>
      {
        !form.state ? "" : <EntityForm data={form.data} close={() => setForm({...form, data:emptyModel, state:false})} save={form.save} delete_={delete_}/>
      }
      <section> 
        <header className="bg-blue-500 shadow-lg h-48 p-8 px-12">
          <h1 className="text-white font-semibold mt-3 text-5xl">Patrimony</h1>
          <div className=" flex justify-between items-end  ">
            <input onChange={(e) => setSearch(e.target.value)} className="mt-5 rounded-lg py-1 w-[65%] h-2/3" type="search" name="" id="" placeholder="Search..."/>
            <button onClick={() => setForm({...form, data:form.data, state:true, save:create, operation:""})} 
            className="w-[20%] hover:shadow-lg rounded-lg font-semibold bg-pink-600 h-2/3 text-white py-1 transition">Criar novo +</button>
          </div>
          {/* () => console.log(list[list.length -1].id.slice(0, 1) + (parseInt(list[list.length -1].id.slice(1)) + 1)) */}
        </header>
        <div className="flex justify-center mt-10">
          <div onScroll={(e) => e.currentTarget.classList.add("shadow-xl")} onMouseLeave={(e) => e.currentTarget.classList.remove("shadow-xl")} className="shadow-lg overflow-scroll rounded-lg w-[55rem] max-h-[24rem] transition">
            <table className="w-full p-3 border rounded-lg">
              <tbody className="overflow-scroll ">
                <tr className="bg-gray-300">
                  <th className="p-3 min-w-[5rem] ">id</th>
                  <th className="p-3 min-w-[12rem] ">Tipo</th>
                  <th className="p-3 min-w-[15rem] ">Modelo</th>
                  <th className="p-3 min-w-[12rem] ">Localização</th>
                  <th className="p-3 min-w-[12rem] ">Área</th>
                  <th className="p-3 min-w-[12rem] ">Situação</th>
                  <th className="p-3 min-w-[15rem] ">Usuário</th>
                  <th className="p-3 min-w-[15rem] ">Observações</th>
                </tr>
                
                {list.map((i) => {
                  if(search.length) {
                    if(filterByProp(i.fantasyId.slice(0, search.length)) ||
                      filterByProp(i.type.slice(0, search.length)) ||
                      filterByProp(i.model.slice(0, search.length)) ||
                      filterByProp(i.location.slice(0, search.length)) ||
                      filterByProp(i.situation.slice(0, search.length)) ||
                      filterByProp(i.user.slice(0, search.length)) ||
                      filterByProp((i.obs).toString().slice(0, search.length))) {
                      return( 
                        <tr onClick={() => setForm({...form, data:i, state:true, save:update, operation:"edit"})} key={i.id} className="odd:bg-blue-50 divide-y hover:bg-gray-100 hover:shadow cursor-pointer trasnition">
                          <td className="border-y p-5 text-center">
                            <div className="max-h-10 h-fit overflow-hidden">
                              {i.fantasyId}
                            </div>  
                          </td>
                          <td className="p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                                {i.type}
                            </div>    
                          </td>
                          <td className=" p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.model}
                            </div>  
                          </td>
                          <td className=" p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.location}
                            </div>    
                          </td>
                          <td className=" p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.area}
                            </div>    
                          </td>
                          <td className=" p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.situation}
                            </div>    
                          </td>
                          <td className=" p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.user}
                            </div>    
                          </td>
                          <td className=" p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.obs}
                            </div>    
                          </td>
                        </tr>
                      )
                    }
                  } else {
                      return(
                        <tr onClick={() => setForm({...form, data:i, state:true, save:update, operation:"edit"})} key={i.id} className="odd:bg-blue-50 divide-y hover:bg-gray-100 hover:shadow cursor-pointer trasnition">
                          <td className="border-y p-5 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.fantasyId}
                            </div>  
                          </td>
                          <td className="p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                                {i.type}
                            </div>    
                          </td>
                          <td className=" p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.model}
                            </div>  
                          </td>
                          <td className=" p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.location}
                            </div>    
                          </td>
                          <td className=" p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.area}
                            </div>    
                          </td>
                          <td className=" p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.situation}
                            </div>    
                          </td>
                          <td className=" p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.user}
                            </div>    
                          </td>
                          <td className=" p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.obs}
                            </div>    
                          </td>
                        </tr>
                      )
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}