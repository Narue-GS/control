import { READ } from "@/app/(backend)/api/(modules)/patrimony/services"
import List from "./List"

import { READ as recordRead } from "@/app/(backend)/api/(modules)/record/services" 
import RecordList from "./components/recordList"

export default async function Page() {
  const data = await READ()
  const recordData = await recordRead()
  return(
    <section className="block flex-1 mb-10">
        <List data={{patrimony:data, record:recordData}}/>
        
        <RecordList data={recordData}/>
    </section>
  )
}