// SignUp.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SignUp.css'; 
import UserApi from '../api/Api';

function SignUp() {
  const [name, setName] = useState('');
  const [userId, setuserId] = useState('');
  const [userPw, setuserPw] = useState('');
  const [age, setAge] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const [message, setMessage] = useState('')

  const handleSignUp = async () => {
    try {
      const response = await UserApi.SignUp({ name, userId, userPw, age });
      console.log(response.data.message); // 서버 응답 데이터 출력
      if (response.data.success === true) {
        setMessage(response.data.message);
        setShowSuccess(true);
      }
      if (response.data.success ===false){
        setMessage(response.data.message)
        setShowFail(true);
      }
      // setName(response.data.message)
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error);
      // 에러 처리
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
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <label>이름:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ex) 홍길동"
        />
        <br />
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
        <label>나이:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="ex) 25"
        />
        <br />
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
      <p>
        이미 계정이 존재하시나요? <Link to="/login">로그인 하기</Link>
      </p>
    </div>
    {showSuccess && (
      <div className="popup-overlay">
        <div className="success-popup">
          <p>{message}</p>
          <Link to='/login'><button onClick={handleSuccessClose}>확인</button></Link>
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

export default SignUp;
