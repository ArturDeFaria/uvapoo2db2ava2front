import axios from "axios";
import { Produto } from "../model/Produto";



export class ProdutoService{
    
    
         
    private local_client = axios.create({
        baseURL: "http://mrfoo.ddns.net:30000/ava2"       
    });

    private remote_client = axios.create({
        baseURL: "https://uvadb2ava21-abxdefaria.b4a.run"
        
    });

    

    obterTodos = async(): Promise<[Produto]> => {
        
        
        let resp=null
        try {
            resp = await this.local_client.get("/produto");
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            resp = await this.remote_client.get("/produto");
            (<HTMLInputElement>document.getElementById("backend")).value="Express"         
        }
        return resp.data;
    }

    incluir =async(p:Produto) => {
        try {
            await this.local_client.post("/produto",p);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            await this.remote_client.post("/produto",p);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"
        }
        
    }

    alterar = async(p:Produto)=>{
        try {
            await this.local_client.put(`/produto/${p.id}`,p);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            await this.remote_client.put(`/produto/${p.id}`,p);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"
        }
    }

    excluir = async(id: number) => {
        try {
            await this.local_client.delete(`produto/${id}`);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            await this.remote_client.delete(`produto/${id}`);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"
        }
    }
}