import "./busca.css";                           //importando o css que está dentro do mesmo diretório
import React, { Component } from 'react'; 
import {Redirect} from 'react-router-dom' //importando os componentes do react

class Busca extends Component {                 //classe busca
    //método construtor
    constructor() {
        super()
        this.state = {
            profissional: "",
            servico: "",
            esp1:'',
            esp2:'',
            esp3:'',
            data: "",
            local: "",
            detalhe: "",
            redirecionar:false

        }
    }
    //metodos para instanciar os estados /variáveis
    alterarProfissional = e => {
        this.setState({ profissional: e.target.value })
        if(e.target.value == 1){
            this.setState({
                esp1 : "Front-end",esp2:"Back-end",esp3:"Fullstack"
            })
        }else if(e.target.value == 2){
            this.setState({
                esp1:"Photoshop",esp2:"Design web",esp3:"Paint"
            })
        }

    }
    
    alterarServico = e => {
        if(this.state.profissional == 1){
            this.setState({profissional:'Informatica'})
            if(e.target.value == 1 ){
                this.setState({servico : 'Front-end',})
            }else if(e.target.value == 2){
                this.setState({servico : 'Back-end'})
            }else{
                this.setState({servico : 'Fullstack'})
            }
        }else if(this.state.profissional == 2){
            this.setState({profissional:'Desing'})
            if(e.target.value == 1 ){
                this.setState({servico : 'Photoshop'})
            }else if(e.target.value == 2){
                this.setState({servico : 'Desing web'})
            }else{
                this.setState({servico : 'Paint'})
            }
        }
    }
    alterarData = e => {
      
     
        this.setState({data:e.target.value})
     
        
    }
  
    alterarDetalhe = e => {
        this.setState({ detalhe: e.target.value })
    }
    //fim dos metodos

    //colocando no console as informações passadas
    submeterForm = e => {   
      
            if(this.state.profissional != '' && !Number(this.state.profissional) && this.state.servico != '' && this.state.data !=''){
          
                this.setState({redirecionar:true})
               
                e.preventDefault()
                
                
       
            }else{
                alert('Preencha todos os campos')
            }
           
         
        

    }

    render() {
        if(this.state.redirecionar){
           return  <Redirect to='perfilcliente'/>
        }else{

        
        return (
            //div principal
            <div>
                { /* Container azul para fazer o fundo da tela*/}
                <div className="container-fluid conter">                                                         
                     
                    {/* Div com o titulo linkando no css a classe*/}
                    <div className="row">
                        <div className=" mx-auto">                                                            
                            <h2 className="h1titulo">Descreva o que você precisa e entre em contato com prestadores de serviços proximos a você</h2>
                        </div>
                    </div>                  

                    {/**Formulário  inteiro */}
                    <div className="container pesquisa">
                        <form onSubmit={this.submeterForm} className="form-group">{/*metodo para aplicar as mudanças no método subeterForm*/}                      
                            <div className="form-row">
                                {/**Parte de pesquisa de profissional por categoria */}
                                <label className="col-10 mx-auto texto my-2">Qual categoria?</label>
                                {/*Formulário de input com as opções para ser escolhida */}      
                                <select className="col-10 mx-auto form-control" onChange={this.alterarProfissional}>{/** Quando selecionado chama o método alterarProfissional, precisa existir os valores com value=** */}
                                    <option value=""></option>
                                    <option value={1}>Informática</option>
                                    <option value={2}>Desing</option>
                                </select>

                            </div>
                         
                            <div className="form-row">

                                <label className="col-10 mx-auto my-2 texto">Qual serviço?</label>                               
                                <select className="col-10 mx-auto form-control my-2" onChange={this.alterarServico}>
                                    <option value={0}></option>
                                    <option value={1}>{this.state.esp1}</option>
                                    <option value={2}>{this.state.esp2}</option>
                                    <option value={3}>{this.state.esp3}</option>
                                    
                                </select>
                                  </div>
                            
                        
                            
                            <div className="form-row">
                                {/**Formulário para colocar uma data  */}
                                <label className="col-10 mx-auto texto  my-2 ">Para quando deseja o serviço?</label>
                                <input className="col-10 mx-auto form-control my-2" type="date" onChange={this.alterarData} />

                            </div>

                        
                            <div className="form-row">
                                {/**Formulário para entrada de texo, precisa ser validado dentro do banco de dados */}
                                <label className="col-10 mx-auto texto  my-2 ">Detalhe o que você precisa que seja feito</label>
                                <textarea className="form-control col-10 mx-auto my-2 " rows="7" onChange={this.alterarDetalhe}></textarea>

                            </div>
                    
                            {/**Inputo de botão, tem que ser arrumado para um botão normal ou deixar assim */}
                            <input className="btn botaobusca btn-block col-8 mx-auto  my-4" type="submit" value="Continuar" />
                            <div className="d-block"><br /></div>        

                        </form>
                    </div>
                    {/**Fim do formulário */}
                    <div className="d-none d-md-block"><br /></div>
                    <div className="d-block d-md-block"><br /></div>
                    <div className="d-block d-md-block"><br /></div>
                    {/*Div para aplicar uma quebra de linha de acordo o tamanho da tela */}
                </div>


            </div>

        )
    }
}
}

export default Busca //Exportando toda a classe
