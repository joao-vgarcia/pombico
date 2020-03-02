import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/imagens/logoPombo.PNG';
import './Footer.css';

import { MdCopyright } from 'react-icons/md';
import {TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube} from 'react-icons/ti';
class Footer extends Component {
    render() {
        return (
<<<<<<< HEAD
=======
            
                <div className="container-fluid ">
                    <hr />
                    <div className="d-none d-sm-none d-md-block d-lg-block">
                    <div className="row justify-content-center">
                       
                        <div className="col-md-6" >
                            <p><Link to="/home" ><img src={logo} className='logoo' alt="Logo"/></Link><MdCopyright /> 2020 Bico</p>
                        </div>
                        <div className="row ">
                            <div className="col-md-12">
                                <p className='fote' > <a href="https://www.facebook.com/fazUmBico/" target="blank"><TiSocialFacebook/></a> <a href="https://www.instagram.com/pombico/" target="blank"><TiSocialInstagram/></a> <TiSocialLinkedin/> <TiSocialTwitter/> <TiSocialYoutube/>  </p>
                            </div>
                            <div className="col-md-12">
                                <button className="btn btn-block" style={{backgroundColor:"#32329C", borderRadius:"35px", color:"white"}}>Baixe nosso app</button>
                            </div>
                        </div>
                        
                    </div>
>>>>>>> 879cced927841ad8b344846073ac35dfdb094cc6

                    </div>
                    
                    <div className="d-block d-sm-block d-md-none d-lg-none">
                    
                        <div className="row">
                            <div className="d-block d-sm-block d-md-none col-12">
                                <p className='fote'><MdCopyright /> 2020 Bico</p>
                            </div>
                        </div>
<<<<<<< HEAD
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
=======
                        <div className="row d-block d-sm-block d-md-none d-lg-none">
                            <div className="d-block d-sm-block d-md-none col-12">
                                <p className='fote'><Link to="/home"  style={{marginLeft:"-50px"}}><img src={logo} className='logoo' alt="Logo"/></Link></p>
                            </div>
                        </div>
                        <div className="row d-block d-sm-block d-md-none d-lg-none">
                            
                            <div className="d-block d-sm-block d-md-none col-12">
                             <p className='fote' > <a href="https://www.facebook.com/fazUmBico/" target="blank"><TiSocialFacebook/></a> <a href="https://www.instagram.com/pombico/" target="blank"><TiSocialInstagram/></a> <TiSocialLinkedin/> <TiSocialTwitter/> <TiSocialYoutube/>  </p>
                            </div>

                        </div>
                        <div className="row d-block d-sm-block d-md-none d-lg-none">
                            
                            <div className="col-md-12">
                                <button className="btn btn-block" style={{backgroundColor:"#32329C", borderRadius:"35px", color:"white"}}>Baixe nosso app</button>
                            </div>

>>>>>>> 879cced927841ad8b344846073ac35dfdb094cc6
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