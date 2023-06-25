import axios from "axios";
import { Fornecedor } from "../model/Fornecedor";



export class FornecedorService{
    
    
         
    private local_client = axios.create({
        baseURL: "http://192.168.1.6:8080"       
    });

    private remote_client = axios.create({
        baseURL: "https://uvadb2ava21-abxdefaria.b4a.run"
        
    });

    

    obterTodos = async(): Promise<[Fornecedor]> => {
        
        
        let resp=null
        try {
            resp = await this.local_client.get("/fornecedor");
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            resp = await this.remote_client.get("/fornecedor");
            (<HTMLInputElement>document.getElementById("backend")).value="Express"         
        }
        return resp.data;
    }

    incluir =async(p:Fornecedor) => {
        try {
            await this.local_client.post("/fornecedor",p);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            await this.remote_client.post("/fornecedor",p);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"
        }
        
    }

    alterar = async(p:Fornecedor)=>{
        try {
            await this.local_client.put(`/fornecedor/${p.pessoa_id}`,p);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            await this.remote_client.put(`/fornecedor/${p.pessoa_id}`,p);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"
        }
    }

    excluir = async(id: number) => {
        try {
            await this.local_client.delete(`fornecedor/${id}`);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            await this.remote_client.delete(`fornecedor/${id}`);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"
        }
    }
}