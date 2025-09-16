import './CardInformacao.css';

function CardInformacao({ srcImg, titulo, texto, className, alt }){
    return(
        <div className={className}>
            <img className='logo-img' src={srcImg} alt={alt}/>
            <h4 className='cardInfo-titulo'>{titulo}</h4>
            <p className='cardInfo-texto'>{texto}</p>
        </div>
        
    )
}

export default CardInformacao