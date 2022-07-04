import logo from './logo.svg';
import './App.css';
import Row from './row';
import { requests } from './request';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Row title='Netfix Original' 
       fetchUrl={requests.fetchNetflixOriginals}
       />
        <Row title='Netfix Original' 
       fetchUrl={requests.fetchTopRated}
       />
        <Row title='Netfix Original' 
       fetchUrl={requests.fetchTrending}
       />



      
      </header>
    </div>
  );
}

export default App;
