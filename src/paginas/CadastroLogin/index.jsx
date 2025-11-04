// Importa o componente Link para criar navegação entre páginas sem recarregar a aplicação (via React Router)
import { Link } from "react-router-dom";
import Botao from '../../componentes/Botao'
import Input from '../../componentes/Input'
import './cadastroLogin.css'

// Define o componente funcional "CadastroLogin". Atualmente, o cadastro é estático — ainda não há integração com APIs
function CadastroLogin(){
    return(
        <div>
            {/* Container principal da página de login */}
            <div className="login-container">
                {/* Formulário de login do usuário */}
                <form className="login-form">
                    <h1>Welcome Back</h1>
                    <p>Sing in to your accont</p>
                    
                    {/* Campo de entrada para o email do usuário */}
                    <label>Email</label>
                    <Input
                        tipo="email"
                        placeholder="Digite seu email"
                        className={'input-login'}
                        required
                    />

                    <label>Senha</label>
                    <Input
                        tipo="password"
                        placeholder="Digite sua senha"
                        className={'input-login'}
                        required
                    />

                    {/* Seção com "Remember me" e link de recuperação de senha */}
                    <div className="container-inputRadio">
                        <label> 
                            <Input 
                                tipo="radio"
                            />  Remember me
                        </label>
                        
                        <Link to={'/forgotPassword'}>Forgot Password?</Link>
                    </div>
                    

                    <Botao
                        text={'Sing Up'}
                        className={'btnSubmit-entrar'}
                    />

                    <Link to={'/criarconta'}>Criar uma Conta.</Link>

                </form>
            </div>
        </div>
    )
}

export default CadastroLogin