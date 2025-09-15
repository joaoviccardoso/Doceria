import Banner from '../../componentes/Banner';
import './landingPage.css';

function LandingPage(){
    return (
        <Banner
            titulo={'O sabor que conquista corações'}
            texto={'Aqui, cada doce é feito com carinho, ingredientes fresquinhos e uma pitada de criatividade. Do famoso Morango do Amor aos nossos brigadeiros, brownies, cupcakes, tortas e muito mais, temos o sabor perfeito para cada momento especial.'}
            srcImg={'./src/assets/BoloDeMorangoSemFundo.png'}
            alt={'Bolo de Morango'}
        />
    )
}

export default LandingPage