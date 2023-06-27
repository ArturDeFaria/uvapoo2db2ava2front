import axios from "axios";
import { Pessoa } from "../model/Pessoa";


export class PessoaService{
    
    
         
    private local_client = axios.create({
        baseURL: "http://192.168.1.6:8080"       
    });

    private remote_client = axios.create({
        baseURL: "https://uvadb2ava21-abxdefaria.b4a.run"
        
    });

    

    obterTodos = async(): Promise<[Pessoa]> => {
        
        
        let resp=null
        try {
            resp = await this.local_client.get("/pessoa");
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            resp = await this.remote_client.get("/pessoa");
            (<HTMLInputElement>document.getElementById("backend")).value="Express"         
        }
        return resp.data;
    }

    obter = async(id:Number): Promise <Pessoa> => {
        
        
        let resp=null
        try {
            resp = await this.local_client.get("/pessoa/"+id);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            resp = await this.remote_client.get("/pessoa/"+id);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"         
        }
        return resp.data;
    }

    incluir =async(p:Pessoa) => {
        try {
            await this.local_client.post("/pessoa",p);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            await this.remote_client.post("/pessoa",p);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"
        }
        
    }

    alterar = async(p:Pessoa)=>{
        try {
            await this.local_client.put(`/pessoa/${p.id}`,p);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            await this.remote_client.put(`/pessoa/${p.id}`,p);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"
        }
    }

    excluir = async(id: number) => {
        try {
            await this.local_client.delete(`pessoa/${id}`);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            await this.remote_client.delete(`pessoa/${id}`);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"
        }
    }
}