import './cardapio.css'
import { useEffect } from 'react';
// Importa a biblioteca AOS (Animate On Scroll) para criar animações quando o usuário rolar a página
import AOS from 'aos';
import mocaBanner from '/assets/MocaFazendoUmBolo.png'
import Banner from '../../componentes/Banner'
import Faixa from '../../componentes/Faixa'
import Card from '../../componentes/Card'

// Componente principal da página "Cardápio"
function Cardapio(){
     // useEffect executa o código dentro dele assim que o componente for montado na tela
    useEffect(() => {
        // Inicializa o AOS com algumas configurações
        AOS.init({
            duration: 1000,
            once: true,
        })

         // Garante que o AOS seja atualizado após o carregamento total da página
        window.addEventListener("load", () => {
            AOS.refresh()
        })                    
    },[]);

    return (
        <main>
            {/* Seção principal do banner da página */}
            <Banner
                titulo={'Seu bolo, do seu jeito!'}
                texto={'Escolha a massa perfeita, adicione o recheio que mais ama e finalize com a cobertura dos seus sonhos. Crie uma combinação única e deliciosa, feita especialmente para você!'}
                srcImg={mocaBanner}
                alt={'Bolo de Morango'}
                aos={'zoom-in'}
                className={'imgCardapio'}
            />
            
            <section>
                 {/* Faixa com frases destacadas */}
                <Faixa
                    texto={'Vem entender por que nossos doces'}
                    texto2={'conquistam corações'}
                    
                />

                <section className='container-listaEhCard'>
                    {/* Barra lateral com categorias de produtos */}
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
                    

                    {/* Container principal onde são exibidos os cards de produtos */}
                    <div className='containerCardapio'>
                        <Card/>
                    </div>

                </section>
            </section>
        </main>
    )
}

export default Cardapio