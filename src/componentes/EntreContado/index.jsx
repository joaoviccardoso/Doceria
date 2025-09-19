import Botao from '../Botao'
import Input from '../Input'
import './entreContado.css'

function EntreContado(){
    return(
        <div className='entre-contato'>
            <form className='container-formulario'>
                <h4>Entre em Contato</h4>
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
                <img src="./src/assets/RapazComUmBolaNaMao.png" alt="Rapaz segurando um bolo para entrega" />
            </div>
        </div>
    )
}

export default EntreContado