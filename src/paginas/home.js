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
                        
                            <div className="d-none d-sm-none d-md-block"><lottie-player src="https://assets2.lottiefiles.com/packages/lf20_F2Mv1p.json" speed="0.75"  style={ {width: "500px", height: "500px",background:"transparent"}} className="img-fluid"  loop autoplay > </lottie-player></div>
                            <div className="d-block d-sm-block d-md-none d-lg-none"><lottie-player src="https://assets2.lottiefiles.com/packages/lf20_F2Mv1p.json" speed="1"  style={ {width: "200px", height: "200px",background:"transparent", marginLeft:"70px"}} className="img-fluid"  loop autoplay > </lottie-player></div>
                            
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
                            <h1 className="text-center funciona">Como funciona</h1>
                        </div>
                    </div>
                </div>
                {/**Fim do container */}
                   {/**Inicio do carousel */}
                   <div className="row mx-auto" >
                    <div className="col-12">
                        <div id="comoFunciona" className="carousel slide" data-ride="carousel" style={{height:"430px"}}>

                                                                        
                            <ul className="carousel-indicators">
                                <li data-target="#comoFunciona" data-slide-to="0" className="active"></li>
                                <li data-target="#comoFunciona" data-slide-to="1"></li>
                                <li data-target="#comoFunciona" data-slide-to="2"></li>
                            </ul>


                            <div className	="carousel-inner">
                                <div className	="carousel-item active">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-6 col-md-5 ">
                                            <p className="num">1</p>
                                            <p className="titulo">Cadastre-se</p>
                                            <p >Seja você prestador ou cliente, é preciso realizar um rápido cadastro para a segurança de todos os usuários</p>
                                        </div>
                                        <div className="col-sm-6 col-md-5">
                                        <lottie-player src={"https://assets6.lottiefiles.com/packages/lf20_iXKIMU.json"}  speed={1}  style={{width: "200px", height: "200px",background:"transparent"}}  loop autoplay ></lottie-player>

                                        </div>
                                    </div>
                                   
                                </div>
                                <div className	="carousel-item">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-6 col-md-5 ">
                                            <p className=" num">2</p>
                                            <p className=" titulo">Busque por um serviço</p>
                                            <p className="">Navegue entre as diversas categorias de serviços no app ou procure por algo específico</p>
                                        </div>
                                        <div className="col-sm-6 col-md-5">
                                        <lottie-player src={"https://assets4.lottiefiles.com/datafiles/qSKave3osZaw1QT/data.json"}  speed={1.3}  style={{width: "200px", height: "200px",background:"transparent"}}  loop autoplay ></lottie-player>

                                        </div>
                                    </div>
                                </div>
                                <div className	="carousel-item">
                                    <div className="row justify-content-center"> 

                                    
                                        <div className="col-sm-6 col-md-5 ">
                                            <p className=" num">3</p>
                                            <p className=" titulo">Negocie com um prestador</p>
                                            <p className="">Conecte-se com prestadores pertos de você negocie o serviço direto pelo app</p>
                                        </div>
                                        <div className="col-sm-6 col-md-5">
                                        <lottie-player src={"https://assets6.lottiefiles.com/packages/lf20_ycNQ7E.json"}  speed={1.4}  style={{width: "200px", height: "200px",background:"transparent"}}  loop autoplay ></lottie-player>

                                        </div>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row justify-content-center">
                                                
                                        <div className="col-sm-6 col-md-5 ">
                                            <p className=" num">4</p>
                                            <p className=" titulo">Tudo pronto</p>
                                            <p className="">Depois de negociar você poderá marcar date e horário para o serviço acontecer e realizar o pagamento pelo app</p>
                                        </div>
                                        <div className="col-sm-6 col-md-5">
                                        <lottie-player src={"https://assets4.lottiefiles.com/packages/lf20_5zYhWw.json"}  speed={1}  style={{width: "200px", height: "200px",background:"transparent"}}  loop autoplay ></lottie-player>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <a className="carousel-control-prev" href="#comoFunciona" data-slide="prev" >
                            <span><IoIosArrowRoundBack style={{backgroundColor:"#30305d", fontSize:"56px"}}/></span>
                            </a>
                            <a className="carousel-control-next" href="#comoFunciona" data-slide="next" >
                            <span ><IoIosArrowRoundForward style={{backgroundColor:"#30305d", fontSize:"56px"}}/></span>
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
                    <div className="row seguro align-items-center">
                        {/**colunas da esquerda com quebra de linha de acorda com a tela */}
                        <div className="col-sm-12 col-md-7" >

                            <h2 className="seguro" id="titulofac"> <br/>Seguro e confiável</h2>
                            <h3 className="textoseguro">Todo o processo de negociação é feito pelo app, o que garante a segurança dos usuários contra possíveis fraudes</h3>
                            <h3 className="textoseguro">Além disso, prestadores e clientes são avaliados uns pelos outros, aumentando a confiabilidade nas negociações!</h3>
                            <div><br/></div>
                        </div>
                        {/**coluna da direita com imagem */}
                        <div className="col-md-5">
                            {/**imagem que some em telas menores */}
                            <div className="d-none d-md-block"><img src={homem} className="img-fluid" style={{marginLeft:"20px"}}/></div>

                        </div>
                    </div>

                    {/**linha verde */}
                    <div className="row rapido align-items-center" >

                        {/**coluna esquerda com imagem  */}
                        <div className="col-md-5">
                            <div className="d-none d-md-block"><img src={mulher} className="img-fluid" style={{marginLeft:"-12px"}} /></div>

                        </div>
                        {/**coluna da esquerda com linhas responsivas */}
                        <div className="col-sm-12 col-md-7 rapido" >

                            <h2 id="titulofac"><br/>Rápido e fácil de usar</h2>
                            <h3 className="textorapido">Com poucas ações você consegue buscar e contratar prestadores de serviços na sua região</h3>
                            <h3 className="textorapido">Também é possível filtrar profissionais por distância, serviços oferecidos e mais!</h3>
                            <div><br/></div>

                        </div>
                    </div>{/**fim da linha verde */}


                </div>{/**fim das duas linhas */}

                {/**container final */}
                <div className="container-fluid">

                    {/**linha unica */}
                    <div className="row justify-content-center">
                        {/**coluna da esquerda com uma imagem que some em telas pequenas */}
                        <div className="col-md-6">
                            <div className="d-none d-md-block"><lottie-player src={"https://assets4.lottiefiles.com/temp/lf20_3tPLQ7.json"} speed={1}  style={{width: "500px", height: "300px", background:"transparent"}}  loop autoplay ></lottie-player></div>

                        </div>
                        {/**colunas da direita com linhas responsivas */}

                        <div className="col-sm-12 col-md-6">
                            <div><br /></div>

                            <br />{/**quebra de linha fixa */}

                            <h1 id="baixar"><center>Baixe nosso aplicativo</center></h1>
                            <hr />{/**quebra de linha com um traço */}
                            <h2 className="textobaixar">Faça o Download do app e contrate os serviços que precisa, sem complicações</h2>
                            <h2 className="textobaixar">Disponível para aparelhos móveis</h2>
                            {/**uma linha dentro de uma linha com duas imagens fixas */}
                             
                                <button className="btn btnai btn-block" > <b>Baixar</b></button>
                             
                        </div>

                    </div>

                </div>


            </div>



        )
    }
}
export default Home; //exportando a classe
