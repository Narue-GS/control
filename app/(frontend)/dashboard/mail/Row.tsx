import { IMail } from "@/app/(backend)/api/(modules)/mail/types";

import { Switch } from "@/components/ui/switch"


export default function Row({data, open}: {data:IMail, open?:() => void}) {
  
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
          <Switch
            checked={data.identified}
            disabled
          />
        </div>  
      </td>
      <td className="border-y p-5 text-center">
        <div className="max-h-10 overflow-hidden">
          <Switch
            checked={data.delivered}
            disabled
          />
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