import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import {Slide} from './components/slide/Slide';
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slide className="slide-container"/>
    </div>
  );
}

export default App;
