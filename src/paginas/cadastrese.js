import React, { Component} from 'react'; //importanto do react
import "./cadastrese.css";//importando o arquivo css
//import api from '../Services/api'



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
            cpf:'',
            cep:"",
            resposta:[],
            redirecionar:false //variavel redirecionar serve para verificar se já foi feito login
        }
      
          
    }
	
    
    

    //metodos para instanciar os objetos
    //as funções já estão com o bind(this)


    red = async(e) =>{

            // try {await api.post('/users',{
            //     name: "qualuqer coisa",
            //     email: "qualuqer@coisa",
            //     password: "qualuqer coisa",
            //     provider:true,
            //     cnpj: "qualuqer coisa",
            //     cep: "qualuqer coisa",
            //     cep_number: 1,
            //     phone: "qualuqer coisa"

            // })}catch(err){console.log(err.response)}

            if(this.state.userdate !== "" || this.state.userdate !== " "){
                var idade = new Date(this.state.userdate)
                var maiorIdade = new Date('2002-01-01')
                if(maiorIdade <= idade){
                    alert('O usuário não pode ser menor de idade')
                }else{
                    if(this.state.cep !== "" && this.state.username !== "" && this.state.email !== "" && this.state.celular !== "" && this.state.sexo !== "" && this.state.senha !== ""){
                        this.setState({redirecionar:true})
                    }else{
                        alert('Preencha todos os campos')
                    }


                }
            }
            

            
            e.preventDefault()
     
    }
    handleUserdateChange = (event) =>{
        this.setState({userdate:event.target.value})
    }
    handleCEP=(evento)=>{
      
            this.setState({cep:evento.target.value})
        
        
       
    }
    handlecpf=(e)=>{
        this.setState({cpf:e.target.value})
    }
    verificar = () =>{
        
            if(Number(this.state.cep)){
            
        
                let URL = `https://viacep.com.br/ws/${this.state.cep}/json/`
                fetch(URL, {mode:'cors'})
                
                .then(function(response) {
                   let data = response.json()
                   return data;
                })
                .then((json) => {
                    this.setState({resposta : json});
       
                })
                .catch(function(ex) {
                   console.log('parsing failed', ex)
                })
               }else{
                   alert('Digite apenas números ex:12345000')
               }
        
       
       
  }
validarCPF = () =>{
        let cpf =[]
        let ccpf =[]
        let contador =10
        let primeiro =0
       
        for(let i =0; i<11; i++){
            cpf[i] = Number(this.state.cpf.substr(i,1 ))
        }
        for(let i=0; i<9; i++){

          ccpf[i] = cpf[i]*contador
          contador-- 
          primeiro +=ccpf[i] 
        }
        let dig1 = 11 - (primeiro %11)
        if(dig1>9){
            dig1 = 0
        }

        for(let i =0; i<11; i++){
            cpf[i] = Number(this.state.cpf.substr(i,1 ))
        }
        let contadorDois =11
        let segundo =0 
        for(let i=0; i<10; i++){

          ccpf[i] = cpf[i]*contadorDois
          contadorDois-- 
          segundo +=ccpf[i] 
        }
        
        let dig2 = 11 - (segundo % 11)
        if(dig2>9){
            dig2 = 0
        }
        
        

         if(Number(cpf[9])==dig1 && Number(cpf[10])==dig2){
             return true
         }else{
             alert('CPF inválido')
         }
        

           
          
        
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
        }else{ //colocar um } no final de tudo
       
            
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
                                    value={this.state.cpf}
                                     onChange={this.handlecpf} 
                                     onBlur={this.validarCPF}
                                     className="form-control col-sm-12 col-md-7" placeholder="CPF" />
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
    
                                <input required
                                    type="text"
                                    onChange={this.handleCEP}
                                    onBlur={this.verificar}
                                    minLength={8}
                                    maxLength={8}
                                    className="form-control col-sm-12 col-md-7 mx-auto" 
                                    placeholder="CEP"/>
    
                            </div>
                            <div className="form-row">
                                <label className="col-sm-12 col-md-5 texto">Endereço</label>
                               
                                <label >{this.state.resposta.logradouro}<br/>
                                        {this.state.resposta.bairro}<br/>
                                        {this.state.resposta.localidade}</label>
    
                     
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
                                    minLength={6}
                                    maxLength={14}
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
                                <button type="button" className="btn btn-block botaocad col-sm-12 col-md-7" onClick={this.red.bind(this)}>Continuar</button>
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
        
    
        }}
}
export default Form //exporta a classe