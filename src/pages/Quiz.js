//QuizApp.js
import { questions } from "../components/Questionfile";
import { useState } from "react";
import "../styles/Quiz.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/Modal.css";

export default function QuizApp() {
    //문제 번호를 저장하는 상태변수
    const [qno, setQno] = useState(1);
    const [choice, setChoice] = useState();
    const [score, setScore] = useState(0);
    const [anserCount, setAnserCount] = useState(0);
    const [endQuiz, setEndQuiz] = useState(false);
    const [startQuiz, setStartQuiz] = useState(false);

    function handleStart(){
        setStartQuiz(true);
    }
    function handleNext(idx){
        //alert(choice);
        //정답체크
        console.log("idx :" + idx + "qno : " + qno);
        const isAnswer = questions[qno -1].answerOptions[idx].isCorrect;
        if(isAnswer){//정답인 경우
            setScore(score + 2);
            setAnserCount(anserCount + 1);
        }
        setQno(qno+1);
        if(qno === questions.length){ //마지막 문제인 경우  
            setEndQuiz(true);

        }
    }

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return(
      <div className="Container">
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                <Modal className="my-modal" show={show} onHide={handleClose} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>퀴즈 게임</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>시작하기를 눌러 시작하세요!</p>
                        <p>문제는 총 5문제로 한 문제당 2점, 총 10점입니다!</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        <div className="Phone">
        <div className="Display">
          {!startQuiz ? 
            (<h1 onClick={handleStart} className="start">시작하기</h1>)
            :
            (<div>
              {endQuiz ?
                  (<div className="QuizEnd">
                      <div className="EndS"><h1>퀴즈가 종료되었습니다.</h1></div>
                      <div className="Score"><h2>Your score : {score} / 10 </h2></div>
                  </div>)
                  :
                  (<div>
                      <div className="Q">
                          <h1>Q{qno}.{questions[qno-1].questionText}</h1>
                      </div>
                      <div className="A">
                          {questions[qno-1].answerOptions.map((ans, index) => (
                              <p className='Choice' onClick={()=>handleNext(index)}>{index + 1}. {ans.answerText}</p>
                          ))}
                      </div>
                  </div>)
              }
          </div>)
          }
        </div>
      </div>
      </div>
    );
}