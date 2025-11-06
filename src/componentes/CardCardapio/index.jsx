
import Card from '../Card';
import './cardCardapio.css'
import { useEffect, useState } from 'react'

function CardCardapio(){
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
            <Card
                produto={produto}
            />       
        ))}
    </div>
)

}

export default CardCardapio