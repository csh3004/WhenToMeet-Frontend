import React, { useState } from 'react';
import '../css/Login.css';

function Login() {
  const [userId, setuserId] = useState('');
  const [userPw, setuserPw] = useState('');

  const handleLogin = () => {
    // 여기에서 실제 로그인 로직을 추가할 수 있습니다.
    // 예를 들어, 서버로 요청을 보내고 토큰을 받아오는 등의 작업을 수행합니다.
    console.log('Logging in with:', userId, userPw);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setuserId(e.target.value)}
          placeholder="아이디를 입력하세요."
        />
        <br />
        <label>Password:</label>
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
  );
}

export default Login;
