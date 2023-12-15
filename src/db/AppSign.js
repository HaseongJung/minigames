import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebaseinit";

//AppSign.js
export default function AppSign() {
  //로그인 사용자 정보를 저장하는 상태변수
  const [userData, setUserData] = useState(null);
  function handleLogin() {
    //로그인 처리하고 결과를 userData에 저장
    const provider = new GoogleAuthProvider();
    //구글 계정으로 로그인 할 수 있는 창 띄워줌
    signInWithPopup(auth, provider) 
    .then((data) => {  //성공적으로 끝난 경우
      setUserData(data.user);
    })
    .catch((err) => console.log(err));  //실패한 경우
  } 
  return(
    <div>
      <button onClick={handleLogin}>Google Login</button>
      {userData ? userData.displayName : null}
    </div>
  )
}