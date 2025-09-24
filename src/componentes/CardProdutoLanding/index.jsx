import Botao from '../Botao'
import './cardProdutoLanding.css'

function ProdutoLanding({img, categoria, nome,descricao,aos}){
    return(
        <div data-aos={aos} className='container-produtoLanding'>
            <img className='img-produtoLanding' src={img} alt="Imagem De um Doce" />
            <div>
                <span>
                    {categoria}
                </span>
                <h3>{nome}</h3>
                <p>{descricao}</p>
                <Botao
                    className={'verCardapio'}
                    text={'Ver Cardapio'}
                />
            </div>
        </div>
    )
}

export default ProdutoLanding