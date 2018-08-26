import React, {Component} from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import {Collapse, NavbarBrand, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap';
import {Link} from 'react-router-dom';
import Pdf from './NirupamaSharmaResume.pdf';

class HeaderUser extends Component {


    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Navbar  style={{backgroundColor: 'black'}}>
                   <Nav>
                    <NavItem href="/home" eventKey={1} style={{marginTop:'70px',color:'white',fontWeight:'bold'}}>HOME</NavItem>

                    <NavItem href="/about" eventKey={2} style={{marginTop:'70px',marginLeft:'20px',color:'white',fontWeight:'bold'}}>ABOUT</NavItem>

                    <NavItem href="/projects" eventKey={3} style={{marginTop:'70px',marginLeft:'20px',color:'white',fontWeight:'bold'}}>PROJECTS</NavItem>

                    <NavItem href={Pdf} eventKey={4} style={{marginTop:'70px',marginLeft:'20px',color:'white',fontWeight:'bold'}}>RESUME</NavItem>

                    <NavItem href="/contact" eventKey={5} style={{marginTop:'70px',marginLeft:'20px',color:'white',fontWeight:'bold'}}>CONTACT</NavItem>
                   </Nav>
                </Navbar>

            </div>

        );

    }

}


export default HeaderUser;