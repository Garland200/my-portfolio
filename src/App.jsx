import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projeccts';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
            {/* Rest of your content/route components */}
    </Router>
  );
}

export default App;
