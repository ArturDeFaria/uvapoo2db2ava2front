
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

// @ts-ignore 
import {Header} from  "./Header";
// @ts-ignore
import {Home}   from  "./Home"  ;
// @ts-ignore
import {Footer} from  "./Footer";

import { PessoaLista } from './view/PessoaLista';
import { PessoaDados } from './view/PessoaDados';
import { PessoaAlterarDados } from './view/PessoaAlterarDados';

import { FornecedorLista } from './view/FornecedorLista';
import { FornecedorDados } from "./view/FornecedorDados";
import { FornecedorAlterarDados } from "./view/FornecedorAlterarDados";

import { CategoriaLista } from './view/CategoriaLista';
import { CategoriaDados } from "./view/CategoriaDados";
import { CategoriaAlterarDados } from "./view/CategoriaAlterarDados";

import { ProdutoLista } from "./view/ProdutoLista";
import { ProdutoDados } from "./view/ProdutoDados";
import { ProdutoAlterarDados } from "./view/ProdutoAlterarDados";





export default function App() {
  
  
  return (
    
      <Router>
        <Header/>
        <Routes>
          {/* home */}
          <Route path="/" element={<Home/>} />
          
          {/* pessoas */}
          <Route path="/listarPessoas" element={<PessoaLista/>} />
          <Route path="/inserirPessoa" element={<PessoaDados/>} />
          <Route path="/alterarPessoa" element={<PessoaAlterarDados/>} />
          
          {/* fornecedores */}
          <Route path="/listarFornecedores" element={<FornecedorLista/>} />
          <Route path="/inserirFornecedor" element={<FornecedorDados/>} />
          <Route path="/alterarFornecedor" element={<FornecedorAlterarDados/>} />
          
          {/* categorias */}
          <Route path="/listarCategorias" element={<CategoriaLista/>} />
          <Route path="/inserirCategoria" element={<CategoriaDados/>} />
          <Route path="/alterarCategoria" element={<CategoriaAlterarDados/>} />

          {/* categorias */}
          <Route path="/listarProdutos" element={<ProdutoLista/>} />
          <Route path="/inserirProduto" element={<ProdutoDados/>} />
          <Route path="/alterarProduto" element={<ProdutoAlterarDados/>} />
        </Routes>
        <Footer/> 

      </Router>
    

  )
}


