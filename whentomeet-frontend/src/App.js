
import './App.css';
import Login from './pages/Login.js';
import FirstPage from './pages/FirstPage.js';
import SignUp from './pages/SignUp.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* 웹 서비스 소개 페이지 */}
      <Route path="/" element={<FirstPage />} />
      {/* <SignUp /> */}
      <Route path="/signup" element={<SignUp />} />
      {/* <LogIn /> */}
      <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter> 
  );
}

export default App;
