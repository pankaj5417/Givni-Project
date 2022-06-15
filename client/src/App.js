import {Route,Routes} from 'react-router-dom'
import './App.css';
import { Login } from './pages/login/Login';
import { Home } from './pages/home/Home';
import { SignUp } from './pages/signup/Signup';
import { Topbar } from './components/topbar/Topbar';

function App() {
  return (
    <>
    
     {/* <Topbar/> */}
    <div className="container">
      <Routes>
      <Route path="/login" element={<Login/>}></Route> 
      <Route path="/signup" element={<SignUp/>}></Route> 


        <Route path="/" element={<Home/>}></Route> 


        {/* <Route path="/" element={<Sidebar/>}></Route> */}
       

      </Routes>
    </div>
    </>
  );
}

export default App;
