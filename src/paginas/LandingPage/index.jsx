import Banner from '../../componentes/Banner';
import Faixa from '../../componentes/Faixa';
import './landingPage.css';

function LandingPage(){
    return (
        <main>  
            <Banner
                titulo={'O sabor que conquista corações'}
                texto={'Aqui, cada doce é feito com carinho, ingredientes fresquinhos e uma pitada de criatividade. Do famoso Morango do Amor aos nossos brigadeiros, brownies, cupcakes, tortas e muito mais, temos o sabor perfeito para cada momento especial.'}
                srcImg={'./src/assets/BoloDeMorangoSemFundo.png'}
                alt={'Bolo de Morango'}
            />
            <section className='container-informacao'>
                <Faixa
                    texto={'Vem entender por que nossos doces'}
                    texto2={'conquistam corações'}
                />
            </section>
        </main>
        
    )
}

export default LandingPage