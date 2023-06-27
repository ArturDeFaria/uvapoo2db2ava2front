import { Link } from "react-router-dom";
import logo_uva from "./assets/logo_uva2.png";
import { useState } from "react";

export function Header() {

    const [bt, setBt] = useState("xpress");
    const hadleClick = () => {
        setBt((curr) => (curr === "xpress" ? "spring" : "xpress"))
    };

    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-xl navbar-dark bg-warning">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={logo_uva}
                            height="90"
                            style={
                                { padding: '0px' }
                            } />
                    </a>
                    <button className="navbar-toggler order-first collapsed bg-primary" 
                    type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" 
                    aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            {/* -------HOME------ */}
                            <li className="nav-item">
                                <Link className="btn btn-lg btn-outline-primary mt-3 me-2" to="/">
                                    Home
                                </Link>
                            </li>
                            {/* ----------Pessoas------ */}
                            <li className="nav-item dropdown">
                                <a role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                className="btn btn-lg btn-outline-primary dropdown-toggle mt-3 me-2">
                                    Pessoas
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="inserirPessoa">
                                            Adicionar
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item" to="listarPessoas">
                                            Listar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="listarPessoas">
                                            Alterar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="listarPessoas">
                                            Excluir
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* -----------Fornecedores------------ */}
                            <li className="nav-item dropdown">
                                <a className="btn btn-lg btn-outline-primary dropdown-toggle p-2 
                                mt-3 me-2" 
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fornecedores
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="inserirFornecedor">
                                            Adicionar
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item" 
                                        to="listarFornecedores">
                                            Listar
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* --------Produtos/Categorias---------- */}
                            <li className="nav-item dropdown">
                                <a className="btn btn-lg btn-outline-primary dropdown-toggle p-2 
                                mt-3 me-2" 
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Produtos
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item dropdown"> 
                                        <a className="dropdown-item disabled">                                        
                                            Categorias
                                        </a>
                                    </li>                                    
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className="ms-4">
                                        <Link className="dropdown-item " 
                                        to="inserirCategoria">
                                            Adicionar
                                        </Link>
                                    </li>
                                    <li className="ms-4">
                                        <Link className="dropdown-item " 
                                        to="listarCategorias">
                                            Listar
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown"> 
                                        <a className="dropdown-item disabled">                                        
                                            Produtos
                                        </a>
                                    </li>                                    
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className="ms-4">
                                        <Link className="dropdown-item " 
                                        to="inserirProduto">
                                            Adicionar
                                        </Link>
                                    </li>
                                    <li className="ms-4">
                                        <Link className="dropdown-item " 
                                        to="listarProdutos">
                                            Listar
                                        </Link>
                                    </li>                                    
                                </ul>
                            </li>
                            <li className="nav-item mt-3 me-2">
                                <input type="button" className="btn btn-lg btn-primary disabled"
                                    value={bt}
                                    onClick={hadleClick}
                                    id="backend" />
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
