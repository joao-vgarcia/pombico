import React, { Component } from 'react';
import "./perfilcliente.css";

import homem from '../imagens/perfil.PNG'
import {Redirect} from'react-router-dom'

import { IoIosStar } from 'react-icons/io';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import Busca from '../paginas/busca'



class Perfilcliente extends Component {
    constructor() {
        super()
        this.state = {
          redirecionar:false
        
        }
    }
  cadastrar =()=>{
      this.setState({redirecionar:true})
  }
    render() {
        if(this.state.redirecionar){
            return <Redirect to='busca'/>
        }else{
        return (
            <div>
                <div className="">
                    <div className="container">
                        <div className="d-block"><br /><br /></div>
                        <h1 className="presth1">Seu perfil</h1>

                    </div>
                    <div className="d-block"><br /><br /></div>

                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-sm-12 col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={homem} alt="Seu perfil" />
                                    <div className="card-body">
                                        <h4 className="clienteh4 card-tittle">{this.props.nome}</h4>
                                        <h4 className="clienteh4 card-text"><IoIosStar /> 4.5</h4>
                                        <hr />
                                        <h4 className="clienteh4 card-text">Confirmado</h4>
                                        <h4 className="clienteh4 card-text"><IoIosCheckmarkCircle /> {this.props.email}</h4>
                                        <h4 className="clienteh4 card-text"><IoIosCheckmarkCircle /> {this.props.celular}</h4>
                                    </div>
                                </div>
                            </div>


                            <div className="col-sm-12 col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="clienteh3 card-title">Detalhes</h3>
                                        <h4 className="clienteh4 card-text">Nome:</h4>
                                        <p>{this.props.nome}</p>
                                       
                                        <h4 className="clienteh4 card-text">Nascimento:</h4>
                                        <p>{this.props.nascimento}</p>
                                        <h4 className="clienteh4 card-text">Sexo:</h4>
                                        <p>{this.props.sexo}</p>
                                        <h4 className="clienteh4 card-text">Ativo desde:</h4>
                                        <p>01/01/2020</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                    <h3 className="clienteh3 card-title">Contato</h3>
                                        <h4 className="clienteh4 card-text">Celular:</h4>
                                        <p>{this.props.celular}</p>
                                        <h4 className="clienteh4 card-text">Local:</h4>
                                        <p>{this.props.rua}</p>
                                        <p>{this.props.vila}</p>
                                        <p>{this.props.cidade}</p>
                                        <h4 className="clienteh4 card-text">Email:</h4>
                                        <p>{this.props.email}</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>



                    <div className="d-block"><br /></div>

                    <div className="container">
                        <div className="row justify-content-center">
                       
                            <button type="button" className="btn btn-block col-sm-12 col-md-3 btnCancelar " data-toggle="modal" data-target="#myModal">Cadastrar novos serviços</button>

                            
                            <div class="modal fade" id="myModal">
                                <div class="modal-dialog">
                                    <div class="modal-content">

                                        
                                        <div class="modal-header">
                                            <h4 class="modal-title">Nova solicitação</h4>
                                        </div>

                                        
                                        <div class="modal-body">
                                        <Busca/>
                                        </div>

                                        
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="d-block"><br /><br /></div>
                </div>
            </div>
        )
    }
}
}
export default Perfilcliente