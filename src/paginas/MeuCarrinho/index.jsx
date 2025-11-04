import Botao from '../../componentes/Botao';
import { useState, useEffect } from 'react';
import './meuCarrinho.css'
import { getCarrinho, removeFromCarrinho } from "../../servicos/CarrinhoLocalStorage";
import { Link } from 'react-router-dom';


/**
 * Componente: MeuCarrinho
 * 
 * Este componente é responsável por exibir os produtos adicionados ao carrinho
 * e permitir que o usuário visualize o resumo do pedido antes de finalizar a compra.
 * 
 * Funcionalidades principais:
 * - Carrega os itens salvos no carrinho (armazenados no LocalStorage).
 * - Exibe cada produto com suas informações básicas.
 * - Permite remover itens individualmente do carrinho.
 * - Mostra um resumo com o total do pedido e um botão para ir ao checkout.
 */

function MeuCarrinho(){
     // Estado que armazena o conteúdo atual do carrinho
    const [carrinho, setCarrinho] = useState({ items: [] })

    //useEffect executa apenas uma vez ao carregar o componente.
    //Busca os dados do carrinho salvos no LocalStorage através da função getCarrinho().
    useEffect(() => {
        const localStorage = getCarrinho()
        setCarrinho(localStorage)
    }, [])

    return(
        <main className='main-carrinho'>

            {/* Seção principal dos itens do carrinho */}
            <section className='container-meusPedidos'>
                <section className='container-cardsMeusPedidos'>
                    <h2>Meu Carrinho</h2>

                    {/* Mapeia e renderiza cada produto do carrinho */}
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

            {/* Seção com o resumo do pedido (valores estáticos por enquanto) */}
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
                        <Link to={'/checkout'}>
                            <Botao
                                className={'botao-finalizarPedido'}
                                text={'Finalizar Pedido'}
                            />
                        </Link>
                        
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default MeuCarrinho