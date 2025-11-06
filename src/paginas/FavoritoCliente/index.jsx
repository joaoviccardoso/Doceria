
import { useEffect, useState } from 'react'
import InformacoesCliente from '../../componentes/InformacaoDoCliente'
import MenuCliente from '../../componentes/menuCliente'
import './favoritosCliente.css'
import Card from '../../componentes/Card'

function Favoritos(){
    const [favoritos, setFavoritos] = useState([])

    useEffect( () => {
        async function PegarListaFavoritos(){
            const dados = await fetch('/data/favoritos.json');
            if(!dados.ok){
                alert('erro para carregar os favoritos')
            }
            const itensFavoritos = await dados.json()
            setFavoritos(itensFavoritos)
            console.log(itensFavoritos)
        }

        PegarListaFavoritos()
    },[])

    return(
       <main className='main-favoritos'>
            <section className='container-navegacaoCliente'>
                <MenuCliente/>
            </section>

            <section className='container-produtosFavoritos'>
                <InformacoesCliente/>

                <section className='container-favoritos'>
                    {favoritos.map(favorito => (
                        <Card
                            produto={favorito}
                        />
                    ))}
                </section>
            </section>
       </main> 
    )
}

export default Favoritos