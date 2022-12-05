import { Commentaire } from "./commentaire";

export class Produit {constructor(
    public id:number,
    public nom:string, 
   public photo : string,
   public photoMarque : string,
   public  date_fabrication : Date,
   public date_fin : Date ,
   public marque :string,
   public type :string,
   public promo : boolean ,
   public prix:number,
   public nouveau:boolean,
   public bestS:boolean,
   public stars:number,
   public  commentaire?:string[]
   
    ){}
   
}
