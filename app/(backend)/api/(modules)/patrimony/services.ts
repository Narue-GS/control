'use server'

import { IPatrimony } from "./types"
import { sql } from "@/app/lib/db"


const entityName = "patrimony"


export async function CREATE(data:IPatrimony) {
  return await sql`
    INSERT INTO patrimony (id, type, model, location, area, situation, obs, "user")
    VALUES (${data.id}, ${data.type}, ${data.model}, ${data.location}, ${data.area}, ${data.situation}, ${data.obs}, ${data.user})
  `
}

export async function READ(): Promise<IPatrimony[] | []> {
  const req = await sql`SELECT * from patrimony ORDER BY id`
  
  try {
    const data = req.map((i) => (
      {
        id:i.id,
        type:i.type,
        model:i.model,
        location:i.location,
        area:i.area,
        situation: i.situation,
        user:i.user,
        obs:i.obs
      }))
    return data
  }
  catch(err) {
    console.log(err)  
    return[]
  }
}