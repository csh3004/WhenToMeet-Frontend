
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/FirstPage.css';  // 추가

function FirstPage() {
  return (
    <div className="first-page-container">
      <h1>When To Meet</h1>
      <div className="button-container">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default FirstPage;
