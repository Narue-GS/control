export interface IMail {
  id:number,
  receptor:string,
  arraival:string, //date
  addressee:string,
  format:"Carta" | "Envelope" | "Caixa" | "Pacote" | "Outro",
  email:string,
  sender:string,
  quantity:number,
  identified:boolean,
  delivered:boolean,
  descart_date:string, //date
}

export const emptyModel:IMail = {
  id:0,
  receptor:"",
  arraival:"",
  addressee:"",
  format:"Carta",
  email:"",
  sender:"",
  quantity:1,
  identified:true,
  delivered:false,
  descart_date:"",
}