import { useEffect, useState } from 'react'
import MenuCliente from '../../componentes/menuCliente'
import './meusPedidos.css'
import Botao from '../../componentes/Botao'

function MeusPedidos(){
    const [pedidosCliente, setPedidosCliente] = useState([])

    useEffect(() => {
        async function PegarValorPedidos(){
            const dados = await fetch('/data/pedidos.json');
            if(!dados.ok){
                alert('erro para carregar os pedidos')
            }
            const pedidosClenteDados = await dados.json()
            setPedidosCliente(pedidosClenteDados)
            console.log(pedidosClenteDados)
        }

        PegarValorPedidos()
    }, [])

    return(
        <main className='main-pedidos'>
            <nav className="container-navegacaoCliente" aria-label="Menu do cliente">
                <MenuCliente />
            </nav>

            <section className='container-pedido'>
                <header className='container-tituloEndereco'>
                    <div>
                        <h1 id="titulo-endereco">Olá, João</h1>
                        <p>Aqui você encontra todas as informações relacionadas aos seus endereços.</p>
                    </div>
                    
                    <div>
                        <Botao
                            text="Adicionar Endereço +"
                            aria-label="Adicionar novo endereço"
                            className="btnAdicionarEndereco"
                        />
                    </div>
                </header>

                <section className='container-pedidos'>
                    <div className="accordion" id="accordionPedidos">
                        {pedidosCliente?.map((pedido, index) => (
                            <div className="accordion-item" key={pedido.orderId}>
                                <h2 className="accordion-header" id={`heading-${pedido.orderId}`}>
                                    <button
                                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse-${pedido.orderId}`}
                                        aria-expanded={index === 0 ? 'true' : 'false'}
                                        aria-controls={`collapse-${pedido.orderId}`}
                                    >
                                    <div className="accordion-pedido">
                                        <div className='container-pedidosDados'>
                                            <h5>Pedido</h5>
                                            <p>{pedido.orderId}</p>
                                        </div>

                                        <div className='container-pedidosDados'>
                                            <h5>Data/Hora</h5>
                                            <p>{pedido.date}</p>
                                        </div>

                                        <div className='container-pedidosDados'>
                                            <h5>Status</h5>
                                            <p>{pedido.status}</p>
                                        </div>

                                        <div className='container-pedidosDados'>
                                            <h5>Pagamento</h5>
                                            <p>{pedido.pagamento}</p>
                                        </div>

                                        <div className='container-pedidosDados'>
                                            <h5>Total</h5>
                                            <p>{pedido.total}</p>
                                        </div>
                                    </div>
                                    </button>
                                </h2>

                                <div
                                    id={`collapse-${pedido.orderId}`}
                                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                    aria-labelledby={`heading-${pedido.orderId}`}
                                    data-bs-parent="#accordionPedidos"
                                >
                                    <div className="accordion-body">
                                        <strong>Detalhes do Pedido</strong>

                                        <div className='container-detralhePedido'>
                                            {pedido.items.map((item, indexItem) => {
                                            
                                            return (
                                                <div key={indexItem}>
                                                    <img src={item.image} alt={item.productTitle}/>
                                                </div>
                                            );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>
            </section>
        </main>
    )
}

export default MeusPedidos