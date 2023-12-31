import { useState } from "react"
import { Pessoa } from '../model/Pessoa';
import PessoaRepositorio from "../model/PessoaRepositorio";
import { useLocation, useNavigate } from "react-router-dom";

function FormPessoa(){
    const location = useLocation()
    const navegation = useNavigate();
    const params = new URLSearchParams(location.search)

    const id = Number(params.get("id"));
    
    let [nome, setNome] = useState(params.get("nome"));
    let [telefone, setTelefone] = useState(params.get("telefone"));
    let [email, setEmail] = useState(params.get("email"));
    
    
   
    const repo = new PessoaRepositorio();

    const updatePessoa = (evt: SubmitEvent) => {
        evt.preventDefault();
        //@ts-ignore
        const p = new Pessoa(id,nome,telefone,email);
        repo.alterar(p).then(_=>{
            navegation('/listarPessoas',{ replace: true});  
        });        
    }
  return(
    //@ts-ignore
    <form className="form bg-primary bg-opacity-75 fs-5 p-4" onSubmit={updatePessoa}>
        
        <label className="form-label">Nome</label>
        <input className="form-control fs-5" defaultValue={`${nome}`}    
                onChange={(e) => setNome(e.target.value)}/>
        <label className="form-label">Telefone</label>
        <input className="form-control fs-5" defaultValue={`${telefone}`} 
                onChange={(e) => setTelefone(e.target.value)}/>
        <label className="form-label">E-Mail</label>
        <input className="form-control fs-5" type="email" defaultValue={`${email}`} 
                onChange={(e) => setEmail(e.target.value)}/>
        <button className="btn btn-warning fs-5 mt-4 " type="submit">Salvar Alterações</button>
    </form>
)

    
}

export function PessoaAlterarDados(){
    return(
        <main>
            <h1 >Editar Pessoa</h1>
            <FormPessoa/>
        </main>
    )
}