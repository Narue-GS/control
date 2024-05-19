"use client"

import { IInvoice } from "@/app/(backend)/api/(modules)/invoice/services";
import { useState } from "react";

export default function List({data}: {data:IInvoice[]}){
  const [search, setSearch] = useState("")

  
 
  return(
    <section>
      <header className="bg-blue-500 shadow-lg h-48 p-8 px-12">
        <h1 className="text-white font-semibold mt-3 text-5xl">Patrimony</h1>
        <div className=" flex justify-between items-end  ">
          <input onChange={(e) => setSearch(e.target.value)} className="mt-5 rounded-lg py-1 w-[65%] h-2/3" type="search" name="" id="" placeholder="Search..."/>
          <button className="w-[20%] hover:shadow-lg rounded-lg font-semibold bg-pink-600 h-2/3 text-white py-1 transition">Criar novo +</button>
        </div>
      </header>
      <div className="flex justify-center mt-10">
        <div className="overflow-hidden rounded-lg w-[90%] ">
          <table className="w-full p-3 border rounded-lg outline">
            <tbody className="">
              <tr className="bg-gray-300">
                <th className="p-3">id</th>
                <th className="p-3">cliente</th>
                <th className="p-3">contato</th>
                <th className="p-3">serviço</th>
                <th className="p-3">valor</th>
              </tr>
              {data.map((i) => {
                if(search.length) {
                  if(i.clientName.slice(0, search.length).toLocaleUpperCase() == search.toLocaleUpperCase()) {
                    return(
                      <tr key={i.id} className="odd:bg-blue-50 divide-y hover:bg-gray-100 hover:shadow cursor-pointer trasnition">
                        <td className="border-y p-3 text-center">{i.id}</td>
                        <td className="p-3 text-center">{i.clientName}</td>
                        <td className="p-3 text-center">{i.clientContact}</td>
                        <td className="p-3 text-center">{i.service}</td>
                        <td className="p-3 text-center">{i.value}</td>
                      </tr>
                    )
                  }
                } else {
                  return(
                    <tr key={i.id} className="odd:bg-blue-50 divide-y hover:bg-gray-100 hover:shadow cursor-pointer trasnition">
                      <td className="border-y p-3 text-center">{i.id}</td>
                      <td className="p-3 text-center">{i.clientName}</td>
                      <td className="p-3 text-center">{i.clientContact}</td>
                      <td className="p-3 text-center">{i.service}</td>
                      <td className="p-3 text-center">{i.value}</td>
                    </tr>
                  )
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}