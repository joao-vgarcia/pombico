import "./listar.css";
import React, { Component, Fragment } from 'react';

import { Link, Redirect } from 'react-router-dom';


 function Cartao(){

     return(
         <div className='row linhaCard justify-content-center '>
         <div className="card col-10 lista">
             <div className="card-body">
                 <h4 className="card-title">Categoria: {}</h4>
                 <p className="card-text">Especialização: </p>
                 <p className='card-text'>Descrição: </p>
             </div>
         </div>
     </div> 
     )
 }

export default class Listar extends Component{

    constructor() {
        super()
        this.state = {
          cards:[]
        
        }
    }
    componentDidMount=()=>{
        var cartao =this.state.cards;
        for(let x=0; x<=5; x++){
            
        cartao.push({A:<Cartao/>})
        this.setState({
            cards:cartao
        })
        }
    }
   
    render(){
        const cartoes = this.state.cards.map(r=><Cartao/>)
        
        return(
            <div className='container'>
                <div className='row justify-content-center '>
                    <h1 className='listagem'>Aqui estão os serviços na sua categoria</h1>
                </div>
                <div id='teste'>

                    
                    {cartoes}    
                    
                </div>
                
            </div>
       
        )
    }


    
}
