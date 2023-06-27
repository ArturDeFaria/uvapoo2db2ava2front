export class Fornecedor  {
    pessoa_id: number | null;
    cnpj:   string;
    
    constructor(pessoa_id:number =0,
        cnpj:string=""){
        
            this.pessoa_id = pessoa_id;
            this.cnpj   = cnpj;
    }
}