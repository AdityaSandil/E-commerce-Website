import React, { Component } from 'react';
import { Footer, Navbar } from '../components';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Implement your registration logic here
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="container my-3 py-3">
                    <h1 className="text-center">Register</h1>
                    <hr />
                    <div className="row my-4 h-100">
                        <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form my-3">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        placeholder="Enter Your Name"
                                        value={this.state.fullName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form my-3">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="name@example.com"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form my-3">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="my-3">
                                    <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link></p>
                                </div>
                                <div className="text-center">
                                    <button className="my-2 mx-auto btn btn-dark" type="submit" disabled>
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Register;
