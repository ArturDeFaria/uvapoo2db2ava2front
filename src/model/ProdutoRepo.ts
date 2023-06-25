import { ProdutoService } from "../service/ProdutoService";
import { Produto } from "./Produto";


export default class ProdutoRepo{
    private dados: Array<Produto> =[];
    private serv:  ProdutoService = new ProdutoService();

    obterTodos = async(): Promise<Array<Produto>> => {
        const resp = await this.serv.obterTodos();
        this.dados = resp.map(
            (v: any)=>
            new Produto(v.fornecedor_pessoa_id,v.categorias_id,v.nome,v.descricao,v.preco)
        );
        return this.dados; 
    }

    adicionar =async (p:Produto) => {
        await this.serv.incluir(p)
    }
    
    alterar =async (p:Produto) => {
        await this.serv.alterar(p)
    }
}