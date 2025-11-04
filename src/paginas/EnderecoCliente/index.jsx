import { useEffect, useState } from 'react'
import MenuCliente from '../../componentes/menuCliente'
import './endereco.css'
import Botao from '../../componentes/Botao';
import InformacoesCliente from '../../componentes/InformacaoDoCliente';

function Endereco(){
    const [dadosCliente, setDadosCliente] = useState([]);

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

    return(
       
        <main className='main-endereco'>
            <nav className="container-navegacaoCliente" aria-label="Menu do cliente">
                <MenuCliente />
            </nav>

            <section className="container-endereco" aria-labelledby="titulo-endereco">
                <InformacoesCliente/>

                

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