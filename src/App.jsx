import './App.css'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Cardapio from './paginas/Cardapio'
import LandingPage from './paginas/LandingPage'
import Cabecalho from './componentes/Nav'
import Footer from './componentes/Footer'

function App() {
  return (
    <BrowserRouter>
      <Cabecalho/>

        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/cardapio' element={<Cardapio/>}/>
        </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
