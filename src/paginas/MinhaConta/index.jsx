import { Link } from 'react-router-dom'
import './minhaConta.css'
import { useEffect, useState } from 'react'
import MenuCliente from '../../componentes/menuCliente'

function MinhaConta() {
    const [usuario, setUsuario] = useState([])
    const [pedidos, setPedidos] = useState([])

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

    useEffect(() => {
        async function fetchPedidos(){
            const respostaPedidos = await fetch('/data/pedidos.json')
            if(!respostaPedidos.ok){
                alert('erro para carregar a mensagem')
            }
            const pedidos = await respostaPedidos.json()
            console.log(pedidos)
            setPedidos(pedidos)
        }

        fetchPedidos()
    }, [])


    return(
        <main className='main-navegacaoCliente'>
            <section className='container-navegacaoCliente'>
                <MenuCliente/>
            </section>

            <section className='container-infomacaoCliente'>
                <div className='container-tituloInformacaoCliente'>
                    <h3>Olá, Joao</h3>
                    <p style={{color : "#212121"}}>Aqui você encontra todas as informações relacionadas a sua conta.</p>
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
                                <div className='titulo-informacoes'><h4 className='h4-titulosMinhaConta'>Ultimo pedido</h4></div>
                                <p>{pedidos?.length}</p>
                            </div>
                        </Link>
                    </li>
                    
                    <li className='link-endereco'>
                        <Link className='link-infomacaoCliente' to={'/minhaConta/endereco'}>
                            Endereço 
                            <div className='container-informacaoDeEndereco'>
                                <div className='titulo-informacoes container-adicionarEndereco'><h4 className='h4-titulosMinhaConta'>Meu Endereço</h4></div>

                                <h4 className='h4-titulosMinhaConta'>{usuario[0]?.address[0].street}</h4>
                                <h4 className='h4-titulosMinhaConta'>{usuario[0]?.address[0].number}</h4>
                                <h4 className='h4-titulosMinhaConta'>{usuario[0]?.address[0].neighborhood}</h4>
                                <h4 className='h4-titulosMinhaConta'>{usuario[0]?.address[0].city} - {usuario[0]?.address[0].state} - {usuario[0]?.address[0].cep}</h4>
                             </div>
                        </Link>
                    </li>
                    
                </ul>
            </section>
        </main>
    )
}

export default MinhaConta