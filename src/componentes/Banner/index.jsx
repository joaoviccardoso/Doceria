import Botao from '../Botao'
import './banner.css'

function Banner({titulo,texto ,srcImg, alt}){
    return (
        <section className='banner-header'>
            <div className='banner-containerIntroducao'>
                <h1>{titulo}</h1>
                <p>{texto}</p>
                <Botao 
                        className={'btn-banner'}
                        text={'Fazer Orçamento'}
                ></Botao>
            </div>
            <div className='container-img'>
                <div className='fundo-img'>
                    <img 
                        src={srcImg} 
                        alt={alt}
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner