import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import CartDetails from './components/CartDetails';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartDetails />} />
      </Routes>
    </>
  )
}

export default App
