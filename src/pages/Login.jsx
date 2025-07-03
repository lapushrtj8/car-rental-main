import React from 'react';
import './Login.css'; // Optional CSS for styling

const Login = () => {
const [isSignUp, setIsSignUp] = useState(false);
const [formData, setFormData] = useState({
name: '',
email: '',
password: '',
});

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();

if (isSignUp) {
alert(`Signing up:\nName: ${formData.name}\nEmail: ${formData.email}`);
// Send signup data to backend
} else {
alert(`Logging in:\nEmail: ${formData.email}`);
// Send login data to backend
}
};

return (
<div className="login-container">
<h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
<form onSubmit={handleSubmit} className="login-form">
{isSignUp && (
<input
type="text"
name="name"
placeholder="Your Name"
value={formData.name}
onChange={handleChange}
required
/>
)}
<input
type="email"
name="email"
placeholder="Email"
value={formData.email}
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