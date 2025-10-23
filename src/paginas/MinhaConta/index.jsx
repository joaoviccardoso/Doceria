import { Link } from 'react-router-dom'
import './minhaConta.css'
import { useEffect, useState } from 'react'

function MinhaConta() {
    const [usuario, setUsuario] = useState([])


    useEffect(() => {
        const fetchUsuario = async () => {
            const resposta = await fetch('/data/cliente.json')
            if(!resposta.ok){
                alert('erro para carregar a mensagem')
            }
            const usuario = await resposta.json()
            setUsuario(usuario)
        }

        fetchUsuario()
    }, [])

    return(
        <main className='main-navegacaoCliente'>
            <section className='container-navegacaoCliente'>
                <nav className='nav-navegacaoCliente'>
                    <ul className='ul-navegacaoCliente'>
                        <li className='link-navegacaoCliente'><Link to={'/minhaConta'}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                </svg>
                            </span>
                            Minha conta</Link>
                        </li>

                        <li className='link-navegacaoCliente'><Link to={'/minhaConta/meusPedidos'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                            </svg>
                            Meus Pedidos</Link>
                        </li>

                        <li className='link-navegacaoCliente'><Link to={'/minhaConta/endereco'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                            </svg>
                            Meu Endereço</Link> 
                        </li>
                        <li className='link-navegacaoCliente'><Link to={'/minhaConta/meusDados'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                            </svg>
                            Meus Dados
                            </Link>
                        </li>
                        <li className='link-navegacaoCliente'><Link to={'/minhaConta/favorito'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-list-stars" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>
                                <path d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.28.28 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.27.27 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.28.28 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.27.27 0 0 0 .259-.194zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.28.28 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.27.27 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.28.28 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.27.27 0 0 0 .259-.194zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.28.28 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.27.27 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.28.28 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.27.27 0 0 0 .259-.194z"/>
                            </svg>
                            Meus Favoritos</Link>
                        </li>
                    </ul>
                </nav>
            </section>

            <section className='container-infomacaoCliente'>
                <div className='container-tituloInformacaoCliente'>
                    <h3>Olá, Joao</h3>
                    <p>Aqui você encontra todas as informações relacionadas a sua conta.</p>
                </div>
                
                <ul className='ul-infomacaoCliente'>
                    <li className='li-informaCliente'><Link className='link-infomacaoCliente' to={'/minhaConta'}>Minha conta</Link></li>
                    <li className='li-informaCliente'><Link className='link-infomacaoCliente' to={'/minhaConta/favorito'}>Meus Favoritos</Link></li>
                    <li className='li-informaCliente'><Link className='link-infomacaoCliente'>Sair</Link></li>

                    
                        <li className='link-meusDados'>
                            <Link className='link-infomacaoCliente' to={'/minhaConta/meusDados'}>
                                Meus Dados 
                                <div className='container-informacaoDeAcesso'>
                                    <div className='titulo-informacoes'><h4 className='h4-titulosMinhaConta'>Informações de Acesso</h4></div>

                                    <div className='container-nomeUsuario'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                        </svg>

                                        <h4 className='h4-titulosMinhaConta'>{usuario[0]?.name}</h4>
                                    </div>

                                    <div className='container-emailUsuario'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                        </svg>

                                        <h4 className='h4-titulosMinhaConta'>{usuario[0]?.email}</h4>
                                    </div>
                                
                                </div>
                            </Link>
                        </li>
                    
                    
                    <li className='link-meusPedidos'>
                        <Link className='link-infomacaoCliente' to={'/minhaConta/meusPedidos'}>
                            Meus Pedidos 
                            <div className='container-informacaoDePedido'>
                                <div className='titulo-informacoes'><h4>Ultimo pedido</h4></div>
                            </div>
                        </Link>
                    </li>
                    
                    <li className='link-endereco'>
                        <Link className='link-infomacaoCliente' to={'/minhaConta/endereco'}>
                            Endereço 
                            <div className='container-informacaoDeEndereco'>
                                <div className='titulo-informacoes container-adicionarEndereco'><h4>Meu Endereço</h4> <h4>+ Adicionar Endereço</h4> </div>

                                <h4 className='h4-titulosMinhaConta'>{usuario[0]?.address.street}</h4>
                                <h4 className='h4-titulosMinhaConta'>{usuario[0]?.address.number}</h4>
                                <h4 className='h4-titulosMinhaConta'>{usuario[0]?.address.neighborhood}</h4>
                                <h4 className='h4-titulosMinhaConta'>{usuario[0]?.address.city} - {usuario[0]?.address.state} - {usuario[0]?.address.cep}</h4>
                             </div>
                        </Link>
                    </li>
                    
                </ul>
            </section>
        </main>
    )
}

export default MinhaConta