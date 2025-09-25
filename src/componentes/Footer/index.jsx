import './footer.css'
import iconeWhatt from "../../assets/whattzap.png";
import iconePhone from "../../assets/phone 1.png";
import iconeEmail from "../../assets/envelope 1.png";
import iconeIntagra from "../../assets/instagram-logo (1) 1.png";
import iconeX from "../../assets/x-logo 1.png";
import iconeFace from "../../assets/facebook-logo (1) 1.png";


function Footer(){
    return(
        <footer className='footer'>
            <section className='secao-informacao-contato'>
                <div className='container-contato'>
                    <h5>Atendimento</h5>

                    <div className='cotainer-entrarEmContato'>
                        <img className='icone-contato' src={iconeWhatt} alt="icone" />
                        <div className='container-contato-texto'>
                            <h6>Whatsapp</h6>
                            <p>(19) 99999-9999</p>
                        </div>
                    </div>

                    <div className='cotainer-entrarEmContato'>
                        <img className='icone-contato' src={iconePhone} alt="icone telefone" />
                        <div className='container-contato-texto'>
                            <h6>Telefone:</h6>
                            <p>(19) 99999-9999</p>
                        </div>
                    </div>

                    <div className='cotainer-entrarEmContato'>
                        <img className='icone-contato' src={iconeEmail} alt="icone de email" />
                        <div className='container-contato-texto'>
                            <h6>E-mail</h6>
                            <p>joao.viccardoso.silva@gmail.com</p>
                        </div>
                    </div>
                </div>
                    
                <div className='saberMais'>
                    <h5>Sobre nós</h5>
                    <ul>
                        <li>Trabalhe Conosco</li>
                        <li>Trocas e Devoluções</li>
                        <li>Política de privacidade geral</li>
                    </ul>
                </div>

                <div className='container-redes'>
                    <h5>Redes:</h5>
                    <ul className='ul-redes'>
                        <li><img src={iconeIntagra} alt="logo instagram" /></li>
                        <li><img src={iconeX} alt="logo do X" /></li>
                        <li><img src={iconeFace} alt="logo do facebook" /></li>
                    </ul>
                </div>

            </section>
            
            <section>
                <h6>© 2025 Doceria Sweet shop. Todos os direitos reservados.</h6>
            </section>

        </footer>
    )
}

export default Footer