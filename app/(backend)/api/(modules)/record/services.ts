'use server'

import { IRecord } from "./types"
import { sql } from "@/app/lib/db"



export async function CREATE(data:IRecord) {
  return await sql`
    INSERT INTO record (patrimony_fID, "user", action, date, obs)
    VALUES (${data.patrimony}, ${data.user}, ${data.action}, ${data.date}, ${data.obs})
  `
}

export async function UPDATE(data:IRecord) {
  return await sql`
    UPDATE record
    SET patrimony_fID = ${data.patrimony},
      "user" = ${data.user},
      action = ${data.action},
      date = ${data.date},
      obs = ${data.obs}
    WHERE id = ${data.id}
  `
}

export async function READ(): Promise<IRecord[]> {
  const req = await sql`SELECT * from record ORDER BY id`
  
  try {
    const data = req.map((i) => (
      {
        id:i.id,
        patrimony:i.patrimony_fid,
        legacy:i.legacy,
        user:i.user,
        action:i.action,
        date: i.date,
        obs:i.obs
      }))
    
    return data
  }
  catch(err) {
    console.log(err)  
    return[]
  }
}

export async function DELETE(id:number) {
  return await sql`
    DELETE FROM record
    WHERE id = ${id}
  `
}




export async function ReadPatrimonyOptions() {
  const req = (await sql`SELECT * FROM patrimony`).map(i => i.fantasyId)
  return req
}