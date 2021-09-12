import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import Slider from './Components/Slider/Slider'
import Red from './Components/Red/Red'


const App = () =>{
    return (
       
       
        <Red />
        
    
    );
  };
  ReactDOM.render(<App/>, document.querySelector('.app'));
  
  export default App;
  