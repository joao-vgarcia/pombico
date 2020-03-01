import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/imagens/logoPombo.PNG';
import './Footer.css';
import facebook from '../src/imagens/facebook.svg';
import instagram from '../src/imagens/instagram.PNG';
import youtube from '../src/imagens/youtube.PNG';
import twitter from '../src/imagens/twitter.PNG';
import linkedin from '../src/imagens/linkedin.PNG';
import { MdCopyright } from 'react-icons/md';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
class Footer extends Component {
    render() {
        return (

            <div className="container-fluid ">
                <hr />
                <div className="d-none d-sm-none d-md-block d-lg-block">
                    <div className="row">

                        <div className="col-md-12">
                            <p style={{ paddingLeft: "480px" }}><img src={logo} className='logoo' /><MdCopyright /> 2020 PomBico</p>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                 <p className='fote' style={{ paddingLeft: "580px" }}><TiSocialFacebook /> <TiSocialInstagram /> <TiSocialLinkedin /> <TiSocialTwitter /> <TiSocialYoutube />  </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-block d-sm-block d-md-none d-lg-none">

                    <div className="row">
                        <div className="d-block d-sm-block d-md-none col-12">
                            <p className='fote'><MdCopyright /> 2020 PomBico</p>
                        </div>
                    </div>
                    <div className="row d-block d-sm-block d-md-none d-lg-none">
                        <div className="d-block d-sm-block d-md-none col-12">
                            <p className='fote' style={{ marginLeft: "-50px" }}><img src={logo} className=' logoo' /></p>
                        </div>
                    </div>
                    <div className="row d-block d-sm-block d-md-none d-lg-none">
                        <div className="d-block d-sm-block d-md-none col-12">
                            <p className='fote'><TiSocialFacebook /> <TiSocialInstagram /> <TiSocialLinkedin /> <TiSocialTwitter /> <TiSocialYoutube />  </p>
                        </div>
                    </div>

                </div>





            </div>





        )
    }
}

export default Footer;

//colocar codigo a seguir para social da imagem antes de Faz um bico
//<a class="navbar-brand"><img src="" alt="Logo" style="width:40px;"></img></a>

//colocar para fazer os links dentro da navbar
//precisa fazer o impor *nome* from './pagina
//<Link className="nav-link" to="/*nome*" >Contato</Link>
//import facebook from '../src/imagens/facebook.PNG';  //linha 5
//<img src={facebook} className=' social'/> // linha 29
//