import { IPatrimony } from "@/app/(backend)/api/(modules)/patrimony/types";

export default function Row({data, open}: {data:IPatrimony, open:() => void}) {
  return(
    <tr onClick={open} 
      key={data.id} 
      className="odd:bg-blue-50 divide-y hover:bg-gray-100 hover:shadow cursor-pointer trasnition"
    >
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.fantasyId}
        </div>  
      </td>
      <td className="p-3 text-center">
        <div className="max-h-10 overflow-hidden">
            {data.type}
        </div>    
      </td>
      <td className=" p-3 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.model}
        </div>  
      </td>
      <td className=" p-3 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.location}
        </div>    
      </td>
      <td className=" p-3 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.area}
        </div>    
      </td>
      <td className=" p-3 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.situation}
        </div>    
      </td>
      <td className=" p-3 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.user}
        </div>    
      </td>
      <td className=" p-3 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.obs}
        </div>    
      </td>
    </tr>
  )
}