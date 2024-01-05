import React, { useState } from 'react';
import '../css/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [userId, setuserId] = useState('');
  const [userPw, setuserPw] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', userId, userPw);
  };

  return (
    <div className='home-button'>
      <Link to= '/'><button>go to home</button></Link>
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>아이디:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setuserId(e.target.value)}
          placeholder="아이디를 입력하세요."
        />
        <br />
        <label>비밀번호:</label>
        <input
          type="password"
          value={userPw}
          onChange={(e) => setuserPw(e.target.value)}
          placeholder="비밀번호를 입력하세요."
        />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
    </div>
  );
}

export default Login;
