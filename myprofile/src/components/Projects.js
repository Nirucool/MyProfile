import React, {Component} from 'react';
import {Table} from 'reactstrap';
import HeaderUser from "./HeaderUser";
import Footer from "./Footer";
import image1 from './image14.png'
import image2 from './image9.png'
import image3 from './image18.png'
import image4 from './image11.png'
import image5 from './plag1.png'
import image6 from './plag2.png'
import image7 from './plag3.png'
import YouTube from 'react-youtube';
import {Carousel} from 'react-responsive-carousel';

class Projects extends Component {

    videoOnReady(event) {
        event.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '250',
            width: '450',
            playerVars: {
                'autoplay': 1
            }
        };
        return (
            <div className="main-container">
                <HeaderUser/>
                <form className="container">
                    <div className="container">

                        <Table  style={{marginTop: '50px',fontSize:'15px',fontFamily:'monospace',backgroundColor:'lightsteelblue',color:'black'}}>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th style={{textAlign:'center'}}>Projects</th>
                                <th style={{textAlign:'center'}}>Github</th>
                                <th style={{textAlign:'center'}}>Videos</th>
                            </tr>
                            </thead>
                            <tbody style={{fontSize:'12px'}}>
                            <tr>
                                <th scope="row">1</th>
                                <td> Puma 560 Path Planning using RRT and PRM</td>
                                <td><a href="https://github.com/Nirucool/Codefactory">Motion Planning</a></td>
                                <td><YouTube
                                    videoId="RFNWCvCbQ1E"
                                    opts={opts}
                                    onReady={this.videoOnReady}/></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Plagiarism Detection</td>
                                <td><a href="https://github.com/Nirucool/PlagScan">Plagiarism Detection</a></td>
                                <td><YouTube
                                    videoId="SR7EXPupfmE"
                                    opts={opts}
                                    onReady={this.videoOnReady}/></td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Design & Share Web Application</td>
                                <td><a href="https://github.com/Nirucool/DesignAndShareSpringBoot">Design & Share Web App BackEnd</a>
                                    <a href="https://github.com/Nirucool/DesignAndShareUI">Design & Share Web App FrontEnd</a><br/>
                                    <a href="http://www.designandshare.info">http://www.designandshare.info</a></td>

                                <td><YouTube
                                    videoId="EF6TqfMw1lI"
                                    opts={opts}
                                    onReady={this.videoOnReady}/></td>
                            </tr>
                            </tbody>
                        </Table>
                        <div className="container my-carousel" style={{border:'thin', fontSize: '12px'}}>
                            <Carousel axis="horizontal" showArrows={true}>

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
                                <div>
                                    <img src={image1} />
                                    <p className="legend">Robotics Motion Planning using PRM and RRT Algorithms for Puma560</p>
                                </div>
                                <div>
                                    <img src={image2} />
                                    <p className="legend">Robotics Motion Planning using PRM Algorithm for Puma560</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </form>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Projects;
