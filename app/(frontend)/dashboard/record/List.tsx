"use client"

import { IRecord, emptyModel } from "@/app/(backend)/api/(modules)/record/types";
import EntityForm from "./Form";

import { useState } from "react";
import { CREATE, DELETE, UPDATE } from "@/app/(backend)/api/(modules)/record/services";
import Row from "./Row";

export default function List({data, options}: {data:IRecord[], options:string[]}){
  let [list, setList] = useState(data)
  const [search, setSearch] = useState("")
  const [form, setForm] = useState({state:false, data:{...emptyModel}, save:create, operation:""} )

  function create(data:IRecord) {
    CREATE(data)
    setList([...list, data])
  }

  function update(data:IRecord) {
    list = list.map(i => {
      if(i.id == data.id) {
        // const fDate = new Date (data.date.toISOString().split("T")[0] + "T00:00:00-03:00").toLocaleDateString("pt-BR")
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

  function filterByProp(prop:string) {
    return prop.toLocaleUpperCase() == search.toLocaleUpperCase()
  }


  function readPatrimonies() {
    return list.map(i => i.patrimony)
  }

  return(
    <>
      {
        !form.state ? "" : <EntityForm data={form.data} close={() => setForm({...form, data:emptyModel, state:false})} save={form.save} delete_={delete_} options={options}/>
      }
      <section> 
        <header className="bg-blue-500 shadow-lg h-48 p-8 px-12">
          <h1 className="text-white font-semibold mt-3 text-5xl">Histórico</h1>
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
                  <th className="p-3 min-w-[5rem] ">Data</th>
                  <th className="p-3 min-w-[5rem] ">Quem</th>
                  <th className="p-3 min-w-[5rem] ">Ação</th>
                  <th className="p-3 min-w-[5rem] ">Patrimônio</th>
                </tr>
                
                {list.map((i) => {
                  if(search.length) {
                    if(filterByProp(JSON.stringify(i.patrimony)?.slice(0, search.length)) ||
                      filterByProp(i.user.slice(0, search.length)) ||
                      filterByProp(i.action.slice(0, search.length)) ||
                      filterByProp(i.date?.slice(0, search.length)) 
                    ) {
                      return( 
                        <Row key={i.id} data={i} open={() => setForm({...form, data:i, state:true, save:update, operation:"edit"})}/>
                      )
                    }
                  } else {
                      return(
                        <Row key={i.id} data={i} open={() => setForm({...form, data:i, state:true, save:update, operation:"edit"})}/>
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