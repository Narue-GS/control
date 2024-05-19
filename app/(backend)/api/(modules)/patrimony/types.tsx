export interface IPatrimony {
  id:string,
  type:string,
  model:string,
  location: "Primavera" | "Sapiens" | "Usuário",
  area:"Coworking" | "Eventos" | "Financeiro" | "RH" | "Comunicação" | "Não designado",
  situation: "Estoque" | "Em uso" | "Manutenção" | "Descarte",
  user:string,
  obs:string
}

export const emptyModel:IPatrimony = {
  id:"",
  type: "",
  model: "",
  location: "Primavera",
  area: "Não designado",
  situation: "Estoque",
  user: "",
  obs: ""
}