import React, { Component } from 'react'; //importando componentes do reac
import './home.css'; //importanto estilos pelo css

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'; //importanto icone
//import {FaAndroid, FaAppStore} from "react-icons/fa"




//importando imagens pelo diretório de imagens
import seguranca from '../imagens/seguranca.svg'
import mapa from '../imagens/mapa.svg'
import okicone from '../imagens/okicone.svg'

//import backk from '../imagens/logoPombo.PNG'
import shield from '../imagens/shield.png'
import run from '../imagens/run.png'
import baixar from '../imagens/baixar.png'
import maos from '../imagens/maos.png'
import beleza from '../imagens/beleza.png'
import register from '../imagens/register.png'
//import android from '../imagens/android.svg'
//import ios from '../imagens/ios.svg'


import homem from '../imagens/homem.png'
import mulher from '../imagens/mulher.svg'


//fim da importação das imagens


class Home extends Component { //criando a classe
    //sem método construtor ainda

    render() {
        return (
            <div> {/**Div que recebe todas as divs */}

                {/**Primeiro container */}
                <div className="container-fluid justify-content-center" >
                    {/**primeira linha com os textos */}
                    <div className="row" id="background">
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <h1 id="he1" >Contrate prestadores de serviços na sua comunidade e fortaleça a economia local</h1>

                            {/**Quebra de linha mesmo dentro de uma linha
                             * De acordo com a tela aparece a quebra de linha ou não
                             */}
                            <div className="d-none d-md-block"><br /><br /><br /></div>



                            {/**Quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-none d-md-block"><br /></div><div className="d-block d-sm-block d-md-none"><br /></div>

                            {/**Subtitulos com a imagem e texto */}
                            <h2 id="he2"><img src={seguranca} className="img-fluid" /> Negociação pelo app</h2>


                            <div className="d-none d-md-block"><br /></div><div className="d-block d-sm-block d-md-none"><br /></div>


                            <h2 id="he2"><img src={mapa} className="img-fluid" />  Prestadores perto de você</h2>


                            <div className="d-none d-md-block"><br /></div><div className="d-block d-sm-block d-md-none"><br /></div>


                            <h2 id="he2"><img src={okicone} className="img-fluid" />   Rápido e fácil de usar</h2>


                            <div className="d-none d-md-block"><br /><br /><br /></div><div className="d-block d-sm-block d-md-none"><br /></div>

                        </div>
                        {/**Fim da coluna da esquerda dentro da linha 1 */}

                        {/**Coluna da direita com imagem dentro da linha 1 */}
                        <div className="col-md-12 col-lg-5 ">

                            <div className="d-none d-sm-none d-md-block"><lottie-player src="https://assets2.lottiefiles.com/packages/lf20_F2Mv1p.json" speed="0.75" style={{ width: "500px", height: "500px", background: "transparent" }} className="img-fluid" loop autoplay > </lottie-player></div>
                            <div className="d-block d-sm-block d-md-none d-lg-none"><lottie-player src="https://assets2.lottiefiles.com/packages/lf20_F2Mv1p.json" speed="1" style={{ width: "200px", height: "200px", background: "transparent", marginLeft: "70px" }} className="img-fluid" loop autoplay > </lottie-player></div>

                        </div>
                    </div>

                    {/**Fim da primeira linha */}
                </div>


                {/**container */}
                <div className="container-fluid">

                    {/**Quebra de linha de acordo com o tamanho da tela */}
                    <div className="d-none d-md-block"><br /></div><div className="d-none d-md-block"><br /></div>

                    {/**Linha 2 */}
                    <div className="row">

                        <div className="col-12">
                            {/**texto centralizado */}
                            <h1 className="text-center funciona"><b>Como funciona</b></h1>
                        </div>
                    </div>
                </div>
                {/**Fim do container */}
                {/**Inicio do carousel */}
                <div className="row mx-auto" >
                    <div className="col-12">
                        <div id="comoFunciona" className="carousel slide" data-ride="carousel" data-interval="0" style={{ height: "430px" }}>


                            <ul className="carousel-indicators">
                                <li data-target="#comoFunciona" data-slide-to="0" className="active"></li>
                                <li data-target="#comoFunciona" data-slide-to="1"></li>
                                <li data-target="#comoFunciona" data-slide-to="2"></li>
                            </ul>


                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-6 col-md-6 ">
                                            <h2 className="num" style={{ paddingLeft: "140px" }}><b>1-</b></h2>
                                            <h3 className="titulo" style={{ paddingLeft: "140px" }}><b>Cadastre-se</b></h3>
                                            <h4 style={{ paddingLeft: "140px" }}>Seja você prestador ou cliente, é preciso realizar um rápido cadastro para a segurança de todos os usuários</h4>
                                        </div>
                                        <div className="col-sm-6 col-md-5" style={{ paddingLeft: "160px", paddingTop: "35px" }}><img src={register} className="img-fluid" /></div>
                                    </div>

                                </div>
                                <div className="carousel-item">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-6 col-md-5 ">
                                            <h2 className="num" style={{ paddingLeft: "140px" }}><b>2-</b></h2>
                                            <h3 className="titulo" style={{ paddingLeft: "140px" }}><b>Busque por um serviço</b></h3>
                                            <h4 className="" style={{ paddingLeft: "140px" }}>Navegue entre as diversas categorias de serviços no app ou procure por algo específico</h4>
                                        </div>
                                        <div className="col-sm-6 col-md-5" style={{ paddingLeft: "160px", paddingTop: "10px" }}>
                                            <lottie-player src={"https://assets4.lottiefiles.com/datafiles/qSKave3osZaw1QT/data.json"} speed={1.3} style={{ width: "180px", height: "180px", background: "transparent" }} loop autoplay ></lottie-player>

                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row justify-content-center">


                                        <div className="col-sm-6 col-md-5 ">
                                            <h2 className="num" style={{ paddingLeft: "140px" }}><b>3-</b></h2>
                                            <h3 className="titulo" style={{ paddingLeft: "140px" }}><b>Negocie com um prestador</b></h3>
                                            <h4 className="" style={{ paddingLeft: "140px" }}>Conecte-se com prestadores pertos de você negocie o serviço direto pelo app</h4>
                                        </div>
                                        <div className="col-sm-6 col-md-5" style={{ paddingLeft: "160px", paddingTop: "35px" }}><img src={maos} className="img-fluid" /></div>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row justify-content-center">

                                        <div className="col-sm-6 col-md-5 ">
                                            <h2 className="num" style={{ paddingLeft: "140px" }}><b>4-</b></h2>
                                            <h3 className="titulo" style={{ paddingLeft: "140px" }}><b>Tudo pronto</b></h3>
                                            <h4 className="" style={{ paddingLeft: "140px" }}>Depois de negociar você poderá marcar data e horário para o serviço acontecer e realizar o pagamento pelo app</h4>
                                        </div>
                                        <div className="col-sm-6 col-md-5" style={{ paddingLeft: "160px", paddingTop: "35px" }}><img src={beleza} className="img-fluid" /></div>

                                    </div>

                                </div>

                            </div>


                            <a className="carousel-control-prev" href="#comoFunciona" data-slide="prev" >
                                <span><IoIosArrowRoundBack style={{ backgroundColor: "#30305d", fontSize: "56px" }} /></span>
                            </a>
                            <a className="carousel-control-next" href="#comoFunciona" data-slide="next" >
                                <span ><IoIosArrowRoundForward style={{ backgroundColor: "#30305d", fontSize: "56px" }} /></span>
                            </a>
                            {/**className="carousel-control-prev-icon" */}
                            {/**className="carousel-control-next-icon" */}
                        </div>

                    </div>


                </div>

                {/**Fim do carousel */}





                {/**container de 2 linha */}
                <div className="container-fluid">
                    {/**linha azul */}
                    <div className="row seguro align-items-center" style={{ padding: "10px" }}>
                        {/**colunas da esquerda com quebra de linha de acorda com a tela */}
                        <div className="col-sm-12 col-md-6" >

                            <h2 className="seguro" id="titulofac"> <br /><b>Seguro e confiável</b></h2>
                            <h3 className="textoseguro">Todo o processo de negociação é feito pelo app, o que garante a segurança dos usuários contra possíveis fraudes</h3>
                            <h3 className="textoseguro">Além disso, prestadores e clientes são avaliados uns pelos outros, aumentando a confiabilidade nas negociações!</h3>
                            <div><br /></div>
                        </div>
                        {/**coluna da direita com imagem */}
                        <div className="col-md-6" style={{ paddingLeft: "220px" }}>
                            {/**imagem que some em telas menores */}
                            <div className="d-none d-md-block"><img src={shield} className="img-fluid" style={{ marginLeft: "20px" }} /></div>

                        </div>
                    </div>

                    {/**linha verde */}
                    <div className="row rapido align-items-center" style={{ padding: "35px" }}>

                        {/**coluna esquerda com imagem  */}
                        <div className="col-md-5" style={{ paddingLeft: "120px" }}>
                            <div className="d-none d-md-block"><img src={run} className="img-fluid" style={{ marginLeft: "-12px" }} /></div>

                        </div>
                        {/**coluna da esquerda com linhas responsivas */}
                        <div className="col-sm-12 col-md-7 rapido" >

                            <h2 id="titulofac"><br /><b>Rápido e fácil de usar</b></h2>
                            <h3 className="textorapido">Com poucas ações você consegue buscar e contratar prestadores de serviços na sua região</h3>
                            <h3 className="textorapido">Também é possível filtrar profissionais por distância, serviços oferecidos e mais!</h3>
                            <div><br /></div>

                        </div>
                    </div>{/**fim da linha verde */}


                </div>{/**fim das duas linhas */}

                {/**container final */}
                <div className="container-fluid">

                    {/**linha unica */}
                    <div className="row justify-content-center">

                        {/**colunas da direita com linhas responsivas */}

                        <div className="col-sm-12 col-md-12">
                            <div><br /></div>

                            <br />{/**quebra de linha fixa */}

                            <h2 id="baixar"  style={{textAlign: 'center'}}><b>Baixe nosso aplicativo</b></h2>
                            <h3 className="textobaixar" style={{textAlign: 'center'}}>Faça o Download do app e contrate os serviços que precisar, sem complicações</h3>
                         {/**<button className="btn btnai btn-block" > <b>Baixar</b></button>*/}

                        </div>

                    </div>
                    <div className="col-md-12" style={{ paddingLeft:"560px"}}>
                        <div className="d-none d-md-block" style={{ padding: "10px"}}><img src={baixar} className="img-fluid"/></div>

                    </div>

                </div>


            </div>



        )
    }
}
export default Home; //exportando a classe