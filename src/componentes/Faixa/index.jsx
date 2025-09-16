import './faixa.css';

function Faixa({ texto, texto2 }){
    return (
        <div className='faixa-titulo'>
            <h3>{texto}</h3>
            <h3>{texto2}</h3>
        </div>
    )
}

export default Faixa