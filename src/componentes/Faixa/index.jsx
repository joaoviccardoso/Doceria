import './faixa.css';

function Faixa({ texto, texto2 }){
    return (
        <div className='container-faixa'>
            <img className='backgroundMorango1' src="./src/assets/morango-removebg-preview.png" alt="background morango" />
            <div className='faixa-titulo'>
                <h3>{texto}</h3>
                <h3>{texto2}</h3>
            </div>
        </div>
        
    )
}

export default Faixa