//About Component
import React from "react";
import Jay from "../../assets/images/Jay.png"
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


const About = () => {
    return (
        <Container>
            <Row className="mb-12 text-center">
                <Col>
                    <br></br>
                    <img src={Jay} alt="avatar of Jay"></img>
                    <br></br>
                    <br></br>
            <p>

                <b>Hi! I am Jonathan.
                            <br></br>
                            <br></br>
                    I am a University of Texas graduate with a Bachelors of Science in Nutrition. Hook 'em!
                            <br></br>
                            <br></br>
                    I am a current coding student with the University of Arizona, learning full-stack development!
                            <br></br>
                            <br></br>
                    I have worked with ADP for the past five years learning everything there is to know about payroll
                    and taxes!
                </b>

                
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;