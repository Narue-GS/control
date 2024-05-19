"use client"

import { IPatrimony, emptyModel } from "@/app/(backend)/api/(modules)/patrimony/types";
import EntityForm from "./Form";

import { useState } from "react";

export default function List({data}: {data:IPatrimony[]}){
  let [list, setList] = useState(data)
  const [search, setSearch] = useState("")
  const [form, setForm] = useState({state:false, data:{...emptyModel}, save:create})

  function create(data:IPatrimony) {
    data = {...data, id:createID(data.type)}
    setList([...list, data])
  }

  function update(data:IPatrimony) {
    list = list.map(i => {
      i = i.id == data.id ? data : i
      return i 
    })
    setList(list)
  }

  function delete_(id:string) {
    setList([...list.filter(i => i.id != id)])
  }

  function createID(type:string) {
    // acha o último item com o a letra do id sendo igual a primeira letra do tipo informado
    let lastItem = list.filter(i => i.id.slice(0,1) == type.slice(0,1))
    // almenta o numeral do item encontrado em 1
    let id = lastItem[lastItem.length -1 ].id.slice(0,1) + (parseInt(lastItem[lastItem.length -1 ].id.slice(1)) + 1)
    return id
  }

  function filterByProp(prop:string) {
    return prop.toLocaleUpperCase() == search.toLocaleUpperCase()
  }

  return(
    <>
      {
        !form.state ? "" : <EntityForm data={form.data} close={() => setForm({...form, data:{...emptyModel, id: ""}, state:false})} save={form.save} delete_={delete_}/>
      }
      <section> 
        <header className="bg-blue-500 shadow-lg h-48 p-8 px-12">
          <h1 className="text-white font-semibold mt-3 text-5xl">Patrimony</h1>
          <div className=" flex justify-between items-end  ">
            <input onChange={(e) => setSearch(e.target.value)} className="mt-5 rounded-lg py-1 w-[65%] h-2/3" type="search" name="" id="" placeholder="Search..."/>
            <button onClick={() => setForm({...form, state:true, save:create})} 
            className="w-[20%] hover:shadow-lg rounded-lg font-semibold bg-pink-600 h-2/3 text-white py-1 transition">Criar novo +</button>
          </div>
          {/* () => console.log(list[list.length -1].id.slice(0, 1) + (parseInt(list[list.length -1].id.slice(1)) + 1)) */}
          
        </header>
        <div className="flex justify-center mt-10">
          <div onScroll={(e) => e.currentTarget.classList.add("outline")} onMouseLeave={(e) => e.currentTarget.classList.remove("outline")} className="overflow-scroll rounded-lg w-[55rem] transition">
            <table className="w-full p-3 border rounded-lg outline">
              <tbody className="">
                <tr className="bg-gray-300">
                  <th className="p-3 min-w-[10rem] ">id</th>
                  <th className="p-3 min-w-[10rem] ">Tipo</th>
                  <th className="p-3 min-w-[10rem] ">Modelo</th>
                  <th className="p-3 min-w-[10rem] ">Localização</th>
                  <th className="p-3 min-w-[10rem] ">Área</th>
                  <th className="p-3 min-w-[10rem] ">Situação</th>
                  <th className="p-3 min-w-[10rem] ">Usuário</th>
                  <th className="p-3 min-w-[10rem] ">Observações</th>
                </tr>
                
                {list.map((i) => {
                  if(search.length) {
                    if(filterByProp(i.id.slice(0, search.length)) ||
                      filterByProp(i.type.slice(0, search.length)) ||
                      filterByProp(i.model.slice(0, search.length)) ||
                      filterByProp(i.location.slice(0, search.length)) ||
                      filterByProp(i.situation.slice(0, search.length)) ||
                      filterByProp(i.user.slice(0, search.length)) ||
                      filterByProp((i.obs).toString().slice(0, search.length))) {
                      return( 
                        <tr key={i.id} className="odd:bg-blue-50 divide-y hover:bg-gray-100 hover:shadow cursor-pointer trasnition">
                          <td className="border-y p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.id}
                            </div>  
                          </td>
                          <td className=" p-3 text-center">
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
                        <tr onClick={() => setForm({data:i, state:true, save:update})} key={i.id} className="odd:bg-blue-50 divide-y hover:bg-gray-100 hover:shadow cursor-pointer trasnition">
                          <td className="border-y p-3 text-center">
                            <div className="max-h-10 overflow-hidden">
                              {i.id}
                            </div>  
                          </td>
                          <td className=" p-3 text-center">
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