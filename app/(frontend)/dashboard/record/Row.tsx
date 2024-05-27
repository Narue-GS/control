import { IRecord } from "@/app/(backend)/api/(modules)/record/types";

export default function Row({data, open}: {data:IRecord, open?:() => void}) {
  let dateFormat = new Intl.DateTimeFormat('pt-BR').format
  
  return(
    <tr onClick={open} 
      key={data.id} 
      className="odd:bg-blue-50 divide-y hover:bg-gray-100 hover:shadow cursor-pointer trasnition"
    >
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          {new Date(data.date + "T00:00:00-03:00").toLocaleDateString("pt-Br",
              {
                dateStyle: "short",
                timeZone: "America/Sao_Paulo"
              }
            )
          }
        </div>  
      </td>
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.user}
        </div>  
      </td>
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.action}
        </div>  
      </td>
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.patrimony}
        </div>  
      </td>
    </tr>
  )
}