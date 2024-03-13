import { useState } from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextMod from './components/TextMod';

function App() {

  const [alert,setAlert] = useState(null);

  const handleAlert = (message, types)=>{
    setAlert({
      msg: message,
      type: types
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2500)
  }

  const [Mode,setMode] = useState('light');

  const handleMode = ()=>{
    if(Mode === 'dark'){
      setMode('light')
      handleAlert("Light Mode has been enabled","success");
      document.title = "TextImp - Light Mode";
    }
    else{
      setMode('dark')
      handleAlert("Dark Mode has been enabled","success");
      document.title = "TextImp - Dark Mode";
    }
  }

  return (
    <div className={`bg-${Mode} `}>
    <Navbar title="TextImp" about="About Us" Mode={Mode} toggle={handleMode}/>
    <Alert alert={alert}/>
    <TextMod heading="Enter your text here !!!" Mode={Mode} alert={handleAlert}/>
    <AboutUs name="TextImp" Mode={Mode}/>
    </div>
  );
}

export default App;
