import { useEffect, useState } from 'react'
import Input from '../../componentes/Input'
import MenuCliente from '../../componentes/menuCliente'
import './meusDados.css'
import Botao from '../../componentes/Botao'
import InformacoesCliente from '../../componentes/InformacaoDoCliente'

// Componente responsável por exibir e permitir a edição dos dados pessoais do cliente.
function MeusDados(){
    // Estado local que armazena os dados do cliente
    const [meusDados, setMeusDados] = useState([])

    //  useEffect é executado apenas uma vez (ao montar o componente).
    //  Ele busca as informações do cliente no arquivo /data/cliente.json.
    useEffect(() => {
        const fetchCliente = async () => {
            const dados = await fetch('/data/cliente.json');
            if(!dados.ok){
                alert('erro para carregar a mensagem')
            }
            const cliente = await dados.json()
            setMeusDados(cliente)
        }

        fetchCliente()
    }, [])

    return(
        <main className='main-meusDados'>
            <section className='container-navegacaoCliente'>
                <MenuCliente/>
            </section>

            <section className='container-meusDados'>

                <InformacoesCliente/>

                <form action="" className='form-meusDados'>

                    <div className='containerForm-NomeCliente'>
                        <Input
                            className={'input-minhaConta'}
                            tipo={'text'}
                            placeholder={meusDados[0]?.name}
                        />
                    </div>

                    <div className='containerForm-dataEhCpf'>
                        <Input
                            id={'inputDate-meusDados'}
                            className={'input-minhaConta'}
                            tipo={'text'}
                            placeholder={meusDados[0]?.date}
                        /> 

                        <Input
                            id={'inputCpf-meusDados'}
                            className={'input-minhaConta'}
                            tipo={'text'}
                            placeholder={meusDados[0]?.cpf}
                        />
                    </div>

                    <div className='containerForm-email'>
                        <Input
                            className={'input-minhaConta'}
                            tipo={'text'}
                            placeholder={meusDados[0]?.email}
                        />
                    </div>

                    <div className='containerForm-telefoneEhBotoes'>
                        <Input
                            id={'inputPhone-meusDados'}
                            className={'input-minhaConta'}
                            tipo={'text'}
                            placeholder={meusDados[0]?.phone}
                        />


                            <Botao
                                id={'botaoExcluirConta'}
                                className={'btnExcluirEhEditarConta'}
                                text={'Excluir Conta'}
                            />

                            <Botao
                                id={'botaoAtualizarConta'}
                                className={'btnExcluirEhEditarConta'}
                                text={'Atualizar Conta'}
                            />
                    
                    </div>
                </form>
            </section>
        </main>
    )
}

export default MeusDados