import React from 'react';
import ReactDOM from 'react-dom';
import './Ingreso.css';
import Solucion from './Solucion';

class Planteamiento extends React.Component{

    constructor(props){
        super(props);
       
        this.state= {
            show:false,
            isGoing:true,
            conteiner1:[], 
            input1: '',
            value :'34'
            
          
        }
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.addDatos = this.addDatos.bind(this);
        this.pintarForm = this.pintarForm.bind(this);
        this.myFunction = this.myFunction.bind(this);

    }
    onChange (e){
        
        this.setState({
            [e.target.name] : e.target.value,
            value: e.target.value
        })
        
    }
    
    onClick(){
        
        this.setState({show:!this.state.show})
        
      }
      myFunction(event) {
        var x = event.data;
        console.log(x)
      }
    
   
    addDatos(){
        
        let nvariable = parseInt(this.props.variableNum,10);
        let nrestriccion = parseInt(this.props.variableRes,10);
       
        for (let index = 0; index < nvariable; index++) {
            var datoinput = document.getElementsByName("input1");
            datoinput[index].onChange = this.onChange
            console.log(datoinput[index].value)
            
        
        }
        
        for (let index = 0; index < ((nvariable+1)*nrestriccion); index++) {
            var datoinput2 = document.getElementsByName("input2");
            datoinput2[index].onChange = this.onChange
            console.log(datoinput2[index].value)
        
        }

        for (let index = 0; index < nrestriccion; index++) {
            var selector = document.getElementsByName("selector");
            selector[index].onChange = this.onChange
            console.log(selector[index].value)
        
        }
        

         
    }
    
    
    pintarForm(){
        let nvariable = parseInt(this.props.variableNum,10);
        let nrestriccion = parseInt(this.props.variableRes,10);
        let input1 = this.props.input1;
        let input2 = this.props.input2;
        let selector = this.props.selector;
        console.log(this.props.input1);
        //console.log(this.props.variableRes);
        this.state.conteiner1.push(<span>Función Z: </span>)
        for (let index = 1; index <= nvariable; index++) {
            if(index < nvariable){
                          
                
               this.state.conteiner1.push(input1);
               this.state.conteiner1.push(<span> X{index} + </span>)
                document.getElementsByName("var"+index)
            
            }
            else{
                
                
                this.state.conteiner1.push(input1)
                this.state.conteiner1.push(<span> X{index}<br/><br/></span>)
                
            }
        }
         
        
       
        
        //this.state.conteiner1 = []

        for(let i = 1; i<= nrestriccion;i++){
            for (let index = 0; index <= nvariable; index++) {
                if(index < nvariable-1){
                    this.state.conteiner1.push(input2);
                    this.state.conteiner1.push(<span> X{index+1} + </span>)
                }else if(index < nvariable){
                    this.state.conteiner1.push(input2);
                    this.state.conteiner1.push(<span> X{index+1} + </span>)
                }                    
                else{
                    this.state.conteiner1.push(selector);
                    this.state.conteiner1.push(input2);
                    this.state.conteiner1.push(<span><br/><br/></span>);
                }
            
            } 
        }
        this.state.conteiner1.push(<button  type="text" onSubmit={this.addDatos} onClick={this.addDatos}  className="boton">Continuar</button>);
        const listado1 = this.state.conteiner1.map((variable)=>variable)
        ReactDOM.render(listado1,document.getElementById("formulario"))
        /* const listado2 = this.state.conteiner1.map((variable)=><span>{variable}</span>)
        ReactDOM.render(listado2,document.getElementById("rests")) */
        //this.state.conteiner2 = [];
        
        

    }; 

    pintarTabla(){

    }
   
    render(){
        
        let mostrarSolucion;
        if (this.state.show){
          mostrarSolucion = <Solucion show = {this.state.show}  display = "flex"></Solucion>;
            
        } 
        
        return <div><br/><button  onClick={this.pintarForm}   className="boton">Continuar</button><br/><br/><div id="formulario"></div>
        {mostrarSolucion}
        </div>;
        
    };
    
};

export default Planteamiento;







