import './cardapio.css'
import { useEffect } from 'react';
import AOS from 'aos';
import mocaBanner from '../../assets/MocaFazendoUmBolo.png'
import Banner from '../../componentes/Banner'
import Faixa from '../../componentes/Faixa'
import Card from '../../componentes/Card'

function Cardapio(){
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })

        window.addEventListener("load", () => {
            AOS.refresh()
        })                    
    },[]);

    return (
        <main>
            <Banner
                titulo={'Seu bolo, do seu jeito!'}
                texto={'Escolha a massa perfeita, adicione o recheio que mais ama e finalize com a cobertura dos seus sonhos. Crie uma combinação única e deliciosa, feita especialmente para você!'}
                srcImg={mocaBanner}
                alt={'Bolo de Morango'}
                aos={'zoom-in'}
                className={'imgCardapio'}
            />
            
            <section>
                <Faixa
                    texto={'Vem entender por que nossos doces'}
                    texto2={'conquistam corações'}
                    
                />

                <section className='container-listaEhCard'>

                    <aside className="sidebar">
                            <ul className='ListaProdutos'>
                                <li><a href="#">Bolo</a></li>
                                <hr/>
                                <li><a href="#">Bolo</a></li>
                                <hr/>
                                <li><a href="#">Bolo</a></li>
                                <hr/>
                                <li><a href="#">Bolo</a></li>
                                <hr/>
                                <li><a href="#">Bolo</a></li>
                                <hr/>
                                <li><a href="#">Bolo</a></li>
                                <hr/>
                            </ul>
                    </aside>
                    


                    <div className='containerCardapio'>
                        <Card/>
                    </div>

                </section>
            </section>
        </main>
    )
}

export default Cardapio