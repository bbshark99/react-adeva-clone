import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import DesignerLogoSVG from './../assets/svg/designers-v2.svg';
import DeveloperLogoSVG from './../assets/svg/developers-v2.svg';
import TesterLogoSVG from './../assets/svg/testers.svg';

import ScaleSVG from './../assets/svg/scale_as_needed.svg';
import ReduceCostSVG from './../assets/svg/reduce_costs.svg';
import ExceptionSVG from './../assets/svg/exceptional_engineers.svg';
import RightFitSVG from './../assets/svg/right_fit.svg';

import BuildAmazingTeamSVG from './../assets/svg/build_amazing_teams.svg';

import './../assets/css/home.css';
const Home = () => (
    <div className="home-page">
        <section className="hero-bar">
            <div className="container">
                <Col sm="12" md="6">
                    <h1>World-Class Agile Talent, On-Demand.</h1>
                    <br />
                    <h5>We specialize in building and scaling engineering teams with blazing-fast efficiency.</h5>
                    <br />
                    <Button variant="success">Start For Free</Button>
                    <br />
                    <p class="text-muted small">100% risk-free. Pay Only If Satisfied</p>
                </Col>
            </div>
        </section>

        <section className="tech-bar">
            <div className="container">
                <h1 class="text-center">World-Class Tech Talent to Your Doorstep</h1>
                <br />
                <h5 class="text-center">Leverage world-class tech talent that work alongside your team to build better products, faster.</h5>
                <br />
                <Row>
                    <Col sm="12" md="4">
                        <div className="card">
                            <div className="card-header">
                                <img src={DeveloperLogoSVG} />
                            </div>
                            <div className="card-body">
                                <h3>Developers</h3>
                                <p>Software engineers, programmers and architects experienced across hundreds of technologies.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className="card">
                            <div className="card-header">
                                <img src={DesignerLogoSVG} />
                            </div>
                            <div className="card-body">
                                <h3>Designers</h3>
                                <p>Exceptional UX, UI and interaction designers that will bring the your project on the next level.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className="card">
                            <div className="card-header">
                                <img src={TesterLogoSVG} />
                            </div>
                            <div className="card-body">
                                <h3>QA</h3>
                                <p>Seasoned QA automation engineers and manual QA engineers to verify your product.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>

        <section className="performance-bar">
            <div className="container">
                <h1 className="text-center">Build High-Performing Teams, On Demand</h1>
                <br />
                <Row>
                    <Col sm="12" md="6">
                        <Row className="my-2">
                            <Col sm="12" md="6">
                                <img src={ScaleSVG} className="mb-2"/>
                                <h5>Hire Quickly</h5>
                                <br />
                                <p>Hire in less than 2 weeks. Scale up or down as needed, when needed. Fully flexible engagements from hourly to full-time.</p>
                            </Col>
                            <Col sm="12" md="6">
                                <img src={ReduceCostSVG}  className="mb-2"/>
                                <h5>Reduce costs</h5>
                                <br />
                                <p>No recruitment fees, no hidden costs. Reduce up to 30% while working with some of the brightest minds in the world.</p>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col sm="12" md="6">
                                <img src={ExceptionSVG}  className="mb-2"/>
                                <h5>Exceptional Talent Only</h5>
                                <br />
                                <p>All of our talent has gone through our rigorous screening process that include not only technical skills, but aptitude and personality too.</p>
                            </Col>
                            <Col sm="12" md="6">
                                <img src={RightFitSVG}  className="mb-2"/>
                                <h5>The right fit, right away</h5>
                                <br />
                                <p>Start working with your new hire on a no-risk trial period, paying only if satisfied.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="12" md="6">
                        <img src={BuildAmazingTeamSVG} />
                    </Col>
                </Row>
            </div>
        </section>

        <section className="schedule-bar">
            <div className="container d-flex justify-content-between align-items-center h-100">
                <div className="schedule-content">
                    <h2>Ready to get started?</h2>
                    <h2>Get in touch or schedule a call</h2>
                </div>
                <div className="schedule-control">
                    <Button variant="success">Start Hiring</Button>
                </div>
            </div>
        </section>

    </div>
);

export default Home;