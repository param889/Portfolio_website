import './App.css';
import Footer from './components/Footer';
import { Languages } from './components/Languages';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Languages/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
