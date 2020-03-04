import React, { Component } from 'react'; //importando react
import './faq.css'; //importando estilos css

import jvg from "../imagens/jvg.JPG"
import camilam from "../imagens/camilam.PNG"
import jenifer from "../imagens/djenifer.PNG"
import vinicius from "../imagens/vinicius.PNG"
import yasmin from "../imagens/yasmin.PNG"



class FAQ extends Component { //classe faq
    //sem método construtor ainda
    render() {
        return (
            <div> {/**div completa */}
                 
                {/**coloca quebra de linha dependendo do tamanho da tela */}
                <div className="d-block"><hr /></div>
                {/**container de quem somos com os cards missão visao e valores */}
                <div className="container ">
                    <h1>Quem somos?</h1>
                    <div className="container">
                        {/**container da linha 1 */}
                        <div className="row justify-content-around">
                            {/**coluna da esquerda */}
                            <div className="col-sm-12 col-md-3 cartaoo">
                                <p className="num">Missão</p>
                                <p className="titulo">Comunidades</p>
                                <p >Fortalecer economias locais por meio da oferta e demanda de prestações de serviços nas comunidades.</p>
                            </div>
                            {/**coluna do meio */}
                            <div className="col-sm-12 col-md-3 cartaoo">
                                <p className=" num">Visão</p>
                                <p className=" titulo">Prosperidade</p>
                                <p >Ser referência nas prestações de serviços das cidades brasileiras, com o objetivo de inspirar comunidades a construir um futuro com economias locais mais integradas e prósperas.</p>
                            </div>
                            {/**coluna da direita */}
                            <div className="col-sm-12 col-md-3 cartaoo">
                                <p className=" num">Valores</p>
                                <p className=" titulo">Empoderar</p>
                                <p >Empoderar comunidades; Facilitar as relações profissionais nas cidades brasileiras; Atender demandas locais; Divulgar prestadores de serviços regionais; Desburocratizar prestações de serviços.</p>
                            </div>
                        </div>
                    </div>
                </div>







                <div className="d-block"><hr /></div>
                {/**container do onde estamos com os perfis do linkedin */}
                <div className="container ">
                    <h1>Onde estamos?</h1>
                    <div className="container">
                        {/**container da linha 1 */}
                        <div className="row justify-content-around">
                            {/**coluna da esquerda camila */}
                            <div className="card" style={{ width: "330px", marginTop: "20px" }}>
                                <img className="card-img-top" src={camilam} alt="Camila Moraes" />
                                <div className="card-body">
                                    <h4 className="card-title">Camila Moraes</h4>
                                    <p className="card-text">Estudante de programação Recode-PRO</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>React Native</li>
                                        <li>Nodejs</li>
                                        <li>SQL - MySQL</li>
                                        <li>HTML | CSS</li>
                                        <li>Bootstrap 4</li>
                                    </ul>

                                    <a href="https://www.linkedin.com/in/camila-moraes-208311157/" target="blank" className="btn btn-info">Perfil linkedin</a>
                                    <a href="https://github.com/kmiiss" target="blank" className="btn btn-dark" style={{marginLeft:"10px"}}>Perfil GitHub</a>
                                </div>
                            </div>
                            {/**coluna do centro jenifer */}
                            <div className="card" style={{ width: "330px", marginTop: "20px" }}>
                                <img className="card-img-top" src={jenifer} alt="Jenifer" />
                                <div className="card-body">
                                    <h4 className="card-title">Djenifer Rezende</h4>
                                    <p className="card-text">Estudante de programação Recode-PRO</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>React Native</li>
                                        <li>Nodejs</li>
                                        <li>SQL - MySQL</li>
                                        <li>HTML | CSS</li>
                                        <li>Bootstrap 4</li>
                                    </ul>

                                    <a href="https://www.linkedin.com/in/djenifer-rezende-31706096/" target="blank" className="btn btn-info">Perfil linkedin</a>
                                    <a href="https://github.com/Djeniferrezende" target="blank" className="btn btn-dark" style={{marginLeft:"10px"}}>Perfil GitHub</a>
                                </div>
                            </div>
                            {/**coluna final joao */}
                            <div className="card" style={{ width: "330px", marginTop: "20px" }}>
                                <img className="card-img-top" src={jvg} alt="Garcia" />
                                <div className="card-body">
                                    <h4 className="card-title">João Vitor Garcia</h4>
                                    <p className="card-text">Estudante de programação Recode-PRO</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>React Native</li>
                                        <li>Nodejs</li>
                                        <li>SQL - MySQL</li>
                                        <li>HTML | CSS</li>
                                        <li>Bootstrap 4</li>
                                    </ul>

                                    <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-garcia-b4a952126/" target="blank" className="btn btn-info">Perfil linkedin</a>
                                    <a href="https://github.com/joao-vgarcia/" target="blank" className="btn btn-dark" style={{marginLeft:"10px"}}>Perfil GitHub</a>
                                </div>
                            </div>
                            {/**coluna esquerda vinicius */}
                            <div className="card" style={{ width: "330px", marginTop: "20px" }}>
                                <img className="card-img-top" src={vinicius} alt="Vinicius" />
                                <div className="card-body">
                                    <h4 className="card-title">Vinicius Gonçalves</h4>
                                    <p className="card-text">Estudante de programação Recode-PRO</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>React Native</li>
                                        <li>Nodejs</li>
                                        <li>SQL - MySQL</li>
                                        <li>HTML | CSS</li>
                                        <li>Bootstrap 4</li>
                                    </ul>

                                    <a href="https://www.linkedin.com/in/vncsgonca23/" target="blank" className="btn btn-info">Perfil linkedin</a>
                                    <a href="https://github.com/vncsgonca23" target="blank" className="btn btn-dark" style={{marginLeft:"10px"}}>Perfil GitHub</a>
                                </div>
                            </div>
                            {/**coluna final yasmin */}
                            <div className="card" style={{ width: "330px", marginTop: "20px" }}>
                                <img className="card-img-top" src={yasmin} alt="Iasmim" />
                                <div className="card-body">
                                    <h4 className="card-title">Yasmin Lira</h4>
                                    <p className="card-text">Estudante de programação Recode-PRO</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>React Native</li>
                                        <li>Nodejs</li>
                                        <li>SQL - MySQL</li>
                                        <li>HTML | CSS</li>
                                        <li>Bootstrap 4</li>
                                    </ul>

                                    <a href="https://www.linkedin.com/in/yasmimlira/" target="blank" className="btn btn-info">Perfil linkedin</a>
                                    <a href="https://github.com/" target="blank" className="btn btn-dark" style={{marginLeft:"10px"}}>Perfil GitHub</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>








                {/**coloca quebra de linha dependendo do tamanho da tela */}
                <div className="d-block"><br /><br /><br /></div><div className="d-none d-md-block"><br /><br /><br /></div>


            </div>



        )
    }
}
export default FAQ; //exporta a classe faq

