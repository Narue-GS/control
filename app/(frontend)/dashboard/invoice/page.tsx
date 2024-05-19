import { READ } from "@/app/(backend)/api/(modules)/invoice/services"
import List from "./List"

export default async function Page() {
  const data = await READ()
  
  return(
    <section className="block flex-1">
      <List data={data}/>
    </section>
  )
}