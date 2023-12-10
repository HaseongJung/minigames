import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Initial.css'; // CSS 파일을 import 합니다.

function InitialPage() {
  const content = "HELLO, MINIGAMEWORLD.";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < content.length) {
        setText(prevText => prevText + (content[index] === "" ? "<br/>" : content[index]));
        setIndex(prevIndex => prevIndex + 1);
      }

      if (index >= content.length) {
        clearInterval(interval); // 모든 글자를 출력한 후에는 interval을 clear합니다.
        setTimeout(() => {
           navigate('/home'); // '/main'은 이동하고자 하는 페이지 경로입니다.
        }, 3000); // 3000은 3초를 의미합니다.
      }
    }, 200);

    return () => clearInterval(interval); // 컴포넌트 unmount 시에 interval을 clear합니다.
  }, [index, content, navigate]);

  return (
    <div className="text_box" dangerouslySetInnerHTML={{__html: text}}></div>
  );
}

export default InitialPage;