export interface IPatrimony {
  id:number,
  name:string,
  desc:string,
  avarageValue:number
}

const mock:IPatrimony[] = [
  {
    id:0,
    name:"Computer",
    desc:"Gabinete HP, modelo:compaq elite 8300 small form factor",
    avarageValue:800
  },
  {
    id:1,
    name:"Computer",
    desc:"Gabinete HP, modelo:compaq elite 8300 small form factor",
    avarageValue:800
  },
  {
    id:2,
    name:"Computer",
    desc:"Gabinete HP, modelo:compaq elite 8300 small form factor",
    avarageValue:800
  },
  {
    id:3,
    name:"Computer",
    desc:"Gabinete HP, modelo:compaq elite 8300 small form factor",
    avarageValue:800
  },
]


export async function READ(): Promise<{
  id: number;
  name: string;
  desc: string;
  avarageValue: number;
  }[] | []> {
  try {
    const data = mock.map((i) => (
      {
        id:i.id,
        name:i.name,
        desc:i.desc,
        avarageValue:i.avarageValue
      }))
    return data
  }
  catch(err) {
    console.log(err)
    return[]
  }
}