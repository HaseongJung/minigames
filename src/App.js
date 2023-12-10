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

const Home = () => {
  return(
    <div style={{padding: 20}}>
      <h1>Home View</h1>
    </div>
  );
}
// 구구단 게임 페이지
const GugudanPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>구구단</h1>
      <Gugudan/>
    </div>
  );
}
// 끝말잇기 게임 페이지
const WordRelayPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>끝말잇기</h1>
      <WordRelay/>
    </div>
  );
}
// 숫자야구 게임 페이지
const NumberBaseballPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>숫자야구</h1>
      <NumberBaseball/>
    </div>
  );
}
// 반응속도 체크 게임 페이지
const ResponseCheckPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>반응속도 체크</h1>
      <BokseupResponseCheck/>
    </div>
  );
}
// 가위바위보 게임 페이지
const RSPPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>가위바위보</h1>
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
// 404 페이지
const NoPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>404 : Page Not Found</h1>
    </div>
  );
}

function App() {
  return (
    <div style={{width: "100px", display: "flex"}}>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home/>} />
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
    </div>
  );
}



export default App;
