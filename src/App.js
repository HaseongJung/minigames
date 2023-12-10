import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Tictactoe from './pages/Tictactoe';
import OneToFifty from './pages/OneToFifty';
import Lotto from './pages/Lotto';
import RSP from './pages/RSP';
import BokseupResponseCheck from './pages/ResponseCheck';
import Gugudan from './pages/Gugudan';
import WordRelay from './pages/WordRelay';
import NumberBaseball from './pages/NumberBaseball';
import InitialPage from './pages/InitialPage';

// 메인 페이지
const Home = () => {
  return(
    <div style={{padding: 20}}>
      <h1>Home View</h1>
      <p>This page is Home view page.</p>
    </div>
  );
}
// 구구단 게임 페이지
const GugudanPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>구구단</h1>
      <p>This page is About view page.</p>
      <Gugudan/>
    </div>
  );
}
// 끝말잇기 게임 페이지
const WordRelayPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>끝말잇기</h1>
      <p>This page is About view page.</p>
      <WordRelay/>
    </div>
  );
}
// 숫자야구 게임 페이지
const NumberBaseballPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>숫자야구</h1>
      <p>This page is About view page.</p>
      <NumberBaseball/>
    </div>
  );
}
// 반응속도 체크 게임 페이지
const ResponseCheckPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>반응속도 체크</h1>
      <p>This page is About view page.</p>
      <BokseupResponseCheck/>
    </div>
  );
}
// 가위바위보 게임 페이지
const RSPPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>가위바위보</h1>
      <p>This page is About view page.</p>
      <RSP/>
    </div>
  );
}
// 로또 추첨기 페이지
const LottoPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>로또 추첨기</h1>
      <Lotto/>
    </div>
  );
}
// 1~50 숫자세기 게임 페이지
const OneToFiftyPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>1~50 숫자세기</h1>
      <p>This page is About view page.</p>
      <OneToFifty/>
    </div>
  );
}
// 틱택토 게임 페이지
const TictactoePage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>틱택토 (3목 게임, 2인용)</h1>
      <Tictactoe />
    </div>
  );
}
//로딩 페이지
const Initial = () => {
  return(
    <div style={{padding: 20}}>
      <InitialPage/>
    </div>
  );
}
// 404 페이지
const NoPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>404 : Page Not Found</h1>
      <p>This page is not exist.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{padding: 10}}>
        <NavLink to='/' style={{padding: 5}}>Home</NavLink>{' '}
        <NavLink to='/gugudan' style={{padding: 5}}>구구단</NavLink>{' '}
        <NavLink to='/wordRelay' style={{padding: 5}}>끝말잇기</NavLink>{' '}
        <NavLink to='/numberBaseball' style={{padding: 5}}>숫자야구</NavLink>{' '}
        <NavLink to='/responseCheck' style={{padding: 5}}>반응속도 체크</NavLink>{' '}
        <NavLink to='/RSP' style={{padding: 5}}>가위바위보</NavLink>{' '}
        <NavLink to='/lotto' style={{padding: 5}}>로또추첨기</NavLink>{' '}
        <NavLink to='/oneToFifty' style={{padding: 5}}>1~50 숫자체크</NavLink>{' '}
        <NavLink to='/tictactoe' style={{padding: 5}}>틱택토</NavLink>{' '}
  
        
      </nav>
      <Routes>
        <Route path='/' element={<Initial/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/gugudan' element={<GugudanPage/>} />
        <Route path='/wordRelay' element={<WordRelayPage/>} />
        <Route path='/numberBaseball' element={<NumberBaseballPage/>} />
        <Route path='/responseCheck' element={<ResponseCheckPage/>} />
        <Route path='/RSP' element={<RSPPage/>} />
        <Route path='/lotto' element={<LottoPage/>} />
        <Route path='/oneToFifty' element={<OneToFiftyPage/>} />
        <Route path='/tictactoe' element={<TictactoePage/>} />
        <Route path='/*' element={<NoPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
