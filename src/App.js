import React from 'react';
 import logo from './logo.svg'; 
import './App.css';
import Ingreso from './Components/Ingreso';

import './Components/Ingreso.css';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      show : false, 
      variableNum : 0,
      nrestriccion : 0     
     };

  }
  
  onClick =()=>{
    this.setState({show:!this.state.show})
  }

  addDatos = (nvariable, nrestriccion) =>{
   this.setState({variableNum : parseInt(nvariable,10)})
    //this.state.variableNum = parseInt(nvariable,10);
    this.setState({nrestriccion : parseInt(nrestriccion)});
    console.log(this.state.variableNum)
    
    
  }

  render(){
    
    let mostrarIngreso;
    if (this.state.show){
      mostrarIngreso = <Ingreso  show = {this.state.show} addDatos= {this.addDatos}></Ingreso>;
        
    } 
    
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Método de Enumeración Completa
        </h1>
        <button  onClick={this.onClick} className="boton">Continuar</button>
        {mostrarIngreso}
        
          
      </header>
    </div>
  }    
  
} 

export default App;
