import { Link } from "react-router-dom";
import logo_uva from "./assets/logo_uva2.png";
export function Header(){
    return(
        <header className="sticky-top">
            <nav className="navbar navbar-expand-xl navbar-dark bg-warning">
                <div className="container-fluid">
                <a className="navbar-brand">
                                <img src={logo_uva}  height="90" style={{padding: '0px'}}/>
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
                                <Link className="btn btn-lg btn-outline-primary mt-3 me-2"to="/">Home</Link>
                            </li>
                            {/* ----------Pessoas------ */}
                            <li className="nav-item dropdown">                            
                                <a className="btn btn-lg btn-outline-primary dropdown-toggle p-2 mt-3 me-2" 
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">Pessoas</a>
								<ul className="dropdown-menu">								
									<li><Link className="dropdown-item" to="inserirPessoa">Adicionar</Link></li>
									<li><hr className="dropdown-divider"/></li>
									<li><Link className="dropdown-item" to="listarPessoas">Listar</Link></li>
									<li><Link className="dropdown-item" to="listarPessoas">Alterar</Link></li>
									<li><Link className="dropdown-item" to="listarPessoas">Excluir</Link></li>															
								</ul>
						    </li>                            
                        </ul>
                    </div>
                    
                    
                </div>
            </nav>    
        </header>
    );
}