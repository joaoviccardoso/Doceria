import './botao.css'

function Botao({ className, text }){
    return (
        <button 
            className={className} 
        >
            {text}
        </button> 
    )
}

export default Botao