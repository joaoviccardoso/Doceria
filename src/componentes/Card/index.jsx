import './card.css'
import { useEffect, useState } from 'react'

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
    <div>
        {produtos.map(produto => (
        <article className='card' key={produto.id}>
            <img src={produto.image} alt={produto.type} />
            <h3>{produto.title}</h3>
            <p>{produto.type}</p>
            <p>{produto.description}</p>
            <p>
            {produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
        </article>
        ))}
    </div>
)

}

export default Card