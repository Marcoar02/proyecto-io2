import React from 'react';
import Planteamiento from './Planteamiento'


class Ingreso extends React.Component{

    state = {
        show:false,
        value: ''
    }
    onChange = e =>{
        
        this.setState({
            [e.target.name] : e.target.value,
            
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
        let input1 = <input ref={input1=>{this.textInput1 = input1;}} type="text" name="input1" size="8"  checked={this.state.isGoing} onChange={this.onChange}></input>;
        let input2 = <input ref={input2=>{this.textInput2 = input2;}} type="text" name="input2" size="8"  checked={this.state.isGoing} onChange={this.onChange}></input>;
        let selector = <select name="selector" onChange={this.onChange}>
             <option value="&le;">&le;</option>
             <option value="&ge;">&ge;</option>
             <option value="=">=</option> 
        </select>
        let mostrarPlanteamiento;
        if (this.state.show){
          mostrarPlanteamiento = <Planteamiento input1={input1} input2={input2} selector={selector} show = {this.state.show} variableNum = {this.textInput1.value} variableRes = {this.textInput2.value} display = "flex"></Planteamiento>;
        //console.log(this.textInput1)
        } 
            return <div>
            {/* <form onSubmit={this.addDatos}> */}
            <span>N° de variables</span>
            <input ref={input1=>{this.textInput1 = input1;}} type="text" name="n_variable" placeholder="variables"   onChange={this.onChange}/><br/><br></br>
            <span>N° de restricciones  </span>
            <input ref={input2=>{this.textInput2 = input2;}} type="text" name="n_restriccion" placeholder="restricciones"  onChange={this.onChange}/>
            {/* <input type="submit" onClick={this.onClick} value="Enviar" className="boton" /> */} <button  onSubmit={this.addDatos} onClick={this.onClick} className="boton">Enviar</button>
            {mostrarPlanteamiento}
            
            </div>
        
    }
}

export default Ingreso;