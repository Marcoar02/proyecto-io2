import React from 'react';
import ReactDOM from 'react-dom';
import './Ingreso.css';
import Solucion from './Solucion';

class Planteamiento extends React.Component{

    
    
    state = {
        show:false,
        conteiner1:[], 
        conteiner2:[],
        function : [],
        valor : React.createRef()
    }

    onClick =()=>{
        
        this.setState({show:!this.state.show})
        
      }

    focusTextInput=()=>{
            this.state.valor.current.focus()
            console.log(this.state.valor.current.focus())
        }

    handleSubmit=(event)=> {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
    }

    handleChange = e =>{
        //console.log(e.target.value)
       
        this.setState({
            
            [e.target.name]: e.target.value
        })
        console.log([e.target.name])
    }


    addDatos =()=>{
        //console.log(this.state.conteiner1.map((elemento)=> elemento = elemento.props));
        
        
        //console.log(todosInput)
        const list = this.state.conteiner1.map((elemento)=> elemento = elemento.props);
        //console.log(list);
        for (let index = 1; index < list.length; index++) {
            var datoinput = document.getElementById("var"+index)
            console.log("hola")
            //console.log(lista1);
            /* var dato = Object.values(lista1);
            var element = dato[0];
           for (let index = 0; index < element.length; index++) {
               
               if(index === 0){
                   const dato1 = element[index];
                   console.log(dato1);
                   var dato2 = Object.values(dato1);
                   console.log(dato2)
               }
           } */
        
        }
         
    }
    /* recorrerLista = ()=>{
        console.log(this.state.conteiner1.map((elemento)=> elemento = elemento.props));
        const list = this.state.conteiner1.map((elemento)=> elemento = elemento.props);
        //console.log(list);
        for (let index = 1; index < list.length; index++) {
            const lista1 = list[index];
            //console.log(lista1);
            var dato = Object.values(lista1);
            var element = dato[0];
           for (let index = 0; index < element.length; index++) {
               
               if(index === 0){
                   const dato1 = element[index];
                   console.log(dato1);
                   var dato2 = Object.values(dato1);
                   console.log(dato2)
               }
           }
        
        }
    } */
    
    usarDatos=()=>{
        let nvariable = parseInt(this.props.variableNum,10);
        let nrestriccion = parseInt(this.props.variableRes,10);
        
        //console.log(this.props.variableRes);
        this.state.conteiner1.push(<span>Función Z: </span>)
        for (let index = 1; index <= nvariable; index++) {
            if(index < nvariable){
            //console.log(index)
               /*let element = <span><input key={index}></input> + </span>;
                this.state.conteiner[index]= element;  */
                
                
               this.state.conteiner1.push(<input ref= {this.state.valor} type="text" id={"var"+index} size="8"  name = {"var"+index}  onChange={this.handleChange}></input>  );
               this.state.conteiner1.push(<span> X{index} + </span>)
             
             /*   this.state.conteiner.map((index)=><span><input key={index}></input> + </span>) */
            }
            else{
                
                /*let element = <input key={index}></input>;
                  this.state.conteiner[index]= element;  */
                this.state.conteiner1.push(<input ref={c=>{this.textc = c;}} type="text" id={"var"+index} size="8"></input> )
                this.state.conteiner1.push(<span> X{index}<br/><br/></span>)
                /* this.state.conteiner.map((index)=><input key={index}></input>) */
            }
        
        } 
        
       
        
        //this.state.conteiner1 = []

        for(let i = 1; i<= nrestriccion;i++){
            for (let index = 0; index <= nvariable; index++) {
                if(index < nvariable-1){
                    this.state.conteiner1.push(<input type="text" id={"res"+index} size="8" ></input>);
                    this.state.conteiner1.push(<span> X{index+1} + </span>)
                }else if(index < nvariable){
                    this.state.conteiner1.push(<input type="text" id={"res"+index} size="8" ></input>);
                    this.state.conteiner1.push(<span> X{index+1} + </span>)
                }                    
                else{
                    this.state.conteiner1.push(
                    <select name="tipo_rest">
                                <option>&le;</option>
                                <option>&ge;</option>
                                <option>=</option> 
                    </select>);
                    this.state.conteiner1.push(<input type="text" id={"res"+index} size="8"></input>);
                    this.state.conteiner1.push(<span><br/><br/></span>);
                }
            
            } 
        }
        this.state.conteiner1.push(<input  type="submit" onSubmit={this.addDatos} onClick={this.focusTextInput}  className="boton"></input>);
        const listado1 = this.state.conteiner1.map((variable)=>variable)
        ReactDOM.render(listado1,document.getElementById("formulario"))
        /* const listado2 = this.state.conteiner1.map((variable)=><span>{variable}</span>)
        ReactDOM.render(listado2,document.getElementById("rests")) */
        //this.state.conteiner2 = [];
        
        

    }; 

    
   
    render(){
        let mostrarSolucion;
        if (this.state.show){
          mostrarSolucion = <Solucion show = {this.state.show} usarDatos={this.recorrerLista} display = "flex"></Solucion>;
            
        } 
        return <div><br/><button  onClick={this.usarDatos} className="boton">Continuar</button><br/><br/><form  onSubmit={this.handleSubmit} id="formulario"/>
        {mostrarSolucion}
        </div>;
        
    };
    
};

export default Planteamiento;







