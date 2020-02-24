import React, { Component , useEffect, useState} from 'react'; //importanto do react
import "./cadastrese.css";//importando o arquivo css



import Cliente from "./perfilcliente"

class Form extends Component {//inicio da classe formulario de cadastro
    //metodo construtor com as variaveis usadas
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            sexo: "",
            celular: "",
            estado: "",
            senha: "",
            userdate:"",
            longitude:"",
            latitude:"",
            cep:"",
            resposta:[],
            redirecionar:false //variavel redirecionar serve para verificar se já foi feito login
        }
      
          
    }
	
    
    

    //metodos para instanciar os objetos
    //as funções já estão com o bind(this)
    handleUserdateChange = (event) =>{
        this.setState({userdate:event.target.value})
    }
    handleCEP=(evento)=>{
        this.setState({cep:evento.target.value})
       
    }
    componentDidMount = () =>{
        let URL = `http://viacep.com.br/ws/${this.state.cep}/json/`
           fetch(URL)
           .then(function(response) {
              let data = response.json()
              return data;
           })
           .then((json) => {
              
              this.setState({resposta : json});
              console.log(this.state.resposta.logradouro)

           })
           .catch(function(ex) {
              console.log('parsing failed', ex)
           })
  }
    verificar = () =>{
        console.log(`http://viacep.com.br/ws/${this.state.cep}/json/`)
        
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleSexoChange = (event) => {
        this.setState({
            sexo: event.target.value
        })
    }
    handleCelularChange = (event) => {
        this.setState({
            celular: event.target.value
        })
    }
    handleSenhaChange = (event) => {
        this.setState({
            senha: event.target.value
        })
    }
    //fim
    //metodo para redirecionar
    red= () => {
    //quando chama esse metodo ele coloca o redirecionar como true
    //então quando chamar é pq foi feito o cadastro e segue para a página dentro da rota que o redirecionar encaminhar
    let vai = 0
    if(this.state.username != ""){
        vai += 1
    }if(this.state.email != ""){
        vai += 1
    }if(this.state.sexo != ""){
        vai += 1
    }if(this.state.celular != ""){
        vai += 1
    }if(this.state.userdate != ""){
        vai += 1
    }if(this.state.cpf != ""){
        vai += 1
    }if(this.state.cep != ""){
        vai += 1
    }if(this.state.resposta != ""){
        vai += 1
    }if(this.state.senha != ""){
        vai += 1
    }

    if(vai == 9){
        this.setState({redirecionar:true})
    }
    

        
    }
    render() {
       
            if(this.state.redirecionar){
                //Quando rederizar a primeira vez ele vai ver que não foi feito o cadastro false
                //então vai passar para o else
                //quando o cadastro for feito ele redireciona com a rota para a pagina do cliente
    
                return <Cliente 
                nome={this.state.username}
                email = {this.state.email}
                sexo = {this.state.sexo}
                celular = {this.state.celular}
                nascimento = {this.state.userdate}
                rua = {this.state.resposta.logradouro}
                vila = {this.state.resposta.bairro}
                cidade = {this.state.resposta.localidade}
                />
                //o direcionamento fica dentro do return
            }else{
            return (
                //todo o codigo é renderizado aqui dentro, no final o botão chama os valores
                <div>
                    <div className="tudo"> {/**div dentro da div pra não ocorrer erros de render */}
                    {/**Primeiro container apenas com o titulo */}
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="h1cad">Seu cadastro</h1>
                                    <h3 className="h3cad">Preencha seu cadastro, leva pouco tempo!</h3>
                                </div>
                            </div>
                        </div>
                        {/**Formulário para fazer o cadastro */}
                        <form className="formulario container">
                            {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-block"><br /></div>
                            {/**Linha com o método para salvar nome */}
                            <div className="form-row">
    
                                <label className="col-sm-12 col-md-5 mx-auto texto">Nome Completo</label>
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.handleUsernameChange}
                                    className="form-control col-sm-12 col-md-7 mx-auto"
                                    placeholder="Nome Completo"
                                    required
                                />
                            </div>
                            <div className="d-none d-md-block"><br /></div>
                                {/**Linha para cadastro de idade */}
                                <div className="form-row">
                                    <label className="col-sm-12 col-md-5 texto">Data de nascimento</label>
                                    <input required type="date" value={this.state.userdate} onChange={this.handleUserdateChange} className="form-control col-sm-12 col-md-7" />
                                </div>
                                <div className="d-none d-md-block"><br /></div>
                                    {/**Linha para cadastro de cpf */}
                                <div className="form-row">
                                    <label className="col-sm-12 col-md-5 texto">CPF</label>
                                    <input required type="number" 
                                    onInput = {(e) =>{
                                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,11)
                                    }}
                                    value={this.state.cpf} onChange={this.cpf} className="form-control col-sm-12 col-md-7" placeholder="CPF" />
                                </div>
    
                            {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-none d-md-block"><br /></div>
    
                            {/**linha para salvar email */}
                            <div className="form-row">
                                <label className="col-sm-12 col-md-5 mx-auto texto ">Email</label>
                                <input required type="email"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                    className="form-control col-sm-12 col-md-7 mx-auto"
                                    placeholder="E-mail" />
                            </div>
    
                            {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-none d-md-block"><br /></div>
    
                            {/**Linha para o sexo */}
                            <div className="form-row">
                                <label className="col-sm-12 col-md-5 mx-auto texto">Sexo</label>
                                <select required value={this.state.sexo} onChange={this.handleSexoChange} className="col-sm-12 col-md-7 mx-auto form-control">
                                    <option value=""></option>
                                    <option value="feminino">Feminino</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="outros">Outros</option>
                                </select>
                            </div>
    
                            {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-none d-md-block"><br /></div>
    
                            {/**Linha para celular */}
                            <div className="form-row">
                                <label className="col-sm-12 col-md-5 mx-auto  texto">Celular</label>
                                <input  required type="number"
                                    value={this.state.celular}
                                    onChange={this.handleCelularChange}
                                    onInput = {(e) =>{
                                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,11)
                                    }}
                                    placeholder=" (XX) XXXXX-XXXX"
                                    className="form-control col-sm-12 col-md-7 mx-auto" />
                            </div>
    
                            {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-none d-md-block"><br /></div>
    
                            {/**Linha para estado */}
                            
    
                            {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-none d-md-block"><br /></div>
    
                            {/**Linha para o cep
                             * Se usarmos uma api não vamos precisar de muito mais codigos
                             * apenas manipular o json para criar as coisas
                             */}
                            <div className="form-row">
                                <label className="col-sm-12 col-md-5 mx-auto texto">CEP</label>
    
                                <input required type="number"
                                    value={this.state.cep}
                                    onChange={this.handleCEP}
                                    onBlur={this.componentDidMount}
                                   
                                    className="form-control col-sm-12 col-md-7 mx-auto" 
                                    placeholder="CEP"/>
    
                            </div>
                            <div className="form-row">
                                <label className="col-sm-12 col-md-5 texto">Endereço</label>
    
                            <label>{this.state.resposta.logradouro} <br/> {this.state.resposta.bairro}<br/> {this.state.resposta.localidade}</label>
    
                            </div>
                            <div className="d-none d-md-block"><br /></div>
                            <div className="form-row">
                            <label className="col-sm-12 col-md-5 mx-auto texto">Número</label>
                            <input required type="number" className="form-control col-sm-12 col-md-7" placeholder="Número da residência"/>
                            </div>
                            {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-none d-md-block"><br /></div>
    
                            {/**Linha para salvar a senha */}
                            <div className="form-row">
                                <label className="col-sm-12 col-md-5 mx-auto texto">Senha</label>
                                <input required type="password"
                                    value={this.state.senha}
                                    onChange={this.handleSenhaChange}
                                    className="form-control col-sm-12 col-md-7 mx-auto" />
                            </div>
    
                            {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-none d-md-block"><br /></div>
    
    
                            {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-none d-md-block"><br /></div><div className="d-block"><br /></div>
    
                            {/**Linha do botão que chama a função
                             * Dentro do botão deve ter todos os metodos para criar um usuário
                             */}
                            <div className="row justify-content-center">
                                <button type="submit" className="btn btn-block botaocad col-sm-12 col-md-7" onClick={this.red.bind(this)}>Continuar</button>
                            </div>
    
                            {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-none d-md-block"><br /></div><div className="d-block"><br /></div>
                             {/**Acaba o form */}
                        </form>
    
    
                                {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /><br /><br /></div><div className="d-block"><br /><br /><br /></div>
                    </div>
    
                </div>
            )
        }
    
        }
}
export default Form //exporta a classe