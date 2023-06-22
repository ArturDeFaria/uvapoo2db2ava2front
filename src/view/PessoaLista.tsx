import { useEffect, useState } from 'react';
import { Pessoa } from '../model/Pessoa';
import PessoaRepositorio from '../model/PessoaRepositorio';
import { Link, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { PessoaService } from '../service/PessoaService';

interface linhaProps{
    pessoa: Pessoa;
}
  
function LinhaPessoa(props: linhaProps){
    const pessoa = props.pessoa;
    const pessoaString:any = queryString.stringify(pessoa);
    
    const serv = new PessoaService();
    const navegate = useNavigate();
    
    const excluir = (id: number) =>{
      serv.excluir(id).then(_=>{
        navegate(0);
      });

    }  

    return(
      <tr className="fs-5">
        <td>{pessoa.id}</td>
        <td>{pessoa.nome}</td>
        <td>{pessoa.telefone}</td>
        <td>{pessoa.email}</td>
        <td>
          <Link className="btn btn-warning fs-5 fs- w-100" to={`/alterarPessoa/?${pessoaString}`}>
            Atualizar
          </Link>
        </td>
        <td>
          <button onClick={(evt)=>{excluir(pessoa.id);}}
            className="btn btn-danger fs-5 fs- w-100">
               Excluir
            </button>
        </td>
      </tr>
    )
  }
  
function TablePessoas() {
    const [dados,setDados] = useState(new Array<Pessoa>())
    const repo = new PessoaRepositorio();
    let mudou: boolean = false;
    useEffect(()=>{
        repo.obterTodos().then((x)=>setDados(x));
    },[mudou])
    
    return (
      <table className="table table-striped">
        <thead className="table-dark bg-dark fs-4">
          <tr>
          <th>Codigo</th><th>Nome</th><th>Telefone</th><th>E-mail</th><th></th><th></th>
          </tr>
        </thead>
        <tbody className='table-primary'>
        {dados.map(p => <LinhaPessoa key={p.id} pessoa={p}/>)}
        </tbody>
      </table>
    );
}

export function PessoaLista(){
    return(
        <main>
            <h1>Listagem de Pessoas</h1>
            <TablePessoas/>
        </main>
    )
}