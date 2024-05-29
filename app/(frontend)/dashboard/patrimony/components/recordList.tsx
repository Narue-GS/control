"use client"

// import EntityForm from "./Form";

import { useState } from "react";
import { CREATE, DELETE, UPDATE } from "@/app/(backend)/api/(modules)/patrimony/services";
import Row from "../../record/Row";
import { IRecord } from "@/app/(backend)/api/(modules)/record/types";

export default function RecordList({data}: {data:IRecord[]}){
  let [list, setList] = useState(data)
  const [search, setSearch] = useState("")
  // const [form, setForm] = useState({state:false, data:{...emptyModel}, save:create, operation:""} )

  // function create(data:IRecord) {
  //   data = {...data, fantasyId:createFantasyID(data.type)}
  //   CREATE(data)
  //   setList([...list, data])
  // }

  // function update(data:IRecord) {
  //   list = list.map(i => {
  //     if(i.id == data.id) {
  //       if(data.type != i.type) {
  //         data.fantasyId = createFantasyID(data.type)
  //       }
  //       i = data
  //     }
  //     return i
  //   })
  //   UPDATE(data)
  //   setList(list)
  // }

  // function delete_(id:number) {
  //   setList([...list.filter(i => i.id != id)])
  //   DELETE(id)
  // }

 

  // function filterByProp(prop:string) {
  //   return prop.toLocaleUpperCase() == search.toLocaleUpperCase()
  // }

  return(
    <>
      {
        // !form.state ? "" : <EntityForm data={form.data} close={() => setForm({...form, data:emptyModel, state:false})} save={form.save} delete_={delete_}/>
      }
      <section> 
        {/* <header className="bg-blue-500 shadow-lg h-48 p-8 px-12">
          <h1 className="text-white font-semibold mt-3 text-5xl">Patrimony</h1>
          <div className=" flex justify-between items-end  ">
            <input onChange={(e) => setSearch(e.target.value)} className="mt-5 rounded-lg py-1 w-[65%] h-2/3" type="search" name="" id="" placeholder="Search..."/>
            <button onClick={() => setForm({...form, data:form.data, state:true, save:create, operation:""})} 
            className="w-[20%] hover:shadow-lg rounded-lg font-semibold bg-pink-600 h-2/3 text-white py-1 transition">Criar novo +</button>
          </div>

        </header> */}
        
        <h1 className=" font-semibold mt-10 ml-10 text-3xl">Histórico</h1>

        <div className="flex justify-center mt-5">
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
                  return(
                    <Row key={i.id} data={i}/>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}