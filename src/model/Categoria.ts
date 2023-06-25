export class Categoria{
    id: number | null;
    nome:   string ;
    descricao: string;
    
    constructor(id:number =0,nome:string="",
        descricao:string=""){
        
            this.id = id;
            this.nome= nome;
            this.descricao= descricao;
    }
}



