import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Initial.css'; // CSS 파일을 import 합니다.

function InitialPage() {
  const content = "HELLO,\nMINI GAME WORLD!";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < content.length) {
        setText(prevText => prevText + (content[index] === "\n" ? "<br/>" : content[index]));
        setIndex(prevIndex => prevIndex + 1);
      }

      if (index >= content.length) {
        clearInterval(interval);
        setTimeout(() => {
          navigate('/home');
        }, 3000);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [index, content, navigate]);

  return (
    <div className='bg'>
      <div className="text_box" dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  );
}

export default InitialPage;
