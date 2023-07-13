import React, { useState, useEffect } from 'react'
import '../css/Sign-Login.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
const SignUp = () => {
    const history = useHistory()
    const [credential, setCredential] = useState({ username: " ", email: "", password: "" });
    const [formError, setFormError] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const handleSubmit = async (e) => {
        const { username, email, password } = credential;
        e.preventDefault()
        const response = await fetch("http://localhost:2300/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
        const user = await response.json();
        console.log(user);
        if (user.success) {
            history.push("/home")
        }
        setFormError(validate(credential));
        setIsSubmit(true)
    }
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit) { }
        // eslint-disable-next-line
    }, [formError])
    const validate = (value) => {
        const error = {}
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // const nameRegex = /^[a-zA-Z\s]+$/;
        if (!value.username) {
            error.name = "Please enter the name"
        } 
        if (!value.email) {
            error.email = "Please enter the email"
        }
        else if (!emailRegex.test(value.email)) {
            error.email = "Please enter the valid email"
        }
        if (!value.password) {
            error.password = "Please enter the password"
        }
        return error
    }

    return (
        <div className='container mt-5'>
            <div className="col-lg-12 col-md-12">
                <div className="contact-wrap w-100 p-3">
                    <form className="form" method="POST" onSubmit={handleSubmit} action='/home' id="contactForm" name="contactForm">
                        <div className="row">
                            <h4>Signup</h4>
                            <div className="col-lg-12 col-md-12">
                                {/* <span className='error-message'>{formError.message}</span> */}
                                <div className="form-group">
                                    <label className="label" htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" name="username" placeholder="Name" value={credential.username} onChange={onChange} width={'100%'} />
                                    <span className="error-message">{formError.username}</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                {/* <span className='error-message'>{formError.message}</span> */}
                                <div className="form-group">
                                    <label className="label" htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={credential.email} onChange={onChange} width={'100%'} />
                                    <span className="error-message">{formError.email}</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="password">Password</label>
                                    <input type="password" onChange={onChange} value={credential.password} className="form-control" id="password" name="password" placeholder="Password" />
                                    <span className="error-message">{formError.password}</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group my-3">
                                    <input type="submit" className="btn btn-primary" />
                                </div>
                            </div>
                            <Link className="d-flex justify-content-center" to="/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
