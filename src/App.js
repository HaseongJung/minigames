import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Tictactoe from './pages/Tictactoe';

// 메인 페이지
const Home = () => {
  return(
    <div style={{padding: 20}}>
      <h1>Home View</h1>
      <p>This page is Home view page.</p>
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
// 지뢰찾기 게임 페이지
const LottoPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>로또 추첨기</h1>
    </div>
  );
}
// 다른색깔 찾기 게임 페이지
const FindDifferentPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>다른색깔 찾기</h1>
      <p>This page is About view page.</p>
    </div>
  );
}
// 카드 짝 맞추기 게임 페이지
const CardPairPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>카드 짝 맞추기</h1>
      <p>This page is About view page.</p>
    </div>
  );
}
// 기억력 테스트 게임 페이지
const MemoryTestPage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>기억력 테스트</h1>
      <p>This page is About view page.</p>
    </div>
  );
}
// 2048 게임 페이지
const NumberPuzzlePage = () => {
  return(
    <div style={{padding: 20}}>
      <h1>2048</h1>
      <p>This page is About view page.</p>
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
        <NavLink to='/tictactoe' style={{padding: 5}}>틱택토</NavLink>{' '}
        <NavLink to='/lotto' style={{padding: 5}}>로또 추첨기</NavLink>{' '}
        <NavLink to='/findDifferent' style={{padding: 5}}>다른색깔 찾기</NavLink>{' '}
        <NavLink to='/cardPair' style={{padding: 5}}>카드 짝 맞추기</NavLink>{' '}
        <NavLink to='/memoryTest' style={{padding: 5}}>기억력 테스트</NavLink>{' '}
        <NavLink to='/numberPuzzle' style={{padding: 5}}>2048</NavLink>{' '}
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/lotto' element={<LottoPage/>} />
        <Route path='/tictactoe' element={<TictactoePage/>} />
        <Route path='/findDifferent' element={<FindDifferentPage/>} />
        <Route path='/cardPair' element={<CardPairPage/>} />
        <Route path='/memoryTest' element={<MemoryTestPage/>} />
      <Route path='/numberPuzzle' element={<NumberPuzzlePage/>} />
        <Route path='/*' element={<NoPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
