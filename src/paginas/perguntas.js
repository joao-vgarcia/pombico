import React, { Component } from 'react'; //importando react
import './faq.css'; //importando estilos css
import { GoChevronDown } from "react-icons/go" //icones do react importados



export default class Perguntas extends Component { //classe faq
    //sem método construtor ainda
    render() {
        return (
            <div> {/**div completa */}
            
                {/**container para armazenar as perguntas */}
                <div className="d-block"><br /></div>
                <div className='container'>

                    {/**linha apenas para o cabeçalho */}
                    <div className="row justify-content-center">
                        <div className="d-none d-md-block"><br /><br /><br /></div>
                        <div className="col-12">
                            <h1 className="h1faq">Perguntas frequentes</h1>
                        </div>
                    </div>

                    {/**coloca quebra de linha dependendo do tamanho da tela */}
                    <div className="d-block"><hr /></div>

                    {/**Linha do botão
                     * Daqui pra baixo cada linha é um botão
                     */}
                    <div className="row justify-content-center">
                        <div className="col-9">
                            {/**Botão collapse
                             * Quando clica o botão expande
                             */}
                            <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#pq"><p>Por que usar o Pombico?<GoChevronDown className="float-right" /></p></button>
                    
                            <div id="pq" className="collapse">
                                <p>Porque somos uma empresa que busca atender as necessidades
nossos clientes com excelência e sempre priorizando a qualidade
e rapidez nas prestações, tendo em vista, o fortalecimento econômico
de sua comunidade pois você irá contratar um prestador de qualidade
e o mais próximo possível de você.</p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#confiavel"><p>O serviço é confiável?<GoChevronDown className="float-right" /></p></button>

                            <div id="confiavel" className="collapse">
                                    <p> Sim. Todas as negocioações e transações acontecem dentro da
                                        nossa rede. Protegida e garantida para que você, usuário,
                                        tenha seu problema resolvido sem precisar se preocupar com
                                        demais burocrácias.Fazemos e pensamos isso para garantirmos a melhor
                                        das experiências em prestação de serviços!  </p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#profissional"><p>Como contrato um profissional?<GoChevronDown className="float-right" /></p></button>

                            <div id="profissional" className="collapse">
                                <p>Primeiro, cadastre-se em nosso site e escolha a opção "Quero ser um cliente". Insira suas informações básicas e específicas
                                    para entendermos quais são suas necessidades. E assim, após tudo ser preenchido e aprovado
                                você estará pronto(a) para pesquisar e selecionar quais serviços ou profissionais quer.   </p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#servicos"><p>Como ofereço meus serviços?<GoChevronDown className="float-right" /></p></button>

                            <div id="servicos" className="collapse">
                                <p> Primeiro, cadastre-se em nosso site e escolha a opção "Quero ser um prestador". Insira suas informações básicas e específicas
                                    para entendermos quais são os serviços que você quer prestar. E assim, após tudo ser preenchido e aprovado você estará pronto(a)
                                    para ser contratado(a).  </p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#senha"><p>Esqueci minha senha, o que eu faço?<GoChevronDown className="float-right" /></p></button>

                            <div id="senha" className="collapse">
                                <p> Você deverá acessar a página Entrar e clicar no link "Esqueci minha senha" localizado abaixo do espaço de email e senha. Deverá informar
                                        o email cadastrado e em seguida receberá um email em sua caixa de entrada com o novo link para cadastrar uma nova senha.  </p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#pagar"><p>Preciso pagar para usar o serviço?<GoChevronDown className="float-right" /></p></button>
                            <div id="pagar" className="collapse">
                                <p>Sim. Você será taxado(a) por uma porcetagem fixa quando contratar ou prestar um serviço e realizar ou receber o pagamento. Mas não se preocupe é
apenas um valor simbólico para mantermos um serviço bom e de qualidade para você usuário.   </p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    {/**Acabou as linhas de botão */}

                </div>

                {/**coloca quebra de linha dependendo do tamanho da tela */}
                <div className="d-block"><br /><br /><br /></div><div className="d-none d-md-block"><br /><br /><br /></div>


            </div>



        )
    }
}


