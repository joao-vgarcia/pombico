import React, { Component } from 'react'; //importanto do react
import "./cadastroprest.css";//importando o arquivo css

import Cliente from "./perfilcliente"

class Form extends Component {//inicio da classe formulario de cadastro
    //metodo construtor com as variaveis usadas
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            sexo: "",
            celular: "",
            estado: "",
            senha: "",
            userdate: "",
            cpf: "",
            cep: "",
            resposta:[],
            categoria:0,
            esp1:"",
            esp2:"",
            esp3:"",
            categoriaFinal :"",
            especializacao :"",
            redirecionar: false,
        
        }
    }
    red = (e) =>{
        if(this.state.cep != "" && this.state.username != "" && this.state.userdate != "" && this.state.email != "" && this.state.celular != "" && this.state.sexo != "" && this.state.senha != "" && this.state.categoriaFinal != "" && this.state.especializacao != ""){
            this.setState({redirecionar:true})
        }else{
            alert('Preencha todos os campos')
        }
        e.preventDefault()
    }
    alterarUsername = e => {
        this.setState({ email: e.target.value })
        // console.log(this.state.username)
    }
    alterarPassword = e => {
        this.setState({ password: e.target.value })
    }
    submeterFormLogin = e => {
        
        this.setState({ redirecionar: true })
        e.preventDefault()
    }
    submeterFormPrestador = e =>{
        this.setState({redirecionarPrest : true})
    }
    submeterFormCliente = e =>{
        this.setState({redirecionarCli : true})
    }
    aletrarEspecializacao = (e) =>{
        if(e.target.value == 1){
            this.setState({
                esp1 : "Front-end",esp2:"Back-end",esp3:"Fullstack", categoriaFinal : "informatica"
            })
        }else if(e.target.value == 2){
            this.setState({
                esp1 : "Photoshop",esp2:"Design web",esp3:"Paint", categoriaFinal:"design"
            })
        }


    }
    handleCEP=(evento)=>{
        this.setState({cep:evento.target.value})
       
    }
    verificar = () =>{
       
         let URL = `https://viacep.com.br/ws/${this.state.cep}/json/unicode/`
        
            fetch(URL,{mode:'cors'})
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

    fixarEsp = e =>{
        this.setState({especializacao : e.target.value})
    }
    cpf = (event) => {
        this.setState({
            cpf: event.target.value
        })
    }
    cep = (event) => {
        this.setState({
            cep: event.target.value
        })
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleUserdateChange = (event) => {
        this.setState({
            userdate: event.target.value
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
                <div className="tudo "> {/**div dentro da div pra não ocorrer erros de render */}
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
                    <div className="mx-auto">
                                    <form className=" formulario container-fluid">
                                    <div className="d-none d-md-block"><br /></div>
                                   
                                   
                                    {/**Linha com o método para salvar nome */}
                                    <div className="form-row">
                                         <div className="d-none d-md-block"><br /></div>
                                        <label className="col-sm-12 col-md-5 texto">Nome Completo</label>
                                        <input  type="text"  onChange={this.handleUsernameChange} className="form-control col-sm-12 col-md-7" placeholder="Nome Completo" required/>
                                    </div>
                                    <div className="d-none d-md-block"><br /></div>
                                    {/**Linha para cadastro de idade */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-5 texto">Data de nascimento</label>
                                        <input type="date" value={this.state.userdate} onChange={this.handleUserdateChange} className="form-control col-sm-12 col-md-7" required/>
                                    </div>

                                    <div className="d-none d-md-block"><br /></div>
                                    {/**Linha para cadastro de cpf */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-5 texto">CPF</label>
                                        <input type="number" onInput = {(e) =>{
                                            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,11)
                                        }}
                                        value={this.state.cpf} 
                                        onChange={this.cpf} 
                                        className="form-control col-sm-12 col-md-7" 
                                        placeholder="CPF" 
                                        required
                                        />
                                        </div>


                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div>

                                    {/**linha para salvar email */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-5 texto">Email</label>
                                        <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control col-sm-12 col-md-7" placeholder="E-mail" required/>
                                    </div>

                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div>

                                    {/**Linha para o sexo */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-5 texto">Sexo</label>
                                        <select required value={this.state.sexo} onChange={this.handleSexoChange} className="col-sm-12 col-md-7 form-control">
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
                                        <label className="col-sm-12 col-md-5 texto">Celular</label>
                                        <input type="number"
                                            value={this.state.celular}
                                            onChange={this.handleCelularChange}
                                            onInput = {(e) =>{
                                                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,11)
                                            }}
                                            placeholder=" (XX) XXXXX-XXXX"
                                            className="form-control col-sm-12 col-md-7"
                                            required />
                                    </div>

                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div>

                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div>

                                    {/**Linha para o cep
                                 * Se usarmos uma api não vamos precisar de muito mais codigos
                                 * apenas manipular o json para criar as coisas
                                 */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-5 texto">CEP</label>

                                        <input type="number"
                                            value={this.state.cep}
                                            onChange={this.handleCEP}
                                            
                                            className="form-control col-sm-12 col-md-7"
                                            placeholder="XXXXX-XXX" 
                                            required/>

                                    </div>
                                    <div className="d-none d-md-block"><br /></div>
                                
                                    <div className="form-row ">
                                <label className="col-sm-12 col-md-5 texto">Endereço</label>
                                <button type='button' className="btn col-sm-12 col-md-3 botaocad" style={{fontSize:'15px'}} onClick={this.verificar}>Verifique seu cep</button>
    
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
                                        <label className="col-sm-12 col-md-5 texto">Senha</label>
                                        <input type="password"
                                            value={this.state.senha}
                                            onChange={this.handleSenhaChange}
                                            className="form-control col-sm-12 col-md-7" 
                                            required/>
                                    </div>

                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div>
                                    {/**formulário com os switchs para escolher se quer um cadastro de cliene ou prestado de serviços */}
                                      

                                        <div id='formProf'>{/**Formulario que colapsa
                                         * caso o usuário deseje ser prestador o formulario aparece, caso contrário ele some
                                         */}

                                            <div className="form-row">
                                                <label className="col-sm-12 col-md-5 texto">Categoria</label>
                                                <select required className="form-control col-sm-12 col-md-7" onChange={this.aletrarEspecializacao}>
                                                    <option value={0}></option>
                                                    <option value={1}>Informática</option>
                                                    <option value={2}>Design</option>

                                                </select>
                                            </div>
                                            <div className="d-none d-md-block"><br /></div>

                                            <div className="form-row">
                                                <label className="col-sm-12 col-md-5 texto">Especialidade</label>
                                                <select required className="form-control col-sm-12 col-md-7" onChange={this.fixarEsp}>
                                                    <option value=""></option>
                                                    <option value={1}>{this.state.esp1}</option>
                                                    <option value={2}>{this.state.esp2}</option>
                                                    <option value={3}>{this.state.esp3}</option>

                                                </select>
                                            </div>
                                        </div>
                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /></div><div className="d-block"><br /></div>

                        {/**Linha do botão que chama a função
                         * Dentro do botão deve ter todos os metodos para criar um usuário
                         */}
                        <div className="row justify-content-center">
                            <button type="button" className="btn btn-block botaocad col-10" onClick={this.red.bind(this)}>Continuar</button>
                        </div>

                        {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /></div><div className="d-block"><br /></div>
                         {/**Acaba o form */}
                    </form>


                            {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                    <div className="d-none d-md-block"><br /><br /><br /></div><div className="d-block"><br /><br /><br /></div>
                </div>
                </div>

            </div>
        )
    }}

}
export default Form //exporta a classe