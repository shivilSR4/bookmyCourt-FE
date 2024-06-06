import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginpage from './pages/login/Loginpage';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App ">
  <BrowserRouter>
  <Routes>
    <Route path='/' element =  {<Loginpage />}/>

    <Route path='/home' element =  {<Home />}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
