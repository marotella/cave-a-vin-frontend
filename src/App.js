import './App.css';
import Navimage from "./components/Navimage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Logo from "./components/Logo"
import Home from "./pages/Home"

function App() {
  const URL = "http://localhost:4000/"
  return (
    <div> 
    <div className='Nav'>
      <Navimage />
    </div>
      <Header className='navheader' />
      <Logo />
      <Home />
      <Footer />
    </div>
   
    ) 
}

export default App;
