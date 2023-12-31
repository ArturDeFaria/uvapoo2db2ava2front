import { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { Fornecedor } from '../model/Fornecedor';
import { FornecedorService } from '../service/FornecedorService';
import FornecedorRepo from '../model/FornecedorRepo';
import { Pessoa } from '../model/Pessoa';
import PessoaRepositorio from '../model/PessoaRepositorio';


interface linhaProps{
    fornecedor: Fornecedor;
    //pessoa: Pessoa;
}
  
function LinhaFornecedor(props: linhaProps){
    const fornecedor = props.fornecedor;
    //const pessoa = props.pessoa;
    const fornecedorString:any = queryString.stringify(fornecedor);

    const serv = new FornecedorService();
    const navegate = useNavigate();
    
    const excluir = (id: number) =>{
      serv.excluir(id).then(_=>{
        navegate(0);
      });

    }
    
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
          getNome(fornecedor.pessoa_id);
        },[] );
       

    return(
      <tr className="fs-5">
        <td>{fornecedor.pessoa_id}</td>
        <td>{
            nome.nome
          }</td>
        <td>{fornecedor.cnpj}</td>
        <td>
          <Link className="btn btn-warning fs-5 fs- w-100" to={`/alterarFornecedor/?${fornecedorString}`}>
            Atualizar
          </Link>
        </td>
        <td>
          <button onClick={(evt)=>{              
              //@ts-ignore 
            excluir(fornecedor.pessoa_id);}}
            className="btn btn-danger fs-5 fs- w-100">
               Excluir
            </button>
        </td>
      </tr>
    )
  }
  
function TableFornecedores() {
    const [dados,setDados] = useState(new Array<Fornecedor>())
    const repo = new FornecedorRepo();  
    let mudou: boolean = false;
    useEffect(()=>{
        repo.obterTodos().then((x)=>setDados(x));
    },[mudou])
    
    return (
      <table className="table table-striped">
        <thead className="table-dark bg-dark fs-4">
          <tr>
          <th>Codigo</th><th>Nome.pessoa</th><th>CNPJ</th><th></th><th></th>
          </tr>
        </thead>
        <tbody className='table-primary'>
        {dados.map(f => <LinhaFornecedor key={f.pessoa_id} fornecedor={f}/>)}
        </tbody>
      </table>
    );
}

export function FornecedorLista(){
    return(
        <main>
            <h1>Listagem de Fornecedores</h1>
            <div className='table-responsive'>
              <TableFornecedores/>
            </div>
        </main>
    )
}



// export function FornecedorLista(){

//   //dados? com get e set?wtf?
//   const[nome,setNome] = useState(new Pessoa);
//   const pRepo= new PessoaRepositorio();

//   //função getPost
//   const getNome = async() =>{
//     try {
//       let pessoa = new Pessoa();
//       pessoa = await pRepo.obter(0);
//       setNome(pessoa);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   //executar funcção com use effect
//   useEffect(()=>{
//     getNome();
//   },[] );

//   return <div>
//       <h1>Fornecedor</h1>
//       {nome.nome}
//     </div>

// };
