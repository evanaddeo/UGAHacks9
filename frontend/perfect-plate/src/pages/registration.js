import React, { useState } from 'react';
import styles from '../app/registration.css'; 
import { useRouter } from 'next/router';
// import NavBar from "@/components/NavBar";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [incorrectMessage, setIncorrectMessage] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const routLogin = () => {
    router.push('/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedString = selectedOptions.length > 0 ? selectedOptions.join(',') : 'None';
  
    try {
      const response = await fetch('http://127.0.0.1:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: first, 
          lastname: last,
          email: email,
          password: password,
          intolerances: selectedString
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('User added successfully:', data);
        setIncorrectMessage('');
        router.push('/page');
      } else {
        console.log('Failed to add user:', data.message);
        setIncorrectMessage('Failed to add user');
      }
    } catch (error) {
      console.error('Error adding user:', error);
      setIncorrectMessage('Error adding user');
    }
  };

  return (
    <div className="container">
      <h1>Sign up for PlatePerfect</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid-item">
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
          <label htmlFor="first">First Name:</label>
          <input
            type="text"
            id="first"
            name="first"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            required
          />
          </div>
          </div>
          <div className="grid-item">
        <div className="form-group">
          <label htmlFor="last">Last Name:</label>
          <input
            type="text"
            id="last"
            name="last"
            value={last}
            onChange={(e) => setLast(e.target.value)}
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
        </div>
        <div className="grid-item">
        <div className="form-group">
          <label htmlFor="confirmPwd">Confirm Password:</label>
          <input
            type="password"
            id="confirmPwd"
            name="confirmPwd"
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
            required
          />
        </div>
        <div className="invis-group">
          <label htmlFor="confirmPwd"></label>
          <input style={{backgroundColor: "transparent", border: "none"}}
            type="password"
            id="confirmPwd"
            name="confirmPwd"
          />
        </div>
        </div>

        <label style={{marginLeft: "200px"}}>Select any allergens or intolerances:</label>
        <div className="all">
        <div className="checks">
            <div className="row">
                <div className="selection">
                <label className="selection">
                <input type="checkbox" value="Dairy" checked={selectedOptions.includes('Dairy')} onChange={() => handleCheckboxChange('Dairy')}/>Dairy</label>
                </div>
                <div className="selection">
                <label className="selection">
                <input type="checkbox" value="Egg" checked={selectedOptions.includes('Egg')} onChange={() => handleCheckboxChange('Egg')}/>Egg</label>
                </div>
            </div>
            <div className="row">
                <div className="selection">
                <label className="selection">
                <input type="checkbox" value="Gluten" checked={selectedOptions.includes('Gluten')} onChange={() => handleCheckboxChange('Gluten')}/>Gluten</label>
                </div>
                <div className="selection">
                <label className="selection">
                <input type="checkbox" value="Peanut" checked={selectedOptions.includes('Peanut')} onChange={() => handleCheckboxChange('Peanut')}/>Peanut</label>
                </div>
            </div>
            </div>
            <div className="checks" style={{marginLeft: "50px"}}>
            <div className="row">
                <div className="selection">
                <label className="selection">
                <input type="checkbox" value="Seafood" checked={selectedOptions.includes('Seafood')} onChange={() => handleCheckboxChange('Seafood')}/>Seafood</label>
                </div>
                <div className="selection">
                <label className="selection">
                <input type="checkbox" value="Sesame" checked={selectedOptions.includes('Sesame')} onChange={() => handleCheckboxChange('Sesame')}/>Sesame</label>
                </div>
            </div>
            <div className="row">
                <div className="selection">
                <label className="selection">
                <input type="checkbox" value="Shellfish" checked={selectedOptions.includes('Shellfish')} onChange={() => handleCheckboxChange('Shellfish')}/>Shellfish</label>
                </div>
                <div className="selection">
                <label className="selection">
                <input type="checkbox" value="Soy" checked={selectedOptions.includes('Soy')} onChange={() => handleCheckboxChange('Soy')}/>Soy</label>
                </div>
            </div>
            </div>
        </div>

        <p style={{color: "rgb(158, 34, 34)", marginLeft: "30px;"}}>{incorrectMessage}</p>
        <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
      <div className="register-link">
        <p>
          Already have an account?{' '}
          <a href="/registration" onClick={routLogin}>Log in here</a>
        </p>
      </div>
    </div>
  );
}
