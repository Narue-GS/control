import { IMail } from "@/app/(backend)/api/(modules)/mail/types";

export default function Row({data, open}: {data:IMail, open?:() => void}) {
  let dateFormat = new Intl.DateTimeFormat('pt-BR').format
  
  return(
    <tr onClick={open} 
      key={data.id} 
      className="odd:bg-blue-50 divide-y hover:bg-gray-100 hover:shadow cursor-pointer trasnition"
    >
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.arraival}
        </div>  
      </td>
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.addressee}
        </div>  
      </td>
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.receptor}
        </div>  
      </td>
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.sender}
        </div>  
      </td>
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.quantity}
        </div>  
      </td>
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.format}
        </div>  
      </td>
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          <input className="rounded-sm bg-gray-300 text-gray-500" type="checkbox" name="" disabled defaultChecked={data.identified} id="" />
        </div>  
      </td>
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          <input className="rounded-sm bg-gray-300 text-gray-500" type="checkbox" name="" disabled defaultChecked={data.delivered} id="" />
        </div>  
      </td>
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.descart_date}
        </div>  
      </td>
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          {data.email}
        </div>  
      </td>
    </tr>
  )
}