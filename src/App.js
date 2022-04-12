import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Intro from './components/intro/intro';
import About from './components/about/about'
 
function App() {
  return (
    <div className="App">
      <div>
       <Intro/>
       <About/>
      </div>
    </div>
  );
}

export default App;
