'use server'

import { IMail } from "./types"
import { sql } from "@/app/lib/db"



export async function CREATE(data:IMail) {
  return await sql`
    INSERT INTO mail (receptor, arraival, addressee, format, email, sender, quantity, identified, delivered, descart_date)
    VALUES (${data.receptor}, ${data.arraival}, ${data.addressee}, 
            ${data.format}, ${data.email}, ${data.sender}, 
            ${data.quantity}, ${data.identified}, ${data.delivered}, 
            ${data.descart_date})
  `
}

export async function UPDATE(data:IMail) {
  return await sql`
    UPDATE mail
    SET receptor = ${data.receptor},
      arraival = ${data.arraival},
      addressee = ${data.addressee},
      format = ${data.format},
      email = ${data.email},
      sender = ${data.sender},
      quantity = ${data.quantity},
      identified = ${data.identified},
      delivered = ${data.delivered},
      descart_date = ${data.descart_date},
    WHERE id = ${data.id}
  `
}

export async function READ(): Promise<IMail[]> {
  const req = await sql`SELECT * from mail ORDER BY id`
  
  try {
    const data = req.map((i) => (
      {
        id:+i.id,
        receptor:i.receptor,
        arraival:new Date (i.arraival.toISOString().split("T")[0] + "T00:00:00-03:00").toLocaleDateString("pt-BR"),
        addressee:i.addressee,
        format:i.format,
        email:i.email,
        sender:i.sender,
        quantity:+i.quantity,
        identified:i.identified,
        delivered:i.delivered,
        descart_date:new Date (i.descart_date.toISOString().split("T")[0] + "T00:00:00-03:00").toLocaleDateString("pt-BR"),
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
    DELETE FROM mail
    WHERE id = ${id}
  `
}



