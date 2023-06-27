import { useEffect, useState } from 'react';
import { Categoria } from '../model/Categoria';
import CategoriaRepo from '../model/CategoriaRepo';
import { Link, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { CategoriaService } from '../service/CategoriaService';

interface linhaProps{
    categoria: Categoria;
}
  
function LinhaCategoria(props: linhaProps){
    const categoria = props.categoria;
    const categoriaString:any = queryString.stringify(categoria);
    
    const serv = new CategoriaService();
    const navegate = useNavigate();
    
    const excluir = (id: number) =>{
      serv.excluir(id).then(_=>{
        navegate(0);
      });

    }  

    return(
      <tr className="fs-5">
        <td>{categoria.id}</td>
        <td>{categoria.nome}</td>
        <td>{categoria.descricao}</td>
        <td>
          <Link className="btn btn-warning fs-5 fs- w-100" to={`/alterarCategoria/?${categoriaString}`}>
            Atualizar
          </Link>
        </td>
        <td>
          
          <button onClick={(evt)=>{
            //@ts-ignore
            excluir(categoria.id);}}
            className="btn btn-danger fs-5 fs- w-100">
               Excluir
            </button>
        </td>
      </tr>
    )
  }
  
function TableCategorias() {
    const [dados,setDados] = useState(new Array<Categoria>())
    const repo = new CategoriaRepo();
    let mudou: boolean = false;
    useEffect(()=>{
        repo.obterTodos().then((x)=>setDados(x));
    },[mudou])
    
    return (
      <table className="table table-striped">
        <thead className="table-dark bg-dark fs-4">
          <tr>
          <th>Codigo</th><th>Nome</th><th>Descrição</th><th></th><th></th>
          </tr>
        </thead>
        <tbody className='table-primary'>
        {dados.map(p => <LinhaCategoria key={p.id} categoria={p}/>)}
        </tbody>
      </table>
    );
}

export function CategoriaLista(){
    return(
        <main>
            <h1>Listagem de Categorias</h1>
            <div className='table-responsive'>
              <TableCategorias/>
            </div>
        </main>
    )
}