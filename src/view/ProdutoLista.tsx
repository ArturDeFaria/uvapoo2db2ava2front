import { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/ProdutoService';
import ProdutoRepo from '../model/ProdutoRepo';
import { Pessoa } from '../model/Pessoa';
import PessoaRepositorio from '../model/PessoaRepositorio';
import { Categoria } from '../model/Categoria';
import CategoriaRepo from '../model/CategoriaRepo';


interface linhaProps{
    produto: Produto;
}
  
function LinhaProduto(props: linhaProps){
    const produto = props.produto;
    //const pessoa = props.pessoa;
    const produtoString:any = queryString.stringify(produto);

    const serv = new ProdutoService();
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

    //dados? com get e set?wtf?
    const[cat,setCat] = useState(new Categoria);
    const cRepo= new CategoriaRepo();

    //função getPost
    const getCat = async(id:number) =>{
      try {
        let categoria = new Categoria();
        categoria = await cRepo.obter(id);
        setCat(categoria);
      } catch (e) {
        console.log(e);
      }
    }

    useEffect(()=>{
        //@ts-ignore
        getNome(produto.fornecedor_pessoa_id);
        getCat(produto.categorias_id);
        },[] );
       

    return(
      <tr className="fs-5">
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.descricao}</td>
        <td>{produto.preco}</td>
        <td>{cat.nome}</td>
        <td>{nome.nome}</td>
        <td>
          <Link className="btn btn-warning fs-5 fs- w-100" to={`/alterarProduto/?${produtoString}`}>
            Atualizar
          </Link>
        </td>
        <td>
          <button onClick={(evt)=>{              
              //@ts-ignore 
            excluir(produto.id);}}
            className="btn btn-danger fs-5 fs- w-100">
               Excluir
            </button>
        </td>
      </tr>
    )
  }
  
function TableProdutos() {
    const [dados,setDados] = useState(new Array<Produto>())
    const repo = new ProdutoRepo();  
    let mudou: boolean = false;
    useEffect(()=>{
        repo.obterTodos().then((x)=>setDados(x));
    },[mudou])
    
    return (
      <table className="table table-striped">
        <thead className="table-dark bg-dark fs-4">
          <tr>
            <th>Codigo</th><th>Nome</th><th>Descrição</th><th>Preço</th><th>Categoria</th>
            <th>Fornecedor</th><th></th><th></th>
          </tr>
        </thead>
        <tbody className='table-primary'>
        {dados.map(p => <LinhaProduto key={p.id} produto={p}/>)}
        </tbody>
      </table>
    );
}

export function ProdutoLista(){
    return(
        <main>
            <h1>Listagem de Produtos</h1>
            <div className='table-responsive'>
              <TableProdutos/>
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
