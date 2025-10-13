import './meuCarrinho.css'
import { useState } from 'react'
const CART_KEY = 'doceria_cart';

function MeuCarrinho(){
    const [carrinhos, setCarrinho] = useState(() =>{
        const valorCarrinho = localStorage.getItem(CART_KEY)
        return valorCarrinho ? JSON.parse(valorCarrinho) : { items: [], total: 0 };
    })

    function excluir(){

    }

    function saveSampleCart() {
        const items = [
            {
                id: 1,
                image: './src/assets/boloDeLimao.png',
                title: 'Bolo de Limão',
                quantity: 1,
                price: 82.90
            },
            {
                id: 2,
                image: './src/assets/BoloDeMorango.png',
                title: 'Bolo de Morango com Chantilly',
                quantity: 1,
                price: 78.00
            }
        ];

        const cart = { items };

        // transforma o objeto JS em string JSON
        const cartString = JSON.stringify(cart);

        // salva no localStorage
        localStorage.setItem(CART_KEY, cartString);

        console.log('Carrinho salvo com sucesso no localStorage!');
    }

    return(
        <main className='main-carrinho'>
            <section className='container-meusPedidos'>
                <section className='container-cardsMeusPedidos'>
                    <h2>Meu Carrinho</h2>
                    {carrinhos.items.map(item => (
                        <div key={item.id} className="card-item">
                            
                            <img src={item.image} alt={item.title} />
                            <span>
                                <h3>{item.title}</h3>
                                <p>Entrega 5 dias úteis</p>
                            </span>
                            
                            <span>
                                <p>Quantidade: {item.quantity}</p>
                                <button onClick={excluir}>Excluir</button>
                            </span>
                            
                            <p>Preço: R$ {item.price.toFixed(2)}</p>
                        </div>
                    ))} 
                </section>
            </section>

            <section className='container-valorTotal'>
                <button onClick={saveSampleCart}>Salvar exemplo no carrinho</button>
            </section>
        </main>
    )
}

export default MeuCarrinho