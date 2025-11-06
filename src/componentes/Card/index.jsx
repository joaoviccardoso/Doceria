import './card.css';
import Botao from '../Botao';
import { addToCarrinho } from "../../servicos/CarrinhoLocalStorage";

function Card({produto}){
    return(
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
    )
}

export default Card