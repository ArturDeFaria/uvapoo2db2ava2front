export class Produto{
    id: number | null;
    fornecedor_pessoa_id: number;
    categorias_id: number;
    nome:   string;
    descricao: string;
    preco: number;

    constructor(id:number =0,
        fornecedor_pessoa_id =0,
        categorias_id =0,
        nome:string="",
        descricao:string="",
        preco:number=0){

            this.id = id;
            this.fornecedor_pessoa_id =fornecedor_pessoa_id,
            this.categorias_id =categorias_id,
            this.nome   = nome;
            this.descricao  = descricao;
            this.preco  = preco;
    }
}

