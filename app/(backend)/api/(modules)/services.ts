export interface IModule {
  id:number,
  fantasy_name:string,
  name:string
}

const mock:IModule[] = [
  {
    id:0,
    fantasy_name:"Patrimony 🏦",
    name:"patrimony",
  },
  {
    id:1,
    fantasy_name:"Invoices 📈",
    name:"invoice",
  },
]


export async function READ() {
    try {
      const data = mock.map((i) => ({id:i.id, fantasy_name:i.fantasy_name, name:i.name}))
      return data
    }
    catch(err) {
      console.log(err)
    }
}