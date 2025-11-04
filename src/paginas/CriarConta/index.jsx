import Botao from '../../componentes/Botao'
import Input from '../../componentes/Input'
import './criarConta.css'

/**
 * Componente: CriarConta
 * -----------------------
 * Este componente representa a página de criação de conta do usuário.
 * Ele exibe um formulário dividido em seções para coleta de dados pessoais
 * e informações de login, como e-mail e senha.
 * 
 * Atualmente, o formulário é apenas visual — não há integração com API nem
 * tratamento de validação de dados.
 */
function CriarConta(){
    return(
        <main className='main-criarConta'>
            {/* Formulário principal de criação de conta */}
            <form className='container-criarConta'>
                <div className='container-informacaoCriarConta'>
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