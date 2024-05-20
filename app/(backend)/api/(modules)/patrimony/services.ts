'use server'

import { IPatrimony } from "./types"
import { sql } from "@/app/lib/db"



export async function CREATE(data:IPatrimony) {
  console.log("CREATE");
  console.log(data);
  
  return await sql`
    INSERT INTO patrimony ("fantasyId", type, model, location, area, situation, obs, "user")
    VALUES (${data.fantasyId},${data.type}, ${data.model}, ${data.location}, ${data.area}, ${data.situation}, ${data.obs}, ${data.user})
  `
}

export async function UPDATE(data:IPatrimony) {
  return await sql`
    UPDATE patrimony
    SET "fantasyId" = ${data.fantasyId},
      type = ${data.type},
      model = ${data.model},
      location = ${data.location},
      area = ${data.area},
      situation = ${data.situation},
      obs = ${data.obs},
      "user" = ${data.user}
    WHERE id = ${data.id}
  `
}

export async function READ(): Promise<IPatrimony[] | []> {
  const req = await sql`SELECT * from patrimony ORDER BY "fantasyId"`
  
  try {
    const data = req.map((i) => (
      {
        id:i.id,
        fantasyId:i.fantasyId,
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