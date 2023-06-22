import axios from "axios";
import { Pessoa } from "../model/Pessoa";

export class PessoaService{
    private client = axios.create({
        baseURL: "https://uvadb2ava2-abxdefaria.b4a.run"
    });

    obterTodos = async(): Promise<[Pessoa]> => {
        let resp = await this.client.get("/pessoa");
        return resp.data;
    }

    incluir =async(p:Pessoa) => {
        await this.client.post("/pessoa",p);
    }

    alterar = async(p:Pessoa)=>{
        await this.client.put(`/pessoa/${p.id}`,p);
    }

    excluir = async(id: number) => {
        await this.client.delete(`pessoa/${id}`);
        // await alert(`Pessoa com codigo ${id} detelado`);
    }
}