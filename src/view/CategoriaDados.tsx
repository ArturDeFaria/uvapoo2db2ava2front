import { useState } from "react"
import { Categoria } from '../model/Categoria';
import CategoriaRepo from "../model/CategoriaRepo";
import { useLocation, useNavigate } from "react-router-dom";

function FormCategoria(){
    const [id, setId] = useState(0);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

    const repo = new CategoriaRepo();
    const navegate = useNavigate();

    const addCategoria = (evt: SubmitEvent) => {
        evt.preventDefault();
        const c = new Categoria(id,nome,descricao);
        repo.adicionar(c).then(_=>
            {
                navegate('/listarCategorias', {replace:true});
            })
    }

    return(
        //@ts-ignore
        <form className="form bg-primary bg-opacity-75 fs-5 p-4" onSubmit={addCategoria}>
            <label className="form-label">Id</label>
            <input className="form-control fs-5" type="number" value={id} 
                  //@ts-ignore
                  onChange={(e) => setId(e.target.value)}/>
            <label className="form-label">Nome</label>
            <input className="form-control fs-5" defaultValue={`${nome}`}    
                    onChange={(e) => setNome(e.target.value)}/>
            <label className="form-label">Descrição</label>
            <input className="form-control fs-5" defaultValue={`${descricao}`} 
                    onChange={(e) => setDescricao(e.target.value)}/>
            <button className="btn btn-lg btn-primary bg-black  mt-4" type="submit">Adicionar</button>
        </form>
    )
}

export function CategoriaDados(){
    return(
        <main>
            <h1>Nova Categoria</h1>
            <FormCategoria/>
        </main>
    )
}