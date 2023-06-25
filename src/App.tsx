
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

import {Header} from  "./Header";
import {Home}   from  "./Home"  ;
import {Footer} from  "./Footer";
import { PessoaLista } from './view/PessoaLista';
import { PessoaDados } from './view/PessoaDados';
import { PessoaAlterarDados } from './view/PessoaAlterarDados';





export default function App() {
  
  
  return (
    
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/listarPessoas" element={<PessoaLista/>} />
          <Route path="/inserirPessoa" element={<PessoaDados/>} />
          <Route path="/alterarPessoa" element={<PessoaAlterarDados/>} />
        </Routes>
        <Footer/> 

      </Router>
    

  )
}


