//Navigation Component
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Resume from "../../assets/images/Resume2020[153].docx"


const Navigation = ({ currentPage, pageChange }) => {

    return (
        <Container>
            <Row className="mb-12 text-center gx-5">
                <h1>Jonathan Beach</h1>
                <br></br>
                <br></br>
                <br></br>
                <Col>
                    <Button onClick={() => pageChange("About")}>👉 About Me 👈</Button>⚬
                    <Button onClick={() => pageChange("AllProjects")}>👉 Portfolio 👈</Button>⚬
                    <Button onClick={() => pageChange("Contact")}>👉 Contact 👈</Button>⚬
                    <Button href={Resume}>👉 Resume 👈</Button>
                </Col>
                <br></br>
                <br></br>

            </Row>
        </Container>
    );
};

export default Navigation;
