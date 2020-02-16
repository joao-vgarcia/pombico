import React, { Component } from 'react'; //importando react
import './baixar.css'; //importando estilos css
import {FaAndroid, FaAppStore} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';



export default class Baixar extends Component { //classe faq
    //sem método construtor ainda
    render() {
        return (
<div> {/**div completa */}
    {/**Container de agradecimento */}
    <div className="container-fluid">
        {/**Primeiro container */}
      
                    {/**primeira linha com os textos */}
                    <div className="row " id="background">
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <h1 id="he1" >Obrigado por se cadastrar, agora você só precisa baixar o aplicativo para poder usar os serviços</h1>

                            {/**Quebra de linha mesmo dentro de uma linha
                             * De acordo com a tela aparece a quebra de linha ou não
                             */}
                            <div className="d-none d-md-block"><br /><br /><br /></div>

                      

                            {/**Quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-none d-md-block"><br /></div><div className="d-block d-sm-block d-md-none"><br /></div>

                            {/**Subtitulos com a imagem e texto */}
                            <h2 id="he2">1 - Baixe o aplicativo</h2>


                            <div className="d-none d-md-block"><br /></div><div className="d-block d-sm-block d-md-none"><br /></div>


                            <h2 id="he2">2 - Faça login</h2>


                            <div className="d-none d-md-block"><br /></div><div className="d-block d-sm-block d-md-none"><br /></div>


                            <h2 id="he2">3 - Divulgue um serviço ou contrate os melhores prestadores de sua região</h2>

                            <div className="d-none d-md-block"><br /></div><div className="d-block d-sm-block d-md-none"><br /></div>
                            
                            <div className="row justify-content-center"><h2 id="he2">ou</h2></div>
                            <Link className="btn btn-block ligarperfil"  to="/perfilcliente">Visite seu perfil</Link>


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
    {/**container final */}
    <div className="container">

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
                <h2 className="textobaixar">Disponível para Android e iOS</h2>
                {/**uma linha dentro de uma linha com duas imagens fixas */}
                <div className="row justify-content-around">
                    <button className="btn btnai col-5" ><FaAndroid/> <b>Android</b></button>
                    <button className="btn btnai col-5" ><FaAppStore/> <b>IOS</b></button>
                </div>
            </div>

        </div>

    </div>

</div>



        )
    }
}


