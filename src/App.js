import './App.css';
import Navimage from "./components/Navimage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Logo from "./components/Logo"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom";


function App() {
  const URL = "http://localhost:4000/"
  return (
    <div> 
    <div className='Nav'>
      <Navimage />
    </div>
      <Header className='navheader' />
      <Logo />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About URL={URL}/>}/>
      </Routes>
      <Footer />
    </div>
    ) 
}
export default App;
