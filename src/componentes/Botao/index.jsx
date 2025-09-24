import './botao.css'

function Botao({ className, text, aos,  }){
    return (
        <button 
            data-aos={aos}
            data-aos-delay='600'
            className={className} 
        >
            {text}
        </button> 
    )
}

export default Botao