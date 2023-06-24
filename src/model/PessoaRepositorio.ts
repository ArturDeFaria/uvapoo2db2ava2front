import { PessoaService } from "../service/PessoaService";
import { Pessoa } from "./Pessoa";

export default class PessoaRepositorio{
    private dados: Array<Pessoa> =[];
    private serv:  PessoaService = new PessoaService();

    obterTodos = async(): Promise<Array<Pessoa>> => {
        const resp = await this.serv.obterTodos();
        this.dados = resp.map(
            (v: any)=>
            new Pessoa(v.id,v.nome,v.telefone,v.email)
        );
        return this.dados; 
    }

    adicionar =async (p:Pessoa) => {
        await this.serv.incluir(p)
    }
    
    alterar =async (p:Pessoa) => {
        await this.serv.alterar(p)
    }
}