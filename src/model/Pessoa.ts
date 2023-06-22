export class Pessoa{
    id: number | null;
    nome:   string;
    telefone: string;
    email: string;

    constructor(id:number =0,
        nome:string="",
        telefone:string="",
        email:string=""){

            this.id = id;
            this.nome   = nome;
            this.telefone  = telefone;
            this.email  = email;
    }
}