import OffCanvas from '../OffCanvas';
import './nav.css';
import logo from '../../assets/logoDoceria.png'
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className='nav'>
            <div className='container-logo'>
                <img src={logo} alt="Logo da Doceria" width={80}/>
            </div>

            <div className='container-loginEhOffCanvas'>
                <div className='container-login'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                    </span>
                    <div className='container-linkCadastro'>
                        <h3>Ola <Link to={'/cadastro'}>Entre</Link> ou</h3>
                        <h3><Link to={'/cadastro'}>Cadastre-se</Link></h3>
                    </div>    
                </div>
                <button className="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">       
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
                <OffCanvas/>
            </div>
        </nav>
    )
}

export default Nav