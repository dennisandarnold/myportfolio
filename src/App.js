import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Reference from './components/Reference'
import Languages from './components/Languages'
import Contact from './components/Contact'

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Languages />
      <Reference />
      <Contact />
    </main>
  );
}

export default App;
