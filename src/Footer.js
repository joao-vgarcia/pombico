import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/imagens/logoPombo.PNG';
import './Footer.css';

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
                                <p className='fote' style={{ paddingLeft: "580px" }}><a href="https://www.facebook.com/fazUmBico/" target="blank"><TiSocialFacebook /></a> <a href="https://www.instagram.com/pombico/" target="blank"><TiSocialInstagram /></a> <TiSocialLinkedin /> <TiSocialTwitter /> <TiSocialYoutube /></p>
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
                            <p className='fote'><a href="https://www.facebook.com/fazUmBico/" target="blank"><TiSocialFacebook /></a> <a href="https://www.instagram.com/pombico/" target="blank"><TiSocialInstagram /></a> <TiSocialLinkedin /> <TiSocialTwitter /> <TiSocialYoutube /></p>
                        </div>
                    </div>

                </div>





            </div>





        )
    }
}

export default Footer;


