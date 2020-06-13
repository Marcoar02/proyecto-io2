import React from 'react';
import Planteamiento from './Planteamiento'


class Ingreso extends React.Component{

    state = {
        show:false,
        
    }
    onChange = e =>{
        
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onClick =()=>{
        this.setState({show:!this.state.show})
      }
       
    addDatos =()=>{
        console.log("adios")
        this.props.addDatos(this.textInput1.value,this.textInput2.value);
         
    }
    render(){
        let mostrarPlanteamiento;
        if (this.state.show){
          mostrarPlanteamiento = <Planteamiento show = {this.state.show} variableNum = {this.textInput1.value} ></Planteamiento>;
            
        }
            return <div>
            {/* <form onSubmit={this.addDatos}> */}
            <span>N° de variables</span>
            <input ref={input1=>{this.textInput1 = input1;}} type="text" name="n_variable" placeholder="variables"   onChange={this.onChange}></input><br/><br></br>
            <span>N° de restricciones  </span>
            <input ref={input2=>{this.textInput2 = input2;}} type="text" name="n_restriccion" placeholder="restricciones"  onChange={this.onChange}/>
            {/* <input type="submit" onClick={this.onClick} value="Enviar" className="boton" /> */} <button  onSubmit={this.addDatos} onClick={this.onClick} className="boton">Continuar</button>
          
            {mostrarPlanteamiento}
            </div>
        
    }
}

export default Ingreso;