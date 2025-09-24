import React, { useEffect } from "react";
import './CardInformacao.css';
import AOS from 'aos';
import "aos/dist/aos.css";

function CardInformacao({ srcImg, titulo, texto, className, alt, aos }){

    return(
        <div data-aos={aos} className={className}>
            <img className='logo-img' src={srcImg} alt={alt}/>
            <h4 className='cardInfo-titulo'>{titulo}</h4>
            <p className='cardInfo-texto'>{texto}</p>
        </div>
        
    )
}

export default CardInformacao