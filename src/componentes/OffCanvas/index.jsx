import { Link } from "react-router-dom";
import './offCanvas.css'

function OffCanvas(){
    return(
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className='container-linkCadastro-offCanvas'>
                    <h3>Ola <Link to={'/cadastro'}>Entre</Link> ou</h3>
                    <h3><Link to={'/cadastro'}>Cadastre-se</Link></h3>
                </div>    
                <Link className="offCanvas-link" to={'/'}>Inicio</Link>
                <Link className="offCanvas-link" to={'/cardapio'}>Cardapio</Link>
            </div>
        </div>
    )
}

export default OffCanvas