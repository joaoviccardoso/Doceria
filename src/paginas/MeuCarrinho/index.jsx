import Botao from '../../componentes/Botao';
import { useState, useEffect } from 'react';
import './meuCarrinho.css'
import { getCarrinho, removeFromCarrinho } from "../../servicos/CarrinhoLocalStorage";

function MeuCarrinho(){
    const [carrinho, setCarrinho] = useState({ items: [] })

    useEffect(() => {
        const localStorage = getCarrinho()
        setCarrinho(localStorage)
    }, [])

    return(
        <main className='main-carrinho'>
            <section className='container-meusPedidos'>
                <section className='container-cardsMeusPedidos'>
                    <h2>Meu Carrinho</h2>
                    {carrinho.items.map(item => (
                        <div key={item.id} className="card-item">
                            
                            <img src={item.image} alt={item.title} />
                            <span>
                                <h3>{item.title}</h3>
                                <p>Entrega 5 dias úteis</p>
                            </span>
                            
                            <span>
                                <p>Quantidade: {item.quantity}</p>
                                <button onClick={() => {removeFromCarrinho(item.id), setCarrinho(getCarrinho())}}>Excluir</button>
                            </span>
                            
                            <p>Preço: R$ {item.price.toFixed(2)}</p>
                        </div>
                    ))} 
                </section>
            </section>

            <section className='container-valorTotal'>
                <ul className='lista-valorCarrinho'>
                    <li><h3>Resumo do Pedido</h3></li>
                    <li>
                        <p>Subtotal</p>
                        <p>R$220,00</p>
                    </li>
                    <hr/>
                    <li>
                        <p>Frete</p>
                        <p>R$0,00</p>
                    </li>
                    <hr/>
                    <li>
                        <p>Descontos</p>
                        <p>R$0,00</p>
                    </li>
                    <hr/>
                    <li>
                        <p>Total</p>
                        <p>R$220,00</p>
                    </li>
                    <li>
                        <Botao
                            className={'botao-finalizarPedido'}
                            text={'Finalizar Pedido'}
                        />
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default MeuCarrinho