import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextMod from './components/TextMod';

function App() {
  return (
    <>
    <Navbar title="TextImp" about="About Us"/>
    <TextMod heading="Enter your text here !!!"/>
    <AboutUs name="TextImp"/>
    </>
  );
}

export default App;
