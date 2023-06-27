import { useEffect, useState } from "react"
import { Pessoa } from '../model/Pessoa';
import PessoaRepositorio from "../model/PessoaRepositorio";
import { useLocation, useNavigate } from "react-router-dom";
import FornecedorRepo from "../model/FornecedorRepo";
import { Fornecedor } from '../model/Fornecedor';

function FormFornecedor(){
    const location = useLocation()
    const navegation = useNavigate();
    const params = new URLSearchParams(location.search)

    const pessoa_id = Number(params.get("pessoa_id"));
    
    const [cnpj, setCnpj] = useState(params.get("cnpj"));    
   
    const repo = new FornecedorRepo();

    //dados? com get e set?wtf?
    const[nome,setNome] = useState(new Pessoa);
    const pRepo= new PessoaRepositorio();

    //função getPost
    const getNome = async(id:number) =>{
      try {
        let pessoa = new Pessoa();
        pessoa = await pRepo.obter(id);
        setNome(pessoa);
      } catch (e) {
        console.log(e);
      }
    }
    useEffect(()=>{
        //@ts-ignore
          getNome(pessoa_id);
        },[] );

    const update = (evt: SubmitEvent) => {
        evt.preventDefault();
        //@ts-ignore
        const p = new Fornecedor(pessoa_id,cnpj);
        repo.alterar(p).then(_=>{
            navegation('/listarFornecedores',{ replace: true});  
        });        
    }
  return(
    //@ts-ignore
    <form className="form bg-primary bg-opacity-75 fs-5 p-4" onSubmit={update}>
        <h1>
            {nome.nome}
        </h1>
        <label className="form-label">CNPJ</label>
        <input className="form-control fs-5" defaultValue={`${cnpj}`}    
                onChange={(e) => setCnpj(e.target.value)}/>
        <button className="btn btn-warning fs-5 mt-4 " type="submit">Salvar Alterações</button>
    </form>
)

    
}

export function FornecedorAlterarDados(){
    return(
        <main>
            <h1 >Editar Pessoa</h1>
            <FormFornecedor/>
        </main>
    )
}