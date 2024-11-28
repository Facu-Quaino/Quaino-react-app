
import './App.css'
import NavbarComponent from './components/NavbarComponent' 
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <NavbarComponent/>

      <Routes>
        <Route path='/' element={<ItemListContainer greeting = "Welcome to Marketplace.tf"/>}/>
        <Route path='/products/:category' element={<ItemListContainer greeting = "Category: "/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
