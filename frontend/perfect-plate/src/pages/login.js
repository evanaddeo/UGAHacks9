import React, { useState } from 'react';
import styles from '../app/login.css'; 
import { useRouter } from 'next/router';
import NavBar from '@/components/NavBar';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectMessage, setIncorrectMessage] = useState('');

  const routRegistration = () => {
    router.push('/registration');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/api/users');
      const data = await response.json();

      const matchingUser = data.users.find(user => user.email === email && user.password === password);

      if (matchingUser) {
        console.log('Login successful:', matchingUser);
        setIncorrectMessage('');
        router.push('/page');
      } else {
        setIncorrectMessage('Incorrect email or password');
      }
    } catch (error) {
      console.error('Error fetching or processing users:', error);
    }
  };

  return (
    <div>
      <div>
      <NavBar />
      </div>
    <div className="container">
      <h1>Login to PlatePerfect</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p style={{color: "rgb(158, 34, 34)", marginLeft: "30px;"}}>{incorrectMessage}</p>
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
      <div className="register-link">
        <p>
          Don't have an account?{' '}
          <a href="/registration" onClick={routRegistration}>Register here</a>
        </p>
      </div>
    </div>
    </div>
  );
}
