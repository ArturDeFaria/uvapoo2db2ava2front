import { useState } from "react"
import { Categoria } from '../model/Categoria';
import CategoriaRepo from "../model/CategoriaRepo";
import { useLocation, useNavigate } from "react-router-dom";

function FormCategoria(){
    const location = useLocation()
    const navegation = useNavigate();
    const params = new URLSearchParams(location.search)

    const id = Number(params.get("id"));
    
    let [nome, setNome] = useState(params.get("nome"));
    let [descricao, setDescricao] = useState(params.get("descricao"));
    
    
   
    const repo = new CategoriaRepo();

    const updateCategoria = (evt: SubmitEvent) => {
        evt.preventDefault();
        //@ts-ignore
        const c = new Categoria(id,nome,descricao);
        repo.alterar(c).then(_=>{
            navegation('/listarCategorias',{ replace: true});  
        });        
    }
  return(
    //@ts-ignore
    <form className="form bg-primary bg-opacity-75 fs-5 p-4" onSubmit={updateCategoria}>
        
        <label className="form-label">Nome</label>
        <input className="form-control fs-5" defaultValue={`${nome}`}    
                onChange={(e) => setNome(e.target.value)}/>
        <label className="form-label">Descrição</label>
        <input className="form-control fs-5" defaultValue={`${descricao}`} 
                onChange={(e) => setDescricao(e.target.value)}/>
        <button className="btn btn-warning fs-5 mt-4 " type="submit">Salvar Alterações</button>
    </form>
)

    
}

export function CategoriaAlterarDados(){
    return(
        <main>
            <h1 >Editar Categoria</h1>
            <FormCategoria/>
        </main>
    )
}