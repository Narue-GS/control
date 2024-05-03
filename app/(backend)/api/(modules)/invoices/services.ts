export interface IInvoice {
  id:number,
  clientName:string,
  clientContact:string,
  service:string,
  value:number
}

const mock:IInvoice[] = [
  {
    id:0,
    clientName:"Impact Hub",
    clientContact:"financeiro@impacthub.net",
    service:"Host de comunidades",
    value:1500
  },
  {
    id:1,
    clientName:"Impact Hub",
    clientContact:"financeiro@impacthub.net",
    service:"Host de eventos - 1 de Maio de 2024",
    value:165
  },
  {
    id:2,
    clientName:"Impact Hub",
    clientContact:"financeiro@impacthub.net",
    service:"Host de eventos - 28 de Abril de 2024",
    value:165
  },
 
]


export async function READ(): Promise<IInvoice[] | undefined> {
    try {
      const data = await (mock).map((i) => (
        {
          id:i.id,
          clientName:i.clientName,
          clientContact:i.clientContact,
          service:i.service,
          value:i.value
        }))
      return data
    }
    catch(err) {
      console.log(err)
    }
}