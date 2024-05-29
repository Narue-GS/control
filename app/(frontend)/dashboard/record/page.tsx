import { READ, ReadPatrimonyOptions } from "@/app/(backend)/api/(modules)/record/services"
import List from "./List"

export default async function Page() {
  const data = await READ()
  const options = await ReadPatrimonyOptions()

  return(
    <section className="block flex-1">
        <List data={data} options={options}/>
    </section>
  )
}