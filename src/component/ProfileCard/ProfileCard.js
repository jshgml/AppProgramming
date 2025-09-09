import React, { useState } from 'react';
import "./ProfileCard.css";

function ProfileCard(props) {
 // 좋아요 상태 관리
 const [likeCount, setLikeCount] = useState(0);
 
 // 좋아요 버튼 클릭 핸들러 
 const handleLike = () => {
   // 상태 업데이트 구현
   setLikeCount(likeCount => likeCount+1);
 }
 
 return (
   <div className="profile-card">
     <div className="box1">
       <div className="box1-1">
         <h1>{props.name[0]}</h1>
       </div>
       <div className="box1-2">
         <h2>{props.name}</h2>
         <h4>학번: {props.studentid}</h4>
         <h4>전공: {props.major}</h4>
       </div>
     </div>
     <div className="box2">
       <h3>안녕하세요! React 컴포넌트를 배우고 있는 {props.name}입니다.</h3>
     </div>
     <div className="box3">
        <button onClick={handleLike}>좋아요</button>
        <p>좋아요 {likeCount}개</p>
     </div>
   </div>
 );
}

function App() {
  return (
    <div className="App">
      <ProfileCard name="좌승희" studentid="2024108149" major="인공지능전공" />
    </div>
  )
}

export default App;