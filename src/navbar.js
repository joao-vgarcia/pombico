import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/imagens/logoPombo.PNG';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            cor4:"white",
            cor5: "white",
            cor6: "white",
            cor7: "white",
            borda: "30px ",
            fonte5 : "#32329C",
            fonte6 : "#32329C",
            fonte7:"#32329C",
            fonte4:"#32329C"
        }
    }

    mudacor0(){
      
        this.setState({ cor5: "white", fonte5 : "#32329C" })
        this.setState({ cor6: "white", fonte6: "#32329C" })
        this.setState({ cor7: "white", fonte7: "#32329C" })
        this.setState({ cor4: "white", fonte4:"#32329C" })
    }

    mudacor3() {
        
        this.setState({ cor5: "#30305d", fonte5:"white" })
        this.setState({ cor6: "white", fonte6: "#32329C" })
        this.setState({ cor7: "white", fonte7: "#32329C" })
        this.setState({ cor4: "white", fonte4:"#32329C" })
    }
    mudacor4() {
        
        this.setState({ cor5: "white", fonte5:"#32329C" })
        this.setState({ cor4: "#30305d", fonte4:"white" })
        this.setState({ cor6: "white", fonte6: "#32329C" })
        this.setState({ cor7: "white", fonte7: "#32329C" })
    }

    mudacor5() {
     
        this.setState({ cor5: "white" , fonte5:"#32329C"})
        this.setState({ cor6: "#30305d", fonte6: "white" })
        this.setState({ cor7: "white", fonte7: "#32329C" })
        this.setState({ cor4: "white", fonte4:"#32329C" })

    }

    mudacor7() {
       
        this.setState({ cor5: "white" , fonte5: "#32329C"})
        this.setState({ cor6: "white" , fonte6: "#32329C"})
        this.setState({ cor7: "#30305d", fonte7 : "white" })
        this.setState({ cor4: "white", fonte4:"#32329C " })
    }


    render() {

            return (
                <div>

                    <nav className="navbar navbar-expand-lg navbar-dark bg-white text-dark" id="branco">
                        <p className='logomenu'><Link to="/home" onClick={this.mudacor0.bind(this)}><img src={logo} className=' logo' alt="Logo"/></Link></p>
                        <Link className="logoescrito" to="/home" onClick={this.mudacor0.bind(this)} >PomBico</Link>
                        <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><span className=""><GiHamburgerMenu style={{fontSize:"35px", color:"white"}}/></span></button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav mx-auto">

                                    <li className="nav-item" >
                                        <Link className="nav-link"  to="/home" style={{backgroundColor:this.state.cor5, borderRadius: this.state.borda, color: this.state.fonte5}}  onClick={this.mudacor3.bind(this)}  >Home</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link"  to="/faq" style={{backgroundColor:this.state.cor6, borderRadius: this.state.borda, color: this.state.fonte6}} onClick={this.mudacor5.bind(this)} >Quem somos</Link>
                                    </li>
                                    <li className="nav-item" >
                                        <Link className="nav-link"  to="/perguntas" style={{backgroundColor:this.state.cor4, borderRadius: this.state.borda, color: this.state.fonte4}}  onClick={this.mudacor4.bind(this)}  >Perguntas Frequentes</Link>
                                    </li>
                                    
                                     <li className="nav-item" >
                                        <Link to="/login" className="nav-link"  style={{ backgroundColor: this.state.cor7, borderRadius: this.state.borda, color: this.state.fonte7}} onClick={this.mudacor7.bind(this)}>Entre ou cadastre-se</Link>
                                    </li>
                                </ul>
                        </div>
                    </nav>
                </div>
            )
        }
        }





