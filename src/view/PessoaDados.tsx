import { useState } from "react"
import { Pessoa } from "../model/Pessoa";
import PessoaRepositorio from "../model/PessoaRepositorio";
import { useNavigate } from "react-router-dom";

function FormPessoa(){
    const [id, setId] = useState(0);
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
   
    const repo = new PessoaRepositorio();
    const navegate = useNavigate();

    const addPessoa = (evt: SubmitEvent) => {
        evt.preventDefault();
        const p = new Pessoa(id,nome,telefone,email);
        console.log(p);
        repo.adicionar(p).then(_=>
            {
                navegate('/listarPessoas', {replace:true});
            })
    }

    return(
        //@ts-ignore
        <form className="form bg-primary bg-opacity-75 fs-5 p-4" onSubmit={addPessoa}>
            <label className="form-label">Id</label>
            <input className="form-control fs-5" type="number" value={id} 
                  //@ts-ignore
                  onChange={(e) => setId(e.target.value)}/>
            <label className="form-label">Nome</label>
            <input className="form-control fs-5" value={nome} 
                  onChange={(e) => setNome(e.target.value)}/>
            <label className="form-label">Telefone</label>
            <input className="form-control fs-5" value={telefone} 
                  onChange={(e) => setTelefone(e.target.value)}/>
            <label className="form-label">E-Mail</label>
            <input className="form-control fs-5" type="email" value={email} 
                  onChange={(e) => setEmail(e.target.value)}/>
            <button className="btn btn-lg btn-primary bg-black  mt-4" type="submit">Adicionar</button>
        </form>
    )
}

export function PessoaDados(){
    return(
        <main>
            <h1>Nova Pessoa</h1>
            <FormPessoa/>
        </main>
    )
}