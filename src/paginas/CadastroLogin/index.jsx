import { Link } from "react-router-dom";
import Botao from '../../componentes/Botao'
import Input from '../../componentes/Input'
import './cadastroLogin.css'

function CadastroLogin(){
    return(
        <div>
            <div className="login-container">
                <form className="login-form">
                    <h1>Welcome Back</h1>
                    <p>Sing in to your accont</p>

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