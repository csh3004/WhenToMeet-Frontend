import React, { useState } from 'react';
import '../css/Login.css';
import { Link } from 'react-router-dom';
import UserApi from '../api/Api';

function Login() {
  const [userId, setuserId] = useState('');
  const [userPw, setuserPw] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const [message, setMessage] = useState('')


  const handleLogin = async () => {
    try {
      const response = await UserApi.Login({ userId, userPw});
      console.log(response.data.message); // 서버 응답 데이터 출력
      if (response.data.success === true) {
        setMessage(response.data.message)
        setShowSuccess(true);
      } 
      if (response.data.success === false){
        setMessage(response.data.message)
        setShowFail(true);
      }} catch (error) {
      console.error('Error during login:', error);
    }
  };
  const handleSuccessClose = () => {
    setShowSuccess(false);
    // 팝업 닫을 때 추가로 처리할 로직이 있다면 여기에 추가하세요.
  };
  const handleFailClose = () => {
    setShowFail(false);
    // 팝업 닫을 때 추가로 처리할 로직이 있다면 여기에 추가하세요.
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
        <br/>
        <label>비밀번호:</label>
        <input
          type="password"
          value={userPw}
          onChange={(e) => setuserPw(e.target.value)}
          placeholder="비밀번호를 입력하세요."
        />
        <br/>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
    {showSuccess && (
      <div className="popup-overlay">
        <div className="success-popup">
          <p>{message}</p>
          <Link to='/mypage'><button onClick={handleSuccessClose}>확인</button></Link>
        </div>
      </div>
      )}
      {showFail && (
      <div className="popup-overlay">
        <div className="success-popup">
          <p>{message}</p>
          <button onClick={handleFailClose}>확인</button>
        </div>
      </div>
      )}
    </div>
  );
}

export default Login;
