//QuizApp.js
import { questions } from "../components/questionfile";
import { useState } from "react";
import "../styles/Quiz.css";

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
            alert("당신의 점수는 " + score + "점 입니다.");
        }
    }
    return(
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
    );
}