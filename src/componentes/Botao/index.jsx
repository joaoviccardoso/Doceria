import './botao.css'

function Botao({ className, text, aos, onClick }){
    return (
        <button 
            data-aos={aos}
            data-aos-delay='600'
            className={className} 
            onClick={onClick}
        >
            {text}
        </button> 
    )
}

export default Botao