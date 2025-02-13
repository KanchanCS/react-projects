import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import SignIn from "./Components/SignIn";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Ourfood from "./Components/Ourfood";
import Home from "./Components/Home";
import AboutUs from "./Components/About";
import { useState } from "react";

function App() {
  const [CartCount, setCartCount] = useState(0);
  const handleAdd = () => {
    setCartCount(CartCount+1)
  }
  return (
    <>
    
      <BrowserRouter>
        <Header count={ CartCount} />
        <Routes>
          <Route path="/" element={<Home handleAdd={ handleAdd}/>} />
          <Route path="/aboutus" element={ <AboutUs/>} />
          <Route path="/ourfood" element={<Ourfood />} />
          <Route path="/signin" element={<SignIn />} />
       
       
        </Routes>
        <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
