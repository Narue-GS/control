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


export function whenToDescart(date:Date){
  date.setMonth(date.getMonth() + 3)
  return date
}

export function formatDate(date:Date , parse:boolean=false){
  if(parse)return date.toLocaleDateString("pt-BR").replaceAll("-","/").split("-").reverse().join("-")
    return date.toLocaleDateString("pt-BR").replaceAll("/","-").split("-").reverse().join("-")
}