import React from 'react';
import './tabla.css';
import ReactDOM from 'react-dom';

class Solucion extends React.Component{
    constructor(props){
        super(props);
        this.state={
            conteiner2: [],
            conteiner3: [],
            conteiner4: [],
            conteiner5: [],
            conteiner6: [],
            conteiner7: []
        }

        this.Resol = this.Resol.bind(this);
    }

   Resol (){
    
    const encabezado = this.props.conteiner2;
    //console.log(this.props.conteiner2);
    ReactDOM.render(encabezado,document.getElementById("tabla1"))
    const cuerpo = this.props.conteiner3;
    //console.log(this.props.conteiner3);
    ReactDOM.render(cuerpo,document.getElementById("tabla2"))

    const datos1 = this.props.conteiner4;
    //console.log(this.props.conteinerx1);
    ReactDOM.render(datos1,document.getElementById("fila0"))

    const datos2 = this.props.conteiner5;
    //console.log(this.props.conteinerx2);
    ReactDOM.render(datos2,document.getElementById("fila1"))
    const datosZ = this.props.conteiner7;
    //console.log(this.props.conteinerx2);
    ReactDOM.render(datosZ,document.getElementById("fila3"))
   }
    render(){
        return(<div><br/><button  onClick={this.Resol}   className="boton">Tabla</button><br/><br/>
        <table className="minimalistBlack">
            <thead id="tabla1">

            </thead>
            <tbody id="tabla2">
                
            </tbody>
        </table></div>)
        
    }
}
export default Solucion;