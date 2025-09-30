import './cardapio.css'
import mocaBanner from '../../assets/MocaFazendoUmBolo.png'
import Banner from '../../componentes/Banner'


function Cardapio(){
    return (
        <Banner
            titulo={'Seu bolo, do seu jeito!'}
            texto={'Escolha a massa perfeita, adicione o recheio que mais ama e finalize com a cobertura dos seus sonhos. Crie uma combinação única e deliciosa, feita especialmente para você!'}
            srcImg={mocaBanner}
            alt={'Bolo de Morango'}
            aos={'zoom-in'}
            className={'imgCardapio'}
        />
    )
}

export default Cardapio