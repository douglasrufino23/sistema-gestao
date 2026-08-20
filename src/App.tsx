import { BrowserRouter, Routes, Route } from  'react-router-dom' 
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { DisplayEstoque } from './pages/DisplayEstoque'
import { DisplayPdv } from './pages/DisplayPdv'
import { DisplayRelatorio } from './pages/DisplayRelatorio'

function App() {
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>          
        <Route path='/sistema/home' element={<Home/>}/>
        <Route path='/sistema/estoque' element={<DisplayEstoque/>}/>
        <Route path='/sistema/pdv' element={<DisplayPdv/>}/>
        <Route path='/sistema/relatorio' element={<DisplayRelatorio/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
