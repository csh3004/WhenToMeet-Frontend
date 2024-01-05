// SignUp.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SignUp.css';  // 추가
import UserApi from '../api/Api';

function SignUp() {
  const [name, setName] = useState('');
  const [userId, setuserId] = useState('');
  const [userPw, setuserPw] = useState('');
  const [age, setAge] = useState('');

  const handleSignUp = () => {
    const ans = UserApi.SignUp(name, userId, userPw, age);
    // 여기에서 회원가입 로직을 추가할 수 있습니다.
    // 서버로 요청을 보내고 사용자 정보를 저장하는 등의 작업을 수행합니다.
    console.log('Signing up with:', name, userId, userPw, age);
  };

  return (
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
  );
}

export default SignUp;
