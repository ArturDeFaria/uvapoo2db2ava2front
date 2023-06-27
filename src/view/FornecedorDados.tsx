import { useEffect, useState } from "react"
import { Pessoa } from '../model/Pessoa';
import PessoaRepositorio from "../model/PessoaRepositorio";
import { useNavigate, useLocation } from 'react-router-dom';
import FornecedorRepo from "../model/FornecedorRepo";
import { Fornecedor } from '../model/Fornecedor';


interface linhaProps{
    pessoa: Pessoa;
}

//select options 
function LinhaPessoa(props: linhaProps){
    const pessoa = props.pessoa;      
    return(
        //@ts-ignore
        <option value={pessoa.id}>{pessoa.nome}</option>
    )
  }




function FormFornecedor(){
    const [pessoa_id, setId] = useState(0);
    const [cnpj, setCnpj] = useState("");
   
    const navegate = useNavigate();
    
    const repo = new FornecedorRepo();
    const addPessoa = (evt: SubmitEvent) => {
        evt.preventDefault();
        const f = new Fornecedor(pessoa_id,cnpj);
        repo.adicionar(f).then(_=>
            {
                navegate('/listarFornecedores', {replace:true});
            })
        }
        
        
    //lista de pessoas para o select options    
    const repo_p = new PessoaRepositorio();
    const [dados,setDados] = useState(new Array<Pessoa>())
    let flag: boolean = false;
    useEffect(()=>{
        repo_p.obterTodos().then((x)=>setDados(x));
    },[flag])

    

    return(
        //@ts-ignore
        <form className="form bg-primary bg-opacity-75 fs-5 p-4" onSubmit={addPessoa}>
            <label className="form-label">Id</label>
            <input className="form-control fs-5" type="number" value={pessoa_id} disabled/>
            <label className="form-label">Nome</label>
            <select name="id" id="id" className="form-select" 
            //@ts-ignore
            onChange={(e) => setId(e.target.value)}>
                {dados.map(p => <LinhaPessoa key={p.id} pessoa={p}/>)}
            </select>
            <label className="form-label">CNPJ</label>
            <input className="form-control fs-5" value={cnpj} 
                  onChange={(e) => setCnpj(e.target.value)}/>
            <button className="btn btn-lg btn-primary bg-black  mt-4" type="submit">Adicionar</button>
        </form>
    )
}

export function FornecedorDados(){
    return(
        <main>
            <h1>Atribuir Novo Fornecedor</h1>
            <FormFornecedor/>
        </main>
    )
}