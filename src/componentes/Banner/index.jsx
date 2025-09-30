import Botao from '../Botao'
import './banner.css'

function Banner({titulo,texto ,srcImg, alt, aos, className}){
    return (
        <section className='banner-header'>
            <div className='banner-containerIntroducao'>
                <h1 
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    {titulo}
                </h1>
                <p 
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    
                {texto}
                    
                </p>
                <Botao 
                    aos='fade-up'
                    delay='700'
                    className={'btn-banner'}
                    text={'Fazer Orçamento'}
                ></Botao>
            </div>
            <div className='container-img'>
                <div data-aos={aos} className='fundo-img'>
                    <img 
                        className={className}
                        src={srcImg} 
                        alt={alt}
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner