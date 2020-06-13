import React from 'react';
import { componentWillAppendToBody } from "react-append-to-body";





class Planteamiento extends React.Component{

    state= {
        show : false,
        
    }
    usarDatos=()=>{
        const root = document.getElementById("datos");
        let nvariable = parseInt(this.props.variableNum,10);
        const text = document.createElement("span");
        text.innerText = "¿Cuál es el Objetivo de la función?";
        root.appendChild(text)
       
        for (let index = 1; index <= nvariable; index++) {
            if(index < nvariable){
                console.log(index)
               const element = document.createElement("input");
               const text = document.createElement("span");
                text.innerText = "   +   ";
                root.appendChild(element) ;
                root.appendChild(text)
            }else{
                const element = document.createElement("input");
                root.appendChild(element);
            }
            
        }
        
    }
    render(){
        
        return <div><br/><button  onClick={this.usarDatos} className="boton">Continuar</button><br/><div id="datos"></div></div>
    }
}

export default Planteamiento;