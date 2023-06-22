import { PessoaService } from "../service/PessoaService";
import { Pessoa } from "./Pessoa";

export default class PessoaRepositorio{
    private dados: Array<Pessoa> =[];
    private serv:  PessoaService = new PessoaService();

    obterTodos = async(): Promise<Array<Pessoa>> => {
        const resp = await this.serv.obterTodos();
        this.dados = resp.map(
            (v: any)=>
            new Pessoa(v.ID,v.NOME,v.TELEFONE,v.EMAIL)
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