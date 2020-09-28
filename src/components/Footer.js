import React from 'react';
import { Row, Col } from 'react-bootstrap';

import LogoAdevaSVG from './../assets/svg/logo_adeva.svg';

import './../assets/css/footer.css';

const Footer = () => (
    <Row className="footer">
        <Col sm="12" md="6">
            <div class="w-100 text-center">
                <img src={LogoAdevaSVG} className="footer-logo"/>
            </div>
        </Col>
        <Col sm="12" md="6">
            <Row>
                <Col sm="12" md="3">
                    <h5>Solutions</h5>
                    <ul>
                        <li>For Startups</li>
                        <li>For Scaleups</li>
                        <li>For Enterprises</li>
                    </ul>
                </Col>
                <Col sm="12" md="3">
                    <h5>Community</h5>
                    <ul>
                        <li>About</li>
                        <li>Partners</li>
                        <li>Contact</li>
                        <li>FAQs</li>
                        <li>Write For Us</li>
                        <li>Media Kit</li>
                    </ul>
                </Col>
                <Col sm="12" md="3">
                    <h5>Insights</h5>
                    <ul>
                        <li>Agile Talent</li>
                        <li>Distributed Team</li>
                        <li>Future of Work</li>
                        <li>Startups</li>
                    </ul>
                </Col>
                <Col sm="12" md="3">
                    <h5>Resources</h5>
                    <ul>
                        <li>Guides</li>
                        <li>Interview Questions</li>
                    </ul>
                </Col>
            </Row>
        </Col>
    </Row>
);

export default Footer;