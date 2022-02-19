//Footer Component
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Footer() {
    return (
        <Container>
            <Row className="mb-12 text-center">
                <Col>
        <footer>
                        <a href="https://www.linkedin.com/in/jonathan-beach-40a231112/">LinkedIn</a> | <a href="https://github.com/Teeemster">GitHub</a> | <a href="https://stackoverflow.com/users/16764120/jay">Stack Overflow</a>
                    </footer>
                </Col>
            </Row>
        </Container>
    )
}