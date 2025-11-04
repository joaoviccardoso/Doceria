import { useEffect, useState } from 'react'
import MenuCliente from '../../componentes/menuCliente'
import './endereco.css'
import Botao from '../../componentes/Botao';
import InformacoesCliente from '../../componentes/InformacaoDoCliente';

/**
 * Componente: Endereco

 * Este componente é responsável por exibir os endereços cadastrados de um cliente.
 * Ele busca os dados de um arquivo JSON local, armazena-os no estado e renderiza
 * uma lista de cartões com as informações de cada endereço.
 */
function Endereco(){
    // Estado para armazenar os dados do cliente obtidos do arquivo JSON
    const [dadosCliente, setDadosCliente] = useState([]);

     /**
     * useEffect - Executa a busca dos dados assim que o componente é montado.
     * A função interna `ChamarCliente` faz a requisição ao arquivo JSON e,
     * se bem-sucedida, armazena o resultado no estado `dadosCliente`.
     */
    useEffect( () => {
        async function ChamarCliente(){
            const dados = await fetch('/data/cliente.json')
            if(!dados.ok){
                alert('erro para carregar a mensagem')
            } 
            const cliente = await dados.json()
            console.log(cliente)
            setDadosCliente(cliente)
        }

        ChamarCliente()
    }, [])

     /**
     * Renderização do componente principal.
     * O layout é dividido em:
     * 1. Menu lateral de navegação do cliente.
     * 2. Área principal contendo as informações do cliente e seus endereços.
     */
    return(
       
        <main className='main-endereco'>
            {/* Menu lateral com as opções do cliente */}
            <nav className="container-navegacaoCliente" aria-label="Menu do cliente">
                <MenuCliente />
            </nav>

            {/* Área principal onde são exibidas as informações do cliente e seus endereços */}
            <section className="container-endereco" aria-labelledby="titulo-endereco">
                {/* Exibe informações de texto*/}
                <InformacoesCliente/>

                {/* Lista de endereços cadastrados */}
                <section aria-label="Lista de endereços cadastrados">
                    <ul className="container-enderecos">
                        {dadosCliente[0]?.address?.map((endereco) => (
                        <li key={endereco.idEndereço}>
                            <article className="card-endereco">
                            <header className="container-editarEndereco">
                                <h2>Endereço {endereco.idEndereço}</h2>
                                <div>
                                <Botao
                                    text="Editar"
                                    className="btnEditarEndereco"
                                    aria-label={`Editar endereço ${endereco.idEndereço}`}
                                />
                                <Botao
                                    text="Excluir"
                                    className="btnExcluirEndereco"
                                    aria-label={`Excluir endereço ${endereco.idEndereço}`}
                                />
                                </div>
                            </header>

                            <div className="container-dadosEndereco">
                                <p><strong>Rua:</strong> {endereco.street}</p>
                                <p><strong>Número:</strong> {endereco.number}</p>
                                <p><strong>Bairro:</strong> {endereco.neighborhood}</p>
                                <p><strong>Cidade:</strong> {endereco.city} - {endereco.state}</p>
                                <p><strong>CEP:</strong> {endereco.cep}</p>
                            </div>
                            </article>
                        </li>
                        ))}
                    </ul>
                </section>
            </section>
       </main>

    )
}

export default Endereco