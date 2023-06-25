import {FornecedorService } from "../service/FornecedorService";
import { Fornecedor } from "./Fornecedor";


export default class FornecedorRepo{
    private dados: Array<Fornecedor> =[];
    private serv:  FornecedorService = new FornecedorService();

    obterTodos = async(): Promise<Array<Fornecedor>> => {
        const resp = await this.serv.obterTodos();
        this.dados = resp.map(
            (v: any)=>
            new Fornecedor(v.pessoa_id,v.cnpj)
        );
        return this.dados; 
    }

    adicionar =async (f:Fornecedor) => {
        await this.serv.incluir(f)
    }
    
    alterar =async (f:Fornecedor) => {
        await this.serv.alterar(f)
    }
}