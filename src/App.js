import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginpage from './pages/login/Loginpage';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddnewCourt from './pages/NewCourt/AddnewCourt';
import CourtDetails from './components/courtDetails/CourtDetails';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Help from './pages/help/Help'


function App() {
  return (
    <div className="App ">
  <BrowserRouter>
  <Routes>
    <Route path='/' element =  {<Loginpage />}/>

    <Route path='/home' element =  {<Home />}/>

    <Route path ='/addNewCourt' element = {<AddnewCourt />}/>
    <Route path='/courtDetails/:id' element = {<CourtDetails/>}/>
    <Route path='/help' element = {<Help />}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
