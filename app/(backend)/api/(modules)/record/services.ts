'use server'

import { IRecord } from "./types"
import { sql } from "@/app/lib/db"



export async function CREATE(data:IRecord) {
  return await sql`
    INSERT INTO record (patrimony_fID, "user", action, date, obs)
    VALUES (${data.patrimony}, ${data.user}, ${data.action}, ${new Date(data.date.replaceAll("/","-").split("-").reverse().join("-"))}, ${data.obs})
  `
}

export async function UPDATE(data:IRecord) {
  return await sql`
    UPDATE record
    SET patrimony_fID = ${data.patrimony},
      "user" = ${data.user},
      action = ${data.action},
      date = ${new Date(data.date.replaceAll("/","-").split("-").reverse().join("-"))},
      obs = ${data.obs}
    WHERE id = ${data.id}
  `
}

export async function READ(): Promise<IRecord[]> {
  const req = await sql`SELECT * FROM record ORDER BY id`
  // const test = await sql`SELECT record.*, patrimony.id
  //                       FROM record LEFT JOIN patrimony 
  //                       ON record.patrimony_fid=patrimony."fantasyId"`
  // console.log(test);
  
  try {
    const data:IRecord[] = req.map((i) => (
      {
        id:i.id,
        patrimony:i.patrimony_fid,
        legacy:i.legacy,
        user:i.user,
        action:i.action,
        date: new Date (i.date.toISOString().split("T")[0] + "T00:00:00-03:00").toLocaleDateString("pt-BR"),
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