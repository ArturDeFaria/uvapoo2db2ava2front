import {CategoriaService } from "../service/CategoriaService";
import { Categoria } from "./Categoria";


export default class CategoriaRepo{
    private dados: Array<Categoria> =[];
    private serv:  CategoriaService = new CategoriaService();

    obterTodos = async(): Promise<Array<Categoria>> => {
        const resp = await this.serv.obterTodos();
        this.dados = resp.map(
            (v: any)=>
            new Categoria(v.id,v.nome,v.descricao)
        );
        return this.dados; 
    }

    adicionar =async (c:Categoria) => {
        await this.serv.incluir(c)
    }
    
    alterar =async (p:Categoria) => {
        await this.serv.alterar(p)
    }
}