import './landingPage.css';
import { useState, useEffect, useRef } from 'react';
import Banner from '../../componentes/Banner';
import CardInformacao from '../../componentes/CardInformacao';
import Faixa from '../../componentes/Faixa';
import Botao from '../../componentes/Botao';
import ProdutoLanding from '../../componentes/CardProdutoLanding';
import RegistroDePedidosFeitos from '../../componentes/RegistroDePedidosFeitos';
import { motion } from "framer-motion"
import EntreContado from '../../componentes/EntreContado';

function LandingPage(){
    const carrossel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    },[])

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

            <section className='container-maisInformacao'>
                <div className='banner-fazerOrcamento'>
                    <span>
                        <h4>Delícias feitas com carinho!</h4>
                        <p>Confira alguns dos nossos doces mais pedidos:</p>
                    </span>
                    <span>
                        <h4>Aqui, cada doce é especial.</h4>
                        <p>Usamos ingredientes selecionados, frescos e de alta qualidade para garantir o sabor que conquista no primeiro pedaço. Seu momento merece o melhor!</p>
                    </span>

                    <img src="./src/assets/MocaSegurandoUmBolo.png" alt="Mulher segurando um bolo " />
                    <Botao
                        className={'btn-fazerOrcamento'}
                        text={'Fazer Orçamento'}
                    />

                </div>
                <div className='div-cardProdutos'>
                    <ProdutoLanding
                        img={'./src/assets/Brigadeiro (2).png'}
                        categoria={'Chocolate'}
                        nome={'Brigadeiro'}
                        descricao={'Irresistível, crocante e feito na hora. Peça agora e surpreenda seu paladar!'}
                    />
                     <ProdutoLanding
                        img={'./src/assets/Brigadeiro (2).png'}
                        categoria={'Chocolate'}
                        nome={'Brigadeiro'}
                        descricao={'Irresistível, crocante e feito na hora. Peça agora e surpreenda seu paladar!'}
                    />
                     <ProdutoLanding
                        img={'./src/assets/Brigadeiro (2).png'}
                        categoria={'Chocolate'}
                        nome={'Brigadeiro'}
                        descricao={'Irresistível, crocante e feito na hora. Peça agora e surpreenda seu paladar!'}
                    />
                </div>
                
            </section>

            <section className='container-registro'>
                <img className='backgroundMorango2' src="./src/assets/morango-removebg-preview.png" alt="background morango" />
                <h3>Alguns Registros...</h3>
                <p>Confira alguns de nossos pedidos e veja como cada doce pode contar historias únicas e tornar momentos inesquecíveis.</p>
                <div className='container-carrosel'>
                    <motion.div ref={carrossel} className='carrossel'>
                        <motion.div 
                            className='inner'
                            drag='x'
                            dragConstraints={{right: 0, left: -width}}
                        >
                            <RegistroDePedidosFeitos/>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Faixa
                texto={'Fale com a gente e faça sua encomenda'}
                texto2={'com carinho e agilidade.'}
            />

            <section className='secao-entreContato'>
                <EntreContado/>
            </section>
        </main>
        
    )
}

export default LandingPage