import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TimeTableApi } from '../api/Api';
// import '../css/FirstPage.css';  // 추가

function MyPage() {
  const [timesetList, setTimesetList] = useState([]);

  useEffect(() => {
    // 페이지가 로드될 때 실행되는 코드
    handleTimesetList();
  }, []); // 빈 배열은 최초 로드 시에만 실행되도록 합니다.

  const handleTimesetList = async () => {
    try {
      const response = await TimeTableApi.GetMyTjmetable();
      console.log(response.data);
      setTimesetList(response.data)
    } catch (error) {
      console.error('Error during handleTimesetList:', error);
      // 에러 처리 로직 추가
    }
  };

  return (
    <div className='home-button'>
      <Link to='/'>
        <button>go to home</button>
      </Link>
      <div className="MyPage-container">
        <h1>My timesetList</h1>
        <button onClick={handleTimesetList}>리스트 불러오기</button>
        <div className="timesetList">
          {timesetList}
        </div>
      </div>
    </div>
  );
}

export default MyPage;
