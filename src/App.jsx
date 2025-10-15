import './App.css'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Cardapio from './paginas/Cardapio'
import LandingPage from './paginas/LandingPage'
import Cabecalho from './componentes/Nav'
import Footer from './componentes/Footer'
import PaginaNaoEncontrada from './paginas/paginaNaoEncontrada'
import CadastroLogin from './paginas/CadastroLogin'
import CriarConta from './paginas/CriarConta'
import MeuCarrinho from './paginas/MeuCarrinho'
import CheckOut from './paginas/CheckOut'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Cabecalho/>
      </header>
      
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/cardapio' element={<Cardapio/>}/>
          <Route path='/cadastro' element={<CadastroLogin/>}/>
          <Route path='/criarconta' element={<CriarConta/>}/>
          <Route path='/meuCarrinho' element={<MeuCarrinho/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='*' element={<PaginaNaoEncontrada/>}/>
        </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
