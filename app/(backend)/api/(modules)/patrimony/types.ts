export interface IPatrimony {
  id:number,
  fantasyId:string,
  type:string,
  model:string,
  location: "Primavera" | "Sapiens" | "Usuário",
  area:"Coworking" | "Eventos" | "Financeiro" | "RH" | "Comunicação" | "Não designado",
  situation: "Estoque" | "Em uso" | "Manutenção" | "Descarte",
  user:string,
  obs:string
}

export const emptyModel:IPatrimony = {
  id:0,
  fantasyId:"",
  type: "",
  model: "",
  location: "Primavera",
  area: "Não designado",
  situation: "Estoque",
  user: "",
  obs: ""
}