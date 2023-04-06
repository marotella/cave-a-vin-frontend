import './App.css';
import Navimage from "./components/Navimage"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const URL = "http://localhost:4000/"
  return (
    <div> 
    <div className='Nav'>
      <Navimage />
    </div>
      <Header className='navheader' />
      <Footer />
    </div>
   
    ) 
}

export default App;
