export interface IRecord {
  id:number,
  patrimony:string,
  legacy:string | null,
  user:string,
  action:string,
  date:string,
  obs:string
}

export const emptyModel:IRecord = {
  id:0,
  patrimony:"",
  legacy:null,
  user:"",
  action:"",
  date:"",
  obs:""
}