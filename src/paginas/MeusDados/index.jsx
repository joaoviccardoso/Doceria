import { useEffect, useState } from 'react'
import Input from '../../componentes/Input'
import MenuCliente from '../../componentes/menuCliente'
import './meusDados.css'
import Botao from '../../componentes/Botao'

function MeusDados(){
    const [meusDados, setMeusDados] = useState([])

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
                <div>
                    <h2>Olá, {meusDados[0]?.name}</h2>
                    <p>Aqui você encontra todas as informações relacionadas a sua conta.</p>
                </div>
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