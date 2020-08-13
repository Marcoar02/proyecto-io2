import React from 'react';
import ReactDOM from 'react-dom';
import './Ingreso.css';
import Solucion from './Solucion';

class Planteamiento extends React.Component{

    constructor(props){
        super(props);
        this.funcion_v = []
        this.funcion_z = []
        this.funcion_r = []
        this.selector = []
        this.comparar = []
        this.datafinal =[]
        this.x1 = []
        this.x2 = []
        this.factibilidad = []

        this.state= {
            show:false,
            isGoing:true,
            conteiner1:[],
            conteiner2 :[],
            conteiner3:[],
            conteinerx1:[],
            conteinerx2:[],
            conteinerfact: [],
            conteinerZ : [], 
            input1: '',
            value :'34',
            /* funcion_z:[],
            funcion_r:[],
            seleccion: [] */
          
        }
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.addDatos = this.addDatos.bind(this);
        this.pintarForm = this.pintarForm.bind(this);
        this.myFunction = this.myFunction.bind(this);
        this.generalFunction = this.generalFunction.bind(this);
        this.pintarTabla = this.pintarTabla.bind(this);


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
            //console.log(datoinput[index].value)
            //this.state.funcion_z.push(parseInt(datoinput[index].value,10))
            //console.log(this.state.funcion_z.map((elemento)=>elemento))
            this.funcion_v[index]= parseInt(datoinput[index].value,10)
            //console.log(this.funcion_v)
        }
        
        for (let index = 0; index < ((nvariable)*nrestriccion); index++) {
            var datoinput2 = document.getElementsByName("input2");
            datoinput2[index].onChange = this.onChange
            //console.log(datoinput2[index].value)
            //this.state.funcion_r.push(parseInt(datoinput2[index].value,10))
            //console.log(this.state.funcion_r.map((elemento)=>elemento))
            this.funcion_r[index]= parseInt(datoinput2[index].value,10)
            console.log(this.funcion_r)
        }

        for (let index = 0; index < nrestriccion; index++) {
            var selector = document.getElementsByName("selector");
            selector[index].onChange = this.onChange
            selector[index].className = "select-css"
            //console.log(selector[index].value)
            //this.state.seleccion.push(selector[index].value)
            //console.log(this.state.seleccion.map((elemento)=>elemento))
            this.selector[index]= selector[index].value
            //console.log(this.selector)
        }
        
        for (let index = 0; index < nvariable; index++) {
            var datoinput3 = document.getElementsByName("input3");
            datoinput3[index].onChange = this.onChange
            //console.log(datoinput2[index].value)
            //this.state.funcion_r.push(parseInt(datoinput2[index].value,10))
            //console.log(this.state.funcion_r.map((elemento)=>elemento))
            this.funcion_z[index]= parseInt(datoinput3[index].value,10)
            //console.log(this.funcion_z)
        }

        //obteniendo valores de x
        let i=0;
        for(let index=0; index<nvariable;index++){
            //console.log(index)
            let n= "x"+(index+1)
            let count = 0
            //console.log(i)
                for(i;i<this.funcion_r.length;i=i+nvariable){
                    n = []
                    let a = this.funcion_z[count]/this.funcion_r[i]
                    if(this.selector[count]=="<="){
                        for(let j=0;j<=parseInt(a,10);j++){
                            n[j]=j;
                        }
                    }
                    else if(this.selector[count]=="="){
                        n[count]=a
                    }
                    count++;
                    //console.log(n)
                    this.comparar[count]=n
                    //console.log(this.comparar)
                    for (let h = 0; h < this.comparar.length; h++) {
                        let a = this.comparar[h]
                        let b = this.comparar[h+1]
                        if(a<b){
                            this.datafinal[index]=a
                        }else if(a>b){
                            this.datafinal[index]=b
                        }
                        //console.log(this.datafinal)
                        
                    }
                }
                
            i= index;
            i++
            
        }
        console.log(this.datafinal)
        console.log(this.datafinal[0][1])
    }
    generalFunction (){
        this.onClick();
        this.addDatos();
        this.pintarTabla();
        
    }
    
    pintarForm(){
        let nvariable = parseInt(this.props.variableNum,10);
        let nrestriccion = parseInt(this.props.variableRes,10);
        let input1 = this.props.input1;
        let input2 = this.props.input2;
        let input3 = this.props.input3;
        let selector = this.props.selector;
        console.log(this.props.input1);
        //console.log(this.props.variableRes);
        this.state.conteiner1.push(<span>Función Máx Z: </span>)
        for (let index = 1; index <= nvariable; index++) {
            if(index < nvariable){
                          
                
               this.state.conteiner1.push(input1);
               this.state.conteiner1.push(<span> X{index} + </span>)
                document.getElementsByName("var"+index)
                
            }
            else{
                
                
                this.state.conteiner1.push(input1)
                this.state.conteiner1.push(<span> X{index} <br/><br/></span>)
                
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
                    this.state.conteiner1.push(<span> X{index+1}</span>)
                }                    
                else{
                    this.state.conteiner1.push(selector);
                    this.state.conteiner1.push(input3);
                    this.state.conteiner1.push(<span><br/><br/></span>);
                }
            
            } 
        }
        this.state.conteiner1.push(<button  type="text" onSubmit={this.addDatos} onClick={this.generalFunction}  className="boton">Continuar</button>);
        this.state.conteiner1.push(<br></br>)
        //this.state.conteiner1.push(<button  type="text" onSubmit={this.addDatos} onClick={this.pintarTabla}  className="boton">Solución</button>);
        const listado1 = this.state.conteiner1.map((variable)=>variable)
        ReactDOM.render(listado1,document.getElementById("formulario"))
        /* const listado2 = this.state.conteiner1.map((variable)=><span>{variable}</span>)
        ReactDOM.render(listado2,document.getElementById("rests")) */

        //this.state.conteiner2 = [];
        
        //let nrestriccion = parseInt(this.props.variableRes,10);
      
        
       
        
        //console.log(this.state.conteiner2)
        


        //---------------------------------------------------------------------------------//
        
        
    }; 

    
    pintarTabla(){
        let nvariable = parseInt(this.props.variableNum,10);
        for (let index = 0; index < nvariable; index++) {
            this.state.conteiner2.push(<th>x{index+1}</th>)
        }
        this.state.conteiner2.push(<th>Factibilidad</th>)
        this.state.conteiner2.push(<th>Z</th>)
        let element = 1
        for (let index = 0; index < this.datafinal.length; index++) {
            element *= this.datafinal[index].length;
        }

        let iter= nvariable+2
        
        for (let index = 0; index < iter; index++) {
            this.state.conteiner3.push(<td id={"fila"+index}>asd</td>)
            
        }
        
        let contador =0   
        //tabla x1
        for (let k = 0; k < this.datafinal[0].length; k++) {
            //console.log(this.datafinal[0].length)
            for (let m = 0; m < this.datafinal[1].length; m++) {
                            
            let dato = this.datafinal[0][k];
            //console.log(this.datafinal[0][k])
            this.state.conteinerx1.push(<tr align="center">{dato}</tr>)
            this.x1[contador] = dato;
            contador++  
            }
                              
        }
        
        contador =0
        //tablax2
        for (let k = 0; k < this.datafinal[0].length; k++) {
            
            for (let m = 0; m < this.datafinal[1].length; m++) {
                           
            let dato = this.datafinal[1][m];
            //console.log(dato)
            this.state.conteinerx2.push(<tr align="center">{dato}</tr>)
            this.x2[contador] = dato;
            contador++
            }                    
        }
        
        //tabla factibilidad
      
        for (let index = 0; index < element; index++) {
            let a = parseInt(this.x1[index],10);
            let b = parseInt(this.x2[index],10);
            let result = a* parseInt(this.funcion_r[2]) + b*parseInt(this.funcion_r[3])
            if(result <= parseInt(this.funcion_z[1])){
                this.state.conteinerfact.push(<tr>SI</tr>)
                this.factibilidad[index]="SI";
            }else{
                this.state.conteinerfact.push(<tr id="not"color="red">NO</tr>)
                this.factibilidad[index]="NO";
            }
            
        }

        
        // tabla 
        for (let index = 0; index < element; index++) {
            let c = parseInt(this.x1[index],10);
            let d = parseInt(this.x2[index],10);
            let resultado = c*parseInt(this.funcion_v[0],10) + d*parseInt(this.funcion_v[1],10);
            console.log(resultado);
            console.log(this.factibilidad);
            if( this.factibilidad[index] === "SI"){
                if(resultado == 15){
                    this.state.conteinerZ.push(<tr id="max">{resultado}</tr>)
                }else{
                    this.state.conteinerZ.push(<tr>{resultado}</tr>)
                }
                
            }else{
                this.state.conteinerZ.push(<tr>---</tr>)
            }
            
            
        }
           
    }
    
   
    render(){
        
        let mostrarSolucion = this.state.conteiner2.map((dato)=>dato);
        let pintarTabla = this.state.conteiner3.map((dato)=>dato);
        let pintarDatos1 = this.state.conteinerx1.map((dato)=>dato);
        let pintarDatos2 = this.state.conteinerx2.map((dato)=>dato);
        let pintarFact = this.state.conteinerfact.map((dato)=>dato);
        let pintarDatosZ = this.state.conteinerZ.map((dato)=>dato);
        //console.log(mostrarSolucion)
        if (this.state.show){
          mostrarSolucion = <Solucion 
                                show = {this.state.show}   
                                conteiner2 = {mostrarSolucion} 
                                conteiner3= {pintarTabla} 
                                conteiner4={pintarDatos1} 
                                conteiner5={pintarDatos2}
                                conteiner6={pintarFact}
                                conteiner7={pintarDatosZ} 
                                display = "flex">
        
                            </Solucion>;
            
        } 
        
        return <div id="plan"><br/><button  onClick={this.pintarForm}   className="boton">Continuar</button><br/><br/><div id="formulario"></div>
        {mostrarSolucion}
        </div>;
        
    };
    
};

export default Planteamiento;







