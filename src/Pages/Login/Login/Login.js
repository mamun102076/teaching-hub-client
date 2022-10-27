import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('')
    const { googleLogin, signIn, githubSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const googleProvier = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleGoogleLogin = () => {
        googleLogin(googleProvier)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleGithub = () => {
        githubSignIn(githubProvider)
        .then(result => {
            const user = result.user
            console.log(user)
            navigate(from, { replace: true })
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className='login-form'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-danger'>{error}</p>
                <p>Are you new to this site ? please go to <Link to='/register'>Regitser</Link></p>
            </Form>
            <div>
                <p className='text-center text-muted'><small>------or-----</small></p>
                <Button onClick={handleGoogleLogin} variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button onClick={handleGithub} variant="outline-dark"><FaGithub></FaGithub> Login With GitHub</Button>
            </div>
        </div>
    );
};

export default Login;