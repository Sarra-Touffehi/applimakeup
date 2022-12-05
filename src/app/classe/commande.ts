import { Article } from "./article";

export class Commande {
    constructor(
        public listarticle:Article[],
        public total:number,
    ){}
}
