import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/SidebarMenu';
import Tictactoe from './pages/Tictactoe';
import OneToFifty from './pages/OneToFifty';
import Lotto from './pages/Lotto';
import RSP from './pages/RSP';
import BokseupResponseCheck from './pages/ResponseCheck';
import Gugudan from './pages/Gugudan';
import WordRelay from './pages/WordRelay';
import NumberBaseball from './pages/NumberBaseball';
import InitialPage from './pages/InitialPage';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizApp from './pages/Quiz';


//로딩 페이지
const Initial = () => {
  return(
    <div className="Container" >
      <InitialPage/>
    </div>
  );
}

// 메인 페이지
const HomePage = () => {
  return(
    <div className='Container'>
      <h1 className='GameName'>Home View</h1>
      <Home/>
    </div>
  );
}
// 구구단 게임 페이지
const GugudanPage = () => {
  return(
    <div className="Container" >
      <h1 className='GameName'>구구단</h1>
      <Gugudan/>
    </div>
  );
}
// 끝말잇기 게임 페이지
const WordRelayPage = () => {
  return(
    <div className="Container" >
      <h1 className='GameName'>끝말잇기</h1>
      <WordRelay/>
    </div>
  );
}
// 숫자야구 게임 페이지
const NumberBaseballPage = () => {
  return(
    <div className="Container">
      <h1 className='GameName'>숫자야구</h1>
      <NumberBaseball/>
    </div>
  );
}
// 반응속도 체크 게임 페이지
const ResponseCheckPage = () => {
  return(
    <div className="Container">
      <h1 className='GameName'>반응속도 체크</h1>
      <BokseupResponseCheck/>
    </div>
  );
}
// 가위바위보 게임 페이지
const RSPPage = () => {
  return(
    <div className="Container">
      <h1 className='GameName'>가위바위보</h1>
      <RSP/>
    </div>
  );
}
// 로또 추첨기 페이지
const LottoPage = () => {
  return(
    <div className="Container">
      <h1 className='GameName'>로또 추첨기</h1>
      <Lotto/>
    </div>
  );
}
// 1~50 숫자세기 게임 페이지
const OneToFiftyPage = () => {
  return(
    <div className="Container">
      <h1 className='GameName'>1~50 숫자세기</h1>
      <OneToFifty/>
    </div>
  );
}
// 퀴즈 게임 페이지
const QuizPage = () => {
  return(
    <div className="Container">
      <h1 className='GameName'>퀴즈</h1>
      <Quiz/>
    </div>
  );
}

// 틱택토 게임 페이지
const TictactoePage = () => {
  return(
    <div className="Container">
      <h1 className='GameName'>틱택토 (3목 게임, 2인용)</h1>
      <Tictactoe />
    </div>
  );
}

// 404 페이지
const NoPage = () => {
  return(
    <div className="Container">
      <h1>404 : Page Not Found</h1>
    </div>
  );
}

function App() {
  return (
    <div style={{display: "flex"}}>
      <Router>
        <Sidebar style={{width: "3000px"}}/>
          <Routes>
            <Route path='/' element={<Initial/>} />
            <Route path='/home' element={<HomePage/>} />
            <Route path='/gugudan' element={<GugudanPage/>} />
            <Route path='/wordRelay' element={<WordRelayPage/>} />
            <Route path='/numberBaseball' element={<NumberBaseballPage/>} />
            <Route path='/responseCheck' element={<ResponseCheckPage/>} />
            <Route path='/RSP' element={<RSPPage/>} />
            <Route path='/lotto' element={<LottoPage/>} />
            <Route path='/oneToFifty' element={<OneToFiftyPage/>} />
            <Route path='/tictactoe' element={<TictactoePage/>} />
            <Route path='/quiz' element={<Quiz/>} />
            <Route path='/*' element={<NoPage/>} />
          </Routes> 
      </Router>
    </div>
  );
}



export default App;
