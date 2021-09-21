import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const [Mode, setMode] = useState('light');


  
 const toggleMode= ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled","success");
    }
  else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled","success");
    }
  }
  return (
    <>
     <Router>
<Navbar title="Textutils" mode={Mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
 
 <Switch>
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          
          <Route exact path="/"> 
          <TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={Mode}/>    
          </Route>
        </Switch>
{/* 
<About/> */}
</div>
</Router>
    </>

  );
}

export default App;
