import React, {Component} from 'react';
import {FormGroup, Input, Label, Col} from 'reactstrap';
import HeaderUser from "./HeaderUser";
import image1 from './image14.png'
import image2 from './image9.png'
import image3 from './image6.png'
import image4 from './image.png'
import image5 from './plag1.png'
import image6 from './plag2.png'
import image7 from './plag3.png'
import Footer from "./Footer";
import {Carousel} from 'react-responsive-carousel';

class Home1 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }


    render() {
        return (
            <div className="main-container">
                <HeaderUser/>
                <form className="container">
                    <div className="container my-carousel" style={{border:'thin'}}>
                    <Carousel axis="horizontal" showArrows={true}>

                        <div>
                            <img src={image1} />
                            <p className="legend">Robotics Motion Planning using PRM and RRT Algorithms for Puma560</p>
                        </div>
                         <div>
                            <img src={image2} />
                            <p className="legend">Robotics Motion Planning using PRM Algorithm for Puma560</p>
                        </div>
                        <div>
                            <img src={image3} />
                            <p className="legend">Design & Share React Redux Web Application</p>
                        </div>
                        <div>
                            <img src={image4} />
                            <p className="legend">Design & Share React Redux Web Application</p>
                        </div>
                        <div>
                            <img src={image5} />
                            <p className="legend">Plagiarism Detection using Abstract Syntax Tree Algorithm using Antlr Python Grammar </p>
                        </div>
                        <div>
                            <img src={image6} />
                            <p className="legend">Plagiarism Detection using Abstract Syntax Tree Algorithm using Antlr Python Grammar</p>
                        </div>
                        <div>
                            <img src={image7} />
                            <p className="legend">Plagiarism Detection using Abstract Syntax Tree Algorithm using Antlr Python Grammar</p>
                        </div>
                    </Carousel>
                    </div>
                </form>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}


export default Home1;
