import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog py-4'>
            <Container>
                <div className='mb-4'>
                    <h4>What is `cors`?</h4>
                    <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
                </div>
                <div className='mb-4'>
                    <h4>Why are you using `firebase`? What other options do you have to implement authentication?</h4>
                    <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                        Alternatives of firebase : Auth0,MongoDB,Passport,Okta,JSON Web Token,Keycloak,Amazon Cognito.</p>
                </div>
                <div className='mb-4'>
                    <h4>How does the private route work?</h4>
                    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
                <div className='mb-4'>
                    <h4>What is Node? How does Node work?</h4>
                    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
            </Container>
        </div>
    );
};

export default Blog;