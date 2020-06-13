import React from 'react';


class Planteamiento extends React.Component{

    state= {
        show : false,
       variableNum : 0
    }
   
    usarDatos = ()=>{
         
        console.log(this.props.variableNum)
    }
 
    
    render(){
     
        return <div><button  onClick={this.usarDatos} className="boton">Continuar</button></div>
    }
}

export default Planteamiento;