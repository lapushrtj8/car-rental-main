import React from 'react';
import './Login.css'; 
import { useState } from 'react';
const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = isSignUp
            ? 'http://localhost:8010/api/auth/register'
            : 'http://localhost:8010/api/auth/login';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.name,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || 'Something went wrong');
                return;
            }

            alert(data.message);

            localStorage.setItem('user', JSON.stringify(data.user));

            if (data.user.role === 'admin') {
                window.location.href = '/admin-dashboard'; // 
            } else {
                window.location.href = '/';
            }

        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
            <form onSubmit={handleSubmit} className="login-form">

                <input
                    type="text"
                    name="name"
                    placeholder="User Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
            </form>

            <p className="toggle-text">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <span onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? 'Login' : 'Sign Up'}
                </span>
            </p>
        </div>
    );
};

export default Login;