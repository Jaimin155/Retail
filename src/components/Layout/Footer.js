import React,{Fragment} from 'react';
import { Link} from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap'

const Footer = () => {
    return (
            <Fragment>
               <footer className="bg-white iq-footer">
                  <Container fluid>
                     <Row>
                        <Col lg="6" >
                           <ul className="list-inline mb-0">
                              <li className="list-inline-item"><Link to="/policy">Privacy Policy</Link></li>
                              <li className="list-inline-item"><Link to="/about">About Us</Link></li> 
                              <li className="list-inline-item"><Link to="/contactus">Contact Us</Link></li>
                           </ul>
                        </Col>
                        <Col lg="6" className="text-end">
                           &copy; 2024 <Link to="/">Venditor</Link> All Rights Reserved.
                        </Col>
                     </Row>
                  </Container>
               </footer>
            </Fragment>
        )
}
export default Footer