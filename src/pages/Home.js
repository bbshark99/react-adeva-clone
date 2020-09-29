import React from 'react';
import { Button, Col, Row, Container, Card } from 'react-bootstrap';

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
            <Container>
                <Col sm="12" md="6">
                    <h1 className="mb-5">World-Class Agile Talent, On-Demand.</h1>
                    <h5 className="mb-3">We specialize in building and scaling engineering teams with blazing-fast efficiency.</h5>
                    <Button variant="success" className="text-uppercase mb-2 px-3">Start For Free</Button>
                    <p className="text-muted small">100% risk-free. Pay Only If Satisfied</p>
                </Col>
            </Container>
        </section>

        <section className="tech-bar">
            <Container>
                <h1 className="text-center mb-4">World-Class Tech Talent to Your Doorstep</h1>
                <h5 className="text-center mb-5">Leverage world-class tech talent that work alongside your team to build better products, faster.</h5>
                <Row>
                    <Col sm="12" md="4">
                        <Card>
                            <Card.Header>
                                <img src={DeveloperLogoSVG} alt="developer"/>
                            </Card.Header>
                            <Card.Body>
                                <h3>Developers</h3>
                                <p>Software engineers, programmers and architects experienced across hundreds of technologies.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" md="4">
                        <Card>
                            <Card.Header>
                                <img src={DesignerLogoSVG} alt="designer"/>
                            </Card.Header>
                            <Card.Body>
                                <h3>Designers</h3>
                                <p>Exceptional UX, UI and interaction designers that will bring the your project on the next level.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" md="4">
                        <Card>
                            <Card.Header>
                                <img src={TesterLogoSVG} alt="tester"/>
                            </Card.Header>
                            <Card.Body>
                                <h3>QA</h3>
                                <p>Seasoned QA automation engineers and manual QA engineers to verify your product.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="performance-bar mb-5">
            <Container>
                <h1 className="text-center my-5">Build High-Performing Teams, On Demand</h1>
                <br />
                <Row>
                    <Col sm="12" md="6">
                        <Row className="my-2">
                            <Col sm="12" md="6">
                                <img src={ScaleSVG} className="mb-4" alt="scale"/>
                                <h5 className="mb-3">Hire Quickly</h5>
                                <p>Hire in less than 2 weeks. Scale up or down as needed, when needed. Fully flexible engagements from hourly to full-time.</p>
                            </Col>
                            <Col sm="12" md="6">
                                <img src={ReduceCostSVG}  className="mb-4" alt="reduce cost"/>
                                <h5 className="mb-3">Reduce costs</h5>
                                <p>No recruitment fees, no hidden costs. Reduce up to 30% while working with some of the brightest minds in the world.</p>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col sm="12" md="6">
                                <img src={ExceptionSVG}  className="mb-4" alt="exception" />
                                <h5 className="mb-3">Exceptional Talent Only</h5>
                                <p>All of our talent has gone through our rigorous screening process that include not only technical skills, but aptitude and personality too.</p>
                            </Col>
                            <Col sm="12" md="6">
                                <img src={RightFitSVG}  className="mb-4" alt="rightfit"/>
                                <h5 className="mb-3">The right fit, right away</h5>
                                <p>Start working with your new hire on a no-risk trial period, paying only if satisfied.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="12" md="6">
                        <img src={BuildAmazingTeamSVG} alt="building amazing"/>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="schedule-bar">
            <Container className="d-flex justify-content-between align-items-center h-100">
                <div className="schedule-content">
                    <h2>Ready to get started?</h2>
                    <h2>Get in touch or schedule a call</h2>
                </div>
                <div className="schedule-control">
                    <Button variant="success" className="text-uppercase px-3">Start Hiring</Button>
                </div>
            </Container>
        </section>

    </div>
);

export default Home;