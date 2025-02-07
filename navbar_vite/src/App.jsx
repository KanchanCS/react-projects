import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All from './Component/All'
import Home from './Component/Home'
import About from './Component/About'
import Header from './Component/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './Component/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="" element={<All/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About />}/>
        </Routes>
        <Footer/>
      </BrowserRouter> 
  </>
  )
}
export default App
