//Navigation Component
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Resume from "../../assets/images/Resume2020[153].docx"


const Navigation = ({currentPage, pageChange}) => {

    return (
        <Container>
            <Row className="mb-12 text-center">
            <h1>Jonathan Beach</h1>
                <Col>
                    <div>
                        <Button onClick={() => pageChange("About")}>About Me</Button> 
                        <Button onClick={() => pageChange("AllProjects")}>Portfolio</Button> 
                        <Button onClick={() => pageChange("Contact")}>Contact</Button> 
                        <Button href={Resume}>Resume</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Navigation;
