export class Produit {constructor(
    public id:number,
    public nom:string, 
   public photo : string,
   public  date_fabrication : Date,
   public date_fin : Date ,
   public marque :string,
   public type :string,
   public promo : boolean ,
    public comments:Commentaire[]){}
   
}
