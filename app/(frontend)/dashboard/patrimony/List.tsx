import { IPatrimony } from "@/app/(backend)/api/(modules)/patrimony/services";
import { useState } from "react";

export default function List({data}: {data:IPatrimony[]}){
  // const [search, setSearch] = useState("")

  // function filter() {
  //   {users.map((user) => {
  //           if(searchText.length && user.name.slice(0, searchText.length).toUpperCase() === searchText.toUpperCase() ){
  //             return(
  //               <div onClick={() => {setProfile(user); setDisplay(false)}} 
  //                 id='user-card' 
  //                 className="seach-card" 
  //                 key={user.id}
  //               >
  //                 <AiOutlineUser color='white' fontSize="3vw"/>
  //                 <span>{user.name}</span>
  //               </div>
  //             )
  //           }
            
  //           return <></>
  //         })}
  // }
  return(
    <section>
      <header className="bg-blue-500 shadow-lg h-48 p-8 px-12">
        <h1 className="text-white font-semibold mt-3 text-5xl">Patrimony</h1>
        <div className=" flex justify-between items-end  ">
          <input className="mt-5 rounded-lg py-1 w-[65%]" type="search" name="" id="" placeholder="Search..."/>
          <button className="w-[20%] hover:shadow-lg rounded-lg font-semibold bg-pink-600 h-1/2 text-white py-1 transition">Criar novo +</button>
        </div>
      </header>
      <div className="flex justify-center mt-10">
        <div className="overflow-hidden rounded-lg w-[90%] ">
          <table className="w-full p-3 border rounded-lg outline">
            <tbody className="">
              <tr className="bg-gray-300">
                <th className="p-3">id</th>
                <th className="p-3">nome</th>
                <th className="p-3">descricão</th>
                <th className="p-3">avaliação</th>
              </tr>
              {data.map((i) => (
                <tr key={i.id} className="odd:bg-blue-50 divide-y hover:bg-gray-100 hover:shadow cursor-pointer trasnition">
                  <td className="border-y p-3 text-center">{i.id}</td>
                  <td className="p-3 text-center">{i.name}</td>
                  <td className="p-3 text-center">{i.desc}</td>
                  <td className="p-3 text-center">{i.avarageValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}