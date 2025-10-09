
import './App.css'
import CartContainer from './components/CartContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import NavBarContainer from './components/NavBarContainer'
import { BrowserRouter, Routes, Route } from 'react-router';
import Checkout from './components/Checkout';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <NavBarContainer />

      <Routes>
        <Route path = "/" element= {<ItemListContainer/>}/>
        <Route path = "/category/:id" element= {<ItemListContainer/>}/>
        <Route path = "/item/:id" element= {<ItemDetailContainer/>}/>
        <Route path = "/cart" element= {<CartContainer/>}/>
        <Route path = "/checkout" element= {<Checkout/>}/>
      </Routes>

      <Toaster position="top-right" reverseOrder={false} />

    </BrowserRouter>
  )
}

export default App
