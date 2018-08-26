import React, {Component} from 'react';
import {FormGroup,Col} from 'reactstrap';
import profile from './profile.jpeg';
import tiaa from './tiaa.png';
import husky from './husky.png';
import tcs from './tcs.jpg';
import nyl from './nyl.png';
import neu from './NEU-logo.png';
import HeaderUser from "./HeaderUser";
import Footer from "./Footer";
import interest from "./interest.jpg";
import goal from './ai.jpeg';

class About extends Component {
    render() {
        return (
            <div className="main-container">
                <HeaderUser/>
                <form className="container">
                    <div className="imgPreview">
                        <img className="img-profile" src={profile}/>
                    </div>
                    <FormGroup row style={{fontStyle: 'oblique', color: 'dodgerblue'}}>
                        <Col sm={4}>
                        </Col>
                        <Col sm={1}> <img style={{height: '60px', width: '60px'}} src={neu}/></Col>
                        <Col sm={4}>

                            Master of Science in Computer Science student at Northeastern University, Boston (Expected
                            Graduation: December 2019)
                        </Col>
                    </FormGroup>
                    <FormGroup row style={{marginTop: '50px', fontSize: '30px', color: 'black'}}>
                        <Col sm={4}>
                        </Col>
                        Here's What I have done so far!
                    </FormGroup>

                    <FormGroup row style={{fontSize: '20px', color: 'grey', textAlign: 'justify'}}>
                        <Col sm={4}>
                            <img className="foo" style={{height: '250px', width: '350px'}} src={nyl}/>
                        </Col>
                        <Col sm={8}>
                            <p style={{color: 'blue'}}>New York Life</p>
                            <p style={{color: 'green'}}>Software Engineer Co-op/Intern</p>
                            <p style={{color: 'black'}}>June 2018-December 2018</p>
                            I am currently working as Software Engineer Co-op/Intern at New York Life Insurance Company,
                            New York.
                            At New York Life I am working on a web application to automate changes in nylinsure.com
                            domain websites like <a
                            href="https://ama.nylinsure.com/">https://ama.nylinsure.com/</a> using frameworks like
                            Spring MVC and Hibernate. I am working with React Js and Redux Js libraries for frontend and
                            MongoDB(mLab) for backend.
                        </Col>
                    </FormGroup>
                    <FormGroup/>
                    <FormGroup row style={{fontSize: '20px', color: 'grey', textAlign: 'justify'}}>
                        <Col sm={4}>
                            <img className="foo" style={{height: '250px', width: '350px'}} src={husky}/>
                        </Col>
                        <Col sm={8}>
                            <p style={{color: 'blue'}}>Northeastern University, Boston</p>
                            <p style={{color: 'green'}}>Graduate Computer Science Student</p>
                            <p style={{color: 'black'}}>September 2017-December 2019</p>
                            I am a Computer Science student at Northeastern University, Boston. I am doing my masters
                            with specialization in Artificial Intelligence.
                            I have studied Robotics Science and Systems, Algorithms, Managing Software Development and
                            Programming Design Paradigm.
                            I look forward to enroll in Natural Language Processing and Data Mining in my next semester.
                        </Col>
                    </FormGroup>
                    <FormGroup/>
                    <FormGroup row style={{fontSize: '20px', color: 'grey', textAlign: 'justify'}}>
                        <Col sm={4}>
                            <img className="foo" style={{height: '250px', width: '350px'}} src={tiaa}/>
                        </Col>
                        <Col sm={8}>
                            <p style={{color: 'blue'}}>TIAA (Teachers' Insurance and Annuity Association of America), Mumbai</p>
                            <p style={{color: 'green'}}>Software Engineer</p>
                            <p style={{color: 'black'}}>October 2016-June 2018</p>
                            At TIAA, I worked on the file hub application using Spring Boot, Spring MVC and Hibernate,
                            Angular JS and Oracle Coherence(Grid Computing).
                        </Col>
                    </FormGroup>
                    <FormGroup row style={{fontSize: '20px', color: 'grey', textAlign: 'justify'}}>
                        <Col sm={4}>
                            <img className="foo" style={{height: '250px', width: '350px'}} src={tcs}/>
                        </Col>
                        <Col sm={8}>
                            <p style={{color: 'blue'}}>Tata Consultancy Services, Pune</p>
                            <p style={{color: 'green'}}>Software Engineer</p>
                            <p style={{color: 'black'}}>March 2013-September 2016</p>
                            I worked on a number of web applications for Barclays, Athene Annuity and Vodafone during my stint at TCS.
                            Majority of my work was in Java/ J2EE technologies like JSF, Spring, Hibernate, Struts etc.
                        </Col>
                    </FormGroup>
                    <FormGroup row style={{marginTop: '50px', fontSize: '30px', color: 'black'}}>
                        <Col sm={4}>
                        </Col>
                       What interests me?
                    </FormGroup>
                    <FormGroup row style={{fontSize: '20px', color: 'grey', textAlign: 'justify'}}>
                        <Col sm={4}>
                            <img className="foo" style={{height: '250px', width: '350px'}} src={interest}/>
                        </Col>
                        <Col sm={8}>
                        I like exploring the power of latest technologies in web development. React JS and Redux JS are
                        a new addition to my skillset. I like doing things outside main stream work too. I developed a Car Pooling application for
                        TIAA, Mumbai employees to share rides with office colleagues using Spring Boot and MongoDB. I also like working on projects related to Natural Language Processing
                        and Machine Learning.
                        </Col>
                    </FormGroup>
                    <FormGroup row style={{marginTop: '50px',  fontSize: '30px', color: 'black'}}>
                        <Col sm={4}>
                        </Col>
                        Goals and Vision!
                    </FormGroup>
                    <FormGroup row style={{fontSize: '20px', color: 'grey', textAlign: 'justify'}}>
                        <Col sm={4}>
                            <img className="foo" style={{height: '250px', width: '350px'}} src={goal}/>
                        </Col>
                        <Col sm={8}>
                        I like exploring new technologies and frameworks. I would like to learn to take design decisions
                        for development of bulky customer facing applications. I am curious about the development of AI
                        enabled websites and I look forward to work on them. I like taking new challenges and always
                        look forward to work with intelligent and innovative minds.
                        </Col>
                    </FormGroup>


                </form>

                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default About;
