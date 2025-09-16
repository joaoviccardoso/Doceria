import './landingPage.css';
import Banner from '../../componentes/Banner';
import CardInformacao from '../../componentes/CardInformacao';
import Faixa from '../../componentes/Faixa';

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
                <div className='container-cardInformacao'>
                    <CardInformacao
                        srcImg={'./src/assets/bolo.png'}
                        titulo={'Encomendas para festas e eventos.'}
                        texto={'Transforme sua comemoração em um momento inesquecível com nossos doces feitos sob medida para encantar seus convidados.'}
                        className={'card-informacao1'}
                        alt={'logo de uma fatia de bolo'}
                    />
                    <CardInformacao
                        srcImg={'./src/assets/celular.png'}
                        titulo={'Faça seu pedido pelo WhatsApp e receba com conforto e praticidade.'}
                        texto={'Peça seus doces favoritos sem sair de casa. Atendimento rápido, direto e cheio de carinho — do jeitinho que você merece.'}
                        className={'card-informacao2'}
                        alt={'logo de um celular'}
                    />
                    <CardInformacao
                        srcImg={'./src/assets/brigadeiro.png'}
                        titulo={'Doces artesanais com aquele gostinho de feito em casa..'}
                        texto={'Receitas preparadas com carinho, ingredientes frescos e o sabor autêntico que traz lembranças boas em cada mordida.'}
                        className={'card-informacao3'}
                        alt={'logo de um brigadeiro'}
                    />
                </div>
            </section>
        </main>
        
    )
}

export default LandingPage