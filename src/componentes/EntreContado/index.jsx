import Botao from '../Botao'
import Input from '../Input'
import './entreContado.css'
import rapazSegurandoUmBolo from "/assets/RapazComUmBolaNaMao.png";
import backgroundMorango from "/assets/morango-removebg-preview.png";

function EntreContado(){
    return(
        <div className='entre-contato'>
            <form className='container-formulario'>
                <h4 className='titulo-entreContata'>Entre em Contato</h4>
                <label>Nome:</label>
                <Input
                    tipo={'text'}
                    className={'input-formulario'}
                    placeholder={'Nome'}
                />

                <label>E-mail:</label>
                <Input
                    tipo={'email'}
                    className={'input-formulario'}
                    placeholder={'Email'}
                />

                <label>Mensagem:</label>
                <textarea
                    className={'input-formulario inputMensagem'}
                    placeholder={'Sua Mensagem.'}
                ></textarea>
                <Botao
                    className={'botao-submit'}
                    text={'Enviar'}
                />
            </form>
            <div className='container-img-contato'>
                <img src={rapazSegurandoUmBolo} alt="Rapaz segurando um bolo para entrega" />
            </div>
            <img className='backgroundMorango3' src={backgroundMorango} alt="background morango" />
        </div>
    )
}

export default EntreContado