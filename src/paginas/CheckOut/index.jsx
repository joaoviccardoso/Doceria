
import Input from '../../componentes/Input'
import './checkOut.css'

/**
 * Componente: CheckOut
 * -----------------------
 * Este componente representa a página de finalização de compra.
 * 
 * Ele contém:
 * - Um formulário para preenchimento das informações de entrega e pagamento.
 * - Um resumo do pedido com valores totais.
 * 
 * Atualmente, o formulário é estático — ainda não há integração com APIs
 * ou cálculos dinâmicos de valores.
 */
function CheckOut(){
    return (
        <main className='main-checkout'>
            {/* Seção principal contendo o formulário de checkout */}
            <section className='container-checkout'>
                <form action="" className='form-checkout'>
                    <h2>CheckOut</h2>
                    <hr />
                    {/* Seção de informações de entrega do pedido */}
                    <div className='informacao-entrega'>
                        <h3>Informaçoes de Entrega</h3>
                        <Input 
                            tipo={'text'}
                            className={'input-checkout input-large'}
                            placeholder={'Nome Completo'}
                        />

                        <Input 
                            tipo={'text'}
                            className={'input-checkout input-mediun'}
                            placeholder={'Endereço'}
                        />

                        <Input 
                            tipo={'number'}
                            className={'input-checkout input-mini'}
                            placeholder={'Numero'}
                        />

                        <Input 
                            tipo={'text'}
                            className={'input-checkout input-mini'}
                            placeholder={'Complemento'}
                        />

                        <Input 
                            tipo={'text'}
                            className={'input-checkout input-mini'}
                            placeholder={'Bairro'}
                        />

                        <Input 
                            tipo={'text'}
                            className={'input-checkout input-mini'}
                            placeholder={'Cidade'}
                        />

                        <Input 
                            tipo={'text'}
                            className={'input-checkout input-metade'}
                            placeholder={'Estado'}
                        />

                        <Input 
                            tipo={'number'}
                            className={'input-checkout input-metade'}
                            placeholder={'Cep'}
                        />
                    </div>

                    {/* Seção de métodos de pagamento */}
                    <div className='informacao-pagamento'>
                        <h3>Metodo de Pagamento</h3>
                        <div className='container-formaDePagamento'>
                            <span>
                                <Input
                                    tipo={'radio'}
                                />
                                <p>Pay with Paypal</p>
                            </span>
                        </div>

                        {/* Opção 2 - Pagamento com Cartão de Crédito/Débito */}
                        <div className='container-formaDePagamento'>
                            <span>
                                <Input
                                    tipo={'radio'}
                                />
                                <p>Credit / Debit Card</p>
                            </span>

                            {/* Campos adicionais para informações do cartão */}
                            <div className='informacao-pagamentoCard'>
                                <Input 
                                    tipo={'number'}
                                    className={'input-checkout input-mediun'}
                                    placeholder={'Numero do Cartão'}
                                />

                                <Input 
                                    tipo={'number'}
                                    className={'input-checkout input-mini'}
                                    placeholder={'CVV'}
                                />

                                <Input 
                                    tipo={'text'}
                                    className={'input-checkout input-mediun'}
                                    placeholder={'Nome no Cartão '}
                                />

                                <Input 
                                    tipo={'date'}
                                    className={'input-checkout input-mini'}
                                    placeholder={'MM / AA'}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </section>

            {/* Seção lateral com resumo do pedido */}
            <section className='container-valorTotal'>
                <ul className='lista-valorCarrinho'>
                    <li><h3>Resumo do Pedido</h3></li>
                    <li>
                        <p>Subtotal</p>
                        <p>R$220,00</p>
                    </li>
                    <hr/>
                    <li>
                        <p>Frete</p>
                        <p>R$0,00</p>
                    </li>
                    <hr/>
                    <li>
                        <p>Descontos</p>
                        <p>R$0,00</p>
                    </li>
                    <hr/>
                    <li>
                        <p>Total</p>
                        <p>R$220,00</p>
                    </li>
                </ul>
            </section>  
        </main>
    )
}

export default CheckOut