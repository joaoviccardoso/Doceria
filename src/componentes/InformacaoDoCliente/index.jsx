import Botao from '../Botao'
import './informacaoCliente.css'

function InformacoesCliente(){
    return(
        <header className='container-tituloEndereco'>
                <div>
                    <h1 id="titulo-endereco">Olá, João</h1>
                    <p style={{color : "#212121"}}>Aqui você encontra todas as informações relacionadas aos seus endereços.</p>
                </div>
                    
                <div>
                    <Botao
                        text="Adicionar Endereço +"
                        aria-label="Adicionar novo endereço"
                        className="btnAdicionarEndereco"
                />
            </div>
        </header>
    )
}

export default InformacoesCliente