import './cardapio.css'
import mocaBanner from '../../assets/MocaFazendoUmBolo.png'
import Banner from '../../componentes/Banner'
import Faixa from '../../componentes/Faixa'


function Cardapio(){
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
                <aside className="sidebar">
                    <nav>
                        <ul>
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
                    </nav>
                </aside>

                <section className='containerCardapio'>

                </section>
            </section>
        </main>
    )
}

export default Cardapio