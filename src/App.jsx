
import './App.css'
import NavbarComponent from './components/NavbarComponent' 
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from "./components/Error"
import { CartProvider } from './context/CartContext'
import CartView from './components/CartView'
import Checkout from './components/Checkout'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarComponent/>

        <Routes>
          <Route path='/' element={<ItemListContainer greeting = "Bienvenido a nuestra tienda"/>}/>
          <Route path='/products/:category' element={<ItemListContainer greeting = "Categoria: "/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartView/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
