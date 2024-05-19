import { IPatrimony } from "./types"


const mock:IPatrimony[] = [
  {
    id:"N1",
    type:"Notebook",
    model:"Samsung - NP350XAA",
    location:"Primavera",
    area:"Comunicação",
    situation: "Estoque",
    user:"",
    obs:"Sem senha"
  },
  {
    id:"D1",
    type:"Notebook",
    model:"Dell - OPTIPLEX 3020",
    location:"Primavera",
    area:"Coworking",
    situation: "Em uso",
    user:"Cris Oliveira",
    obs:"Sem senha"
  },
  {
    id:"D2",
    type:"Notebook",
    model:"Dell - OPTIPLEX 3020",
    location:"Primavera",
    area:"Coworking",
    situation: "Em uso",
    user:"Cris Oliveira",
    obs:"Sem senha"
  },
  
]


export async function READ(): Promise<IPatrimony[] | []> {
  try {
    const data = mock.map((i) => (
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