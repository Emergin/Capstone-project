import './App.css';
import './components/index.js'
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import Qualification from './components/Qualification.js';
import Skills from './components/Skills.js';
import About from './components/About.js';
// import Header from './components/Header.js';
import Home from './components/Home.js';
import NavigationBar from './components/NavigationBar.js';

function App() {
  return (
    <div className="app-container">
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
