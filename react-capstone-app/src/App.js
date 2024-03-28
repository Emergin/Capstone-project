import './App.css';
import './components/index.js'
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import Qualification from './components/Qualification.js';

function App() {
  return (
    <div className="app-container">
      <Qualification/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
