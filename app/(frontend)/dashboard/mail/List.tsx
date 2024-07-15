"use client"

import { IMail, emptyModel } from "@/app/(backend)/api/(modules)/mail/types";
import EntityForm from "./Form";

import { useState } from "react";
import { CREATE, DELETE, UPDATE } from "@/app/(backend)/api/(modules)/mail/services";
import Row from "./Row";

export default function List({data}: {data:IMail[]}){
  let [list, setList] = useState(data)
  const [search, setSearch] = useState("")
  const [form, setForm] = useState({state:false, data:{...emptyModel}, save:create})

  function create(data:IMail) {
    CREATE(data)
    setList([...list, data])
  }

  function update(data:IMail) {
    list = list.map(i => {
      if(i.id == data.id) {
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

  return(
    <>
      
      {!form.state? "" : <EntityForm data={form.data} close={() => setForm({...form, data:emptyModel, state:false})} save={form.save} delete_={delete_}/>}     
      <section> 
        <header className="bg-blue-500 shadow-lg h-48 p-8 px-12">
          <h1 className="text-white font-semibold mt-3 text-5xl">Histórico</h1>
          <div className=" flex justify-between items-end  ">
            <input onChange={(e) => setSearch(e.target.value)} className="mt-5 rounded-lg py-1 w-[65%] h-2/3" type="search" name="" id="" placeholder="Search..."/>
            <button onClick={() => setForm({...form, data:form.data, state:true, save:create})} 
            className="w-[20%] hover:shadow-lg rounded-lg font-semibold bg-pink-600 h-2/3 text-white py-1 transition">Criar novo +</button>
          </div>
          {/* () => console.log(list[list.length -1].id.slice(0, 1) + (parseInt(list[list.length -1].id.slice(1)) + 1)) */}
        </header>
        <div className="flex justify-center mt-10">
          <div onScroll={(e) => e.currentTarget.classList.add("shadow-xl")} onMouseLeave={(e) => e.currentTarget.classList.remove("shadow-xl")} className="shadow-lg overflow-scroll rounded-lg w-[55rem] max-h-[24rem] transition">
            <table className="w-full p-3 border rounded-lg">
              <tbody className="overflow-scroll ">
                <tr className="bg-gray-300">
                  <th className="p-3 min-w-[5rem]">Data de chegada</th>
                  <th className="p-3 min-w-[5rem]">Quem recebeu</th>
                  <th className="p-3 min-w-[5rem]">Destinatário</th>
                  <th className="p-3 min-w-[5rem]">Rementente</th>
                  <th className="p-3 min-w-[5rem]">Quantidade</th>
                  <th className="p-3 min-w-[5rem]">Tipo de correspondência</th>
                  <th className="p-3 min-w-[5rem]">Identificado?</th>
                  <th className="p-3 min-w-[5rem]">Entregue?</th>
                  <th className="p-3 min-w-[5rem]">Data de descarte</th>
                  <th className="p-3 min-w-[5rem]">Email para notificação</th>
                </tr>
                
                {list.map((i) => {
                  if(search.length) {
                    // if(filterByProp(JSON.stringify(i.patrimony)?.slice(0, search.length)) ||
                    //   filterByProp(i.user.slice(0, search.length)) ||
                    //   filterByProp(i.action.slice(0, search.length)) ||
                    //   filterByProp(i.date?.slice(0, search.length)) 
                    // ) {
                    //   return( 
                    //     <Row key={i.id} data={i} open={() => setForm({...form, data:i, state:true, save:update, operation:"edit"})}/>
                    //   )
                    // }
                  } else {
                      return(
                        <Row key={i.id} data={i} open={() => setForm({...form, data:i, state:true, save:update})}/>
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