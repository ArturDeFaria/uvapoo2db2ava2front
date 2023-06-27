import { useEffect, useState } from "react"
import { Pessoa } from '../model/Pessoa';
import PessoaRepositorio from "../model/PessoaRepositorio";
import { useNavigate, useLocation } from 'react-router-dom';
import { Categoria } from "../model/Categoria";
import ProdutoRepo from "../model/ProdutoRepo";
import { Produto } from "../model/Produto";
import CategoriaRepo from "../model/CategoriaRepo";
import { Fornecedor } from "../model/Fornecedor";
import FornecedorRepo from "../model/FornecedorRepo";



interface linhaProps{
    pessoa: Pessoa;
}



interface linhaPropsCat{
    categoria: Categoria;
}

//select options 
function LinhaCat(props: linhaPropsCat){
    const cat = props.categoria;      
    return(
        //@ts-ignore
        <option value={cat.id}>{cat.nome}</option>
    )
  }

  interface linhaPropsForn{
    fornecedor: Fornecedor;
}

//select options 
function LinhaForn(props: linhaPropsForn){
    const fornecedor = props.fornecedor;
    const[nome_f,setNome_f] = useState(new Pessoa);
    const pRepo= new PessoaRepositorio();

    const getNome = async(id:number) =>{
          try {
            let pessoa = new Pessoa();
            pessoa = await pRepo.obter(id);
            setNome_f(pessoa);
          } catch (e) {
            console.log(e);
          }
    }
    useEffect(()=>{
        //@ts-ignore
          getNome(fornecedor.pessoa_id);
        },[] );
    

    return(
        //@ts-ignore
        <option value={fornecedor.pessoa_id}>{nome_f.nome}</option>
    )
  }




function FormProduto(){

    const location = useLocation()
    const navegation = useNavigate();
    const params = new URLSearchParams(location.search)



    const id = Number(params.get("id"));
    const [nome, setNome] = useState(params.get("nome")||"");
    const [descricao, setDescricao] = useState(params.get("descricao")||"");
    const [preco, setPreco] = useState(Number (params.get("preco")));
    const [categorias_id,setCatID]=useState (0);
    const [fornecedor_pessoa_id,setForID]=useState(0);
   
    const navegate = useNavigate();
    
    const repo = new ProdutoRepo();
    const updateProduto = (evt: SubmitEvent) => {
        evt.preventDefault();
        const f = new Produto(id,fornecedor_pessoa_id,categorias_id,nome,descricao,preco);
        console.log(f);
        repo.alterar(f).then(_=>
            {
                navegate('/listarProdutos', {replace:true});
            })
        }
        
        
    //lista de pessoas para o select options    
    const repo_c = new CategoriaRepo();
    const [dados_c,setDados_c] = useState(new Array<Categoria>())
    let flag_c: boolean = false;
    useEffect(()=>{
        repo_c.obterTodos().then((y)=>setDados_c(y));
    },[flag_c]);
    
    
    
    
    //lista de fornecedores para o select options    
    const repo_f = new FornecedorRepo();
    const [dados_f,setDados_f] = useState(new Array<Fornecedor>())
    let flag_f: boolean = false;
    useEffect(()=>{
        repo_f.obterTodos().then((z)=>setDados_f(z));
    },[flag_f])  
    

    return(
        //@ts-ignore
        <form className="form bg-primary bg-opacity-75 fs-5 p-4" onSubmit={updateProduto}>
            
            <label className="form-label">Código</label>
            <h2 className="form-label h3">{id}</h2>
            
            
            <label className="form-label">Nome</label>
            <input className="form-control fs-5" value={nome} 
                  onChange={(e) => setNome(e.target.value)}/>

            <label className="form-label">Descrição</label>
            <input className="form-control fs-5" value={descricao} 
                  onChange={(e) => setDescricao(e.target.value)}/>

            <label className="form-label">Preço</label>
            <input type="number" min="0.00"  className="form-control fs-5" value={preco} 
            //@ts-ignore
            onChange={(e) => setPreco(e.target.value)}/>


            <label className="form-label">Categoria</label>
            <select className="form-select"
            //@ts-ignore
            onClick={(e) => setCatID(e.target.value)}>
                {dados_c.map(c => <LinhaCat key={c.id} categoria={c}/>)}
           
            </select>

            <label className="form-label">Fornecedor</label>
            <select className="form-select" 
            //@ts-ignore
            onClick={(e) => setForID(e.target.value)}>
                {dados_f.map(f => <LinhaForn key={f.pessoa_id} fornecedor={f}/>)}
            </select>
            
            <button className="btn btn-lg btn-primary bg-black  mt-4" type="submit">Adicionar</button>
        </form>
    )
}

export function ProdutoAlterarDados(){
    return(
        <main>
            <h1>Novo Produto</h1>
            <FormProduto/>
        </main>
    )
}