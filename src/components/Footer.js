import React from 'react';
import { Row, Col } from 'react-bootstrap';

import LogoAdevaSVG from './../assets/svg/logo_adeva.svg';

import './../assets/css/footer.css';

const Footer = () => (
    <Row className="footer">
        <Col sm="12" md="6">
            <div className="w-100 text-center mb-5">
                <img src={LogoAdevaSVG} className="footer-logo" alt="logo" />
            </div>
            <h3 className="text-center">Adeva</h3>
        </Col>
        <Col sm="12" md="6">
            <Row>
                <Col sm="12" md="3">
                    <h5 className="mb-4">Solutions</h5>
                    <ul className="list-group">
                        <li className="list-group-item border-0 px-1 py-2">For Startups</li>
                        <li className="list-group-item border-0 px-1 py-2">For Scaleups</li>
                        <li className="list-group-item border-0 px-1 py-2">For Enterprises</li>
                    </ul>
                </Col>
                <Col sm="12" md="3">
                    <h5 className="mb-4">Community</h5>
                    <ul className="list-group">
                        <li className="list-group-item border-0 px-1 py-2">About</li>
                        <li className="list-group-item border-0 px-1 py-2">Partners</li>
                        <li className="list-group-item border-0 px-1 py-2">Contact</li>
                        <li className="list-group-item border-0 px-1 py-2">FAQs</li>
                        <li className="list-group-item border-0 px-1 py-2">Write For Us</li>
                        <li className="list-group-item border-0 px-1 py-2">Media Kit</li>
                    </ul>
                </Col>
                <Col sm="12" md="3">
                    <h5 className="mb-4">Insights</h5>
                    <ul className="list-group">
                        <li className="list-group-item border-0 px-1 py-2">Agile Talent</li>
                        <li className="list-group-item border-0 px-1 py-2">Distributed Team</li>
                        <li className="list-group-item border-0 px-1 py-2">Future of Work</li>
                        <li className="list-group-item border-0 px-1 py-2">Startups</li>
                    </ul>
                </Col>
                <Col sm="12" md="3">
                    <h5 className="mb-4">Resources</h5>
                    <ul className="list-group">
                        <li className="list-group-item border-0 px-1 py-2">Guides</li>
                        <li className="list-group-item border-0 px-1 py-2">Interview Questions</li>
                    </ul>
                </Col>
            </Row>
        </Col>
    </Row>
);

export default Footer;