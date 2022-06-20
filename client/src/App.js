import {Route,Routes} from 'react-router-dom'
import './App.css';
import { Dashboard } from './pages/dashboard/Dashboard';
import { KnowledgeBase } from './pages/knowledgeBase/KnowledgeBase';
import { Login } from './pages/login/Login';
import { Login2 } from './pages/login2/Login2';
import { Register } from './pages/register/Register';

function App() {
  return (
    <>
    
     {/* <Topbar/> */}
    <div className="appContainer">
      <Routes>
      <Route path="/" element={<Login/>}></Route> 
      <Route path="/login2" element={<Login2/>}></Route> 
      <Route path="/register" element={<Register/>}></Route> 
      <Route path="/knowledgeBase" element={<KnowledgeBase/>}></Route> 

      <Route path="/dashboard" element={<Dashboard/>}></Route> 



       

      </Routes>
    </div>
    </>
  );
}

export default App;
