import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section>
            <Container>
                <Row class="mb-12 text-center">
                    <h1 data-testid="h1tag">Contact me</h1>
                </Row>
                        <form id="contact-form" onSubmit={handleSubmit}>
                    <Row class="mb-12 text-center">     
                        <label htmlFor="name">Name:</label>
                    <input type="text" name="Name" defaultValue={name} onBlur={handleChange} />
                    </Row>
                    <Row class="mb-12 text-center">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="Email" defaultValue={email} onBlur={handleChange} />
                    </Row>
                    <Row class="mb-12 text-center">
                        <label htmlFor="message">Message:</label>
                    </Row>
                    <Row class="mb-12 text-center">
                    <textarea name="Message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </Row>
                        {errorMessage && (
                        <p className="error-text">{errorMessage}</p>
                    )}
    <br></br>
                <Button data-testid="button" type="submit">Submit</Button>
                    </form>
                
        </Container>
        </section>
    );
}

export default Contact;
