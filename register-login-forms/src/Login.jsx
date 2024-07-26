import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [isRegistering, setIsRegistering] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [error, setError] = useState('');

    const handleToggle = () => {
        setIsRegistering(!isRegistering);
        setError('');
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        console.log({ username, email, password, confirmPassword });
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === loginUsername && u.password === loginPassword);
        
        if (!user) {
            setError('User not found or incorrect password');
            return;
        }

        console.log({ loginUsername, loginPassword });
        setLoginUsername('');
        setLoginPassword('');
        setError('');
    };

    return (
        <div className="App">
            {isRegistering ? (
                <form onSubmit={handleRegisterSubmit}>
                    <h2>Register</h2>
                    {error && <p className="error">{error}</p>}
                    <div>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder='Username' />
                    </div>
                    <div>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email' />
                    </div>
                    <div>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Password' />
                    </div>
                    <div>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder='Confirm Password' />
                    </div>
                    <button type="submit">Register</button>
                </form>
            ) : (
                <form onSubmit={handleLoginSubmit}>
                    <h2>Login</h2>
                    {error && <p className="error">{error}</p>}
                    <div>
                        <label>Username:</label>
                        <input type="text" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
            <button className='btn' onClick={handleToggle}>
                {isRegistering ? 'Already a Member?' : 'Register Here'}
            </button>
        </div>
    );
};

export default Login;
