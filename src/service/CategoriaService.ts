import axios from "axios";
import { Categoria } from '../model/Categoria';


export class CategoriaService{
    
    
    obter = async(id:Number): Promise <Categoria> => {
        
        
        let resp=null
        try {
            resp = await this.local_client.get("/categoria/"+id);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            resp = await this.remote_client.get("/categoria/"+id);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"         
        }
        return resp.data;
    }
    
    
         
    private local_client = axios.create({
        baseURL: "http://192.168.1.6:8080"       
    });

    private remote_client = axios.create({
        baseURL: "https://uvadb2ava21-abxdefaria.b4a.run"
        
    });

    

    obterTodos = async(): Promise<[Categoria]> => {
        
        
        let resp=null
        try {
            resp = await this.local_client.get("/categoria");
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            resp = await this.remote_client.get("/categoria");
            (<HTMLInputElement>document.getElementById("backend")).value="Express"         
        }
        return resp.data;
    }

    incluir =async(p:Categoria) => {
        try {
            await this.local_client.post("/categoria",p);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            await this.remote_client.post("/categoria",p);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"
        }
        
    }

    alterar = async(p:Categoria)=>{
        try {
            await this.local_client.put(`/categoria/${p.id}`,p);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            await this.remote_client.put(`/categoria/${p.id}`,p);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"
        }
    }

    excluir = async(id: number) => {
        try {
            await this.local_client.delete(`categoria/${id}`);
            (<HTMLInputElement>document.getElementById("backend")).value="SpringBoot"
        } catch (error) {
            await this.remote_client.delete(`categoria/${id}`);
            (<HTMLInputElement>document.getElementById("backend")).value="Express"
        }
    }
}