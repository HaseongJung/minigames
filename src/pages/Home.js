import '../styles/Home.css';
import baseball from '../assets/baseball.png';
import gugudan from '../assets/gugudan.png';
import Lotto from '../assets/lotto.png';
import RSP from '../assets/RSP.png';
import Tictactoe from '../assets/tictactoe.png';
import WordRelay from '../assets/W.png';
import OneToFifty from '../assets/OneToFifty.png';
import Quiz from '../assets/quiz.png';
import timer from '../assets/timer.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <div className="Choice">
          <table className='Home_table'>
            <tr className='Home_tr'>
              <td className='Home_td'><NavLink to='/numberBaseball'><img src={baseball} width='100' height='100' alt = 'baseball'/></NavLink></td>
              <td className='Home_td'><NavLink to='/gugudan'><img src={gugudan} width='100' height='100' alt='gugudan'/></NavLink></td>
              <td className='Home_td'><NavLink to='/lotto'><img src={Lotto} width='100' height='100' alt='Lotto'/></NavLink></td>
            </tr>
            <tr className='Home_tr'>
              <td className='Home_td'><NavLink tp='/RSP'><img src={RSP} width='100' height='100' alt='RSP'/></NavLink></td>
              <td className='Home_td'><NavLink to= '/oneToFIfty'><img src={OneToFifty} width='100' height='100' alt = 'OneToFifty'/></NavLink></td>
              <td className='Home_td'><NavLink to='/quiz'><img src={Quiz} width='100' height='100' alt = 'Quiz'/></NavLink></td>
            </tr>
            <tr className='Home_tr'>
              <td className='Home_td'><NavLink to='/tictactoe'><img src={Tictactoe} width='100' height='100' alt = 'Tictactoe'/></NavLink></td>
              <td className='Home_td'><NavLink to='/responseCheck'><img src={timer} width='100' height='100' alt = 'timer'/></NavLink></td>
              <td className='Home_td'><NavLink to='/wordRelay'><img src={WordRelay} width='100' height='100' alt = 'WordRelay'/></NavLink></td>
            </tr>
          </table>
      </div>
    </div>
  )
}

export default Home;