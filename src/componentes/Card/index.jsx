import Botao from '../Botao';
import './card.css'
import { useEffect, useState } from 'react'
import { addToCarrinho } from "../../servicos/CarrinhoLocalStorage";

function Card(){
    const [produtos, setProduto] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const resposta = await fetch('/data/produto.json')
                if(!resposta.ok){
                    alert('erro para carregar a mensagem')
                }
                const data = await resposta.json()
                setProduto(data)
                console.log('Produtos carregados:', data);
            } catch (error) {
                alert('erro para consumir a api', error)
            }
        }

        fetchProdutos();
    }, [])

    useEffect(() => {
        console.log('Produtos atualizados:', produtos);
    }, [produtos]);

   return (
    <div className='container-card'>
        {produtos.map(produto => (
        <article className='card' key={produto.id}>
            <div className='container-card-img'>
                <img src={produto.image} alt={produto.type} className='imgProduto'/>
            </div>
            <h3>{produto.title}</h3>
            <span><p className='tipo-doce'>{produto.type}</p></span>
            <p className='descrição-doce'>{produto.description}</p>

            <div className='container-valorEhBtn'>
                <p className='ValorDoProduto'>
                   {produto.price   ? produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'Preço indisponível'}
                </p>
                <Botao
                    text={'Adicionar'}
                    className={"btn-adicionar"}
                    onClick={() => addToCarrinho(produto)}
                />
            </div>
            
        </article>
        ))}
    </div>
)

}

export default Card