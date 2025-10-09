import Botao from '../../componentes/Botao'
import Input from '../../componentes/Input'
import './criarConta.css'

function CriarConta(){
    return(
        <main className='main-criarConta'>
            <form className='container-criarConta'>
                <div className='container-informacao'>
                    <h2>Crie sua conta pessoal</h2>
                    <p>Será enviado (solicitado) uma confirmação do cadastro por e-mail.</p>
                </div>
                <div className='container-informacoesPessoal'>
                    <Input 
                        tipo={'text'}
                        className={'input-informacaoPequeno'}
                        placeholder={'Nome'}
                    />

                    <Input 
                        tipo={'text'}
                        className={'input-informacaoPequeno'}
                        placeholder={'Sobre Nome'}
                    />

                    <Input 
                        tipo={'date'}
                        className={'input-informacaoPequeno'}
                        placeholder={'Data de Nascimento'}
                    />

                    <Input 
                        tipo={'number'}
                        className={'input-informacaoPequeno'}
                        placeholder={'Telefone'}
                    />

                    <Input 
                        tipo={'number'}
                        className={'input-informacaoGrande'}
                        placeholder={'CPF'}
                    />
                </div>

                <div className='container-informacoesConta'>
                    <Input 
                        tipo={'text'}
                        className={'input-informacaoGrande'}
                        placeholder={'Email'}
                    />

                    <Input 
                        tipo={'text'}
                        className={'input-informacaoGrande'}
                        placeholder={'Confirmar Email'}
                    />

                    <div className='containerSenha'>
                        <Input 
                            tipo={'text'}
                            className={'input-informacaoPequeno'}
                            placeholder={'Senha'}
                        />

                        <Input 
                            tipo={'text'}
                            className={'input-informacaoPequeno'}
                            placeholder={'Confirmar Senha'}
                        />
                    </div>
                    
                </div>

                <div className='Container-finalizarForm'>
                    <Botao
                        text={'Criar Conta'}
                        className={'btnCriarConta'}
                    />
                </div>
            </form>
        </main>
    )
}

export default CriarConta