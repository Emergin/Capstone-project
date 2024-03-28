
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
