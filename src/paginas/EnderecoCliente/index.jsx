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
                                        text={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>}
                                        className="btnEditarEndereco"
                                        aria-label={`Editar endereço ${endereco.idEndereço}`}
                                    />
                                    <Botao
                                        className="btnExcluirEndereco"
                                        aria-label={`Excluir endereço ${endereco.idEndereço}`}
                                        text={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                            </svg>}
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