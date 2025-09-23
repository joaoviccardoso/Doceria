import './footer.css'

function Footer(){
    return(
        <footer className='footer'>
            <section className='secao-informacao-contato'>
                <div className='container-contato'>
                    <h5>Atendimento</h5>

                    <div className='cotainer-entrarEmContato'>
                        <img className='icone-contato' src="./src/assets/whattzap.png" alt="" />
                        <div className='container-contato-texto'>
                            <h6>Whatsapp</h6>
                            <p>(19) 99999-9999</p>
                        </div>
                    </div>

                    <div className='cotainer-entrarEmContato'>
                        <img className='icone-contato' src="./src/assets/phone 1.png" alt="" />
                        <div className='container-contato-texto'>
                            <h6>Telefone:</h6>
                            <p>(19) 99999-9999</p>
                        </div>
                    </div>

                    <div className='cotainer-entrarEmContato'>
                        <img className='icone-contato' src="./src/assets/envelope 1.png" alt="" />
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
                        <li><img src="./src/assets/instagram-logo (1) 1.png" alt="logo instagram" /></li>
                        <li><img src="./src/assets/x-logo 1.png" alt="logo do X" /></li>
                        <li><img src="./src/assets/facebook-logo (1) 1.png" alt="logo do facebook" /></li>
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