import React, {Component} from 'react';
import {Navbar,Nav,NavItem,NavbarBrand} from 'react-bootstrap';
import Pdf from './NirupamaSharmaResume.pdf';
import logo from './logo.jpg';

class HeaderUser extends Component {


    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div style={{backgroundColor: 'black',color:'lightyellow'}}>
                <Navbar  style={{backgroundColor: 'black'}}>
                    <NavbarBrand>
                        <img src={logo} style={{"width": '150px', "height": '100px'}} alt=""/>
                    </NavbarBrand>
                   <Nav>
                    <NavItem href="/home" eventKey={1} style={{marginTop:'70px',fontFamily:'monospace'}}>01. Home</NavItem>

                  {/*  <NavItem href="/about" eventKey={2} style={{marginTop:'70px',marginLeft:'20px',color:'white',fontWeight:'bold'}}>ABOUT</NavItem>*/}

                    <NavItem href="/projects" eventKey={3} style={{marginTop:'70px',marginLeft:'20px',fontFamily:'monospace'}}>02. Projects</NavItem>

                    <NavItem  href="/contact" eventKey={4} style={{marginTop:'70px',marginLeft:'20px',fontFamily:'monospace'}}>03. Contact</NavItem>

                    <NavItem href={Pdf}  className='imgDesignPreview' eventKey={5} style={{marginTop:'70px',marginLeft:'20px',fontFamily:'monospace'}}>Resume</NavItem>
                   </Nav>
                </Navbar>

            </div>

        );

    }

}


export default HeaderUser;