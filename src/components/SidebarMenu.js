import { Sidebar, Menu, MenuItem,  } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../styles/SidebarMenu.css";
import ToggleLogo from './ToggleLogo';
import HomeIcon from '@mui/icons-material/Home';
import GugudanLogo from './GugudanLogo';
import WordRelayLogo from './WordRelayLogo';
import NumberBaseballLogo from './NumberBaseballLogo';
import ResponseCheckLogo from './ResponseCheckLogo';
import RSPLogo from './RSPLogo';
import LottoLogo from './LottoLogo';
import OneToFiftyLogo from './OneToFiftyLogo';
import TictactoeLogo from './TictactoeLogo';

const SidebarMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selected, setSelected] = useState('home');

  return(
    <>
      <Sidebar className='sidebar' collapsed={collapsed} backgroundColor='#FFE7E7'>
        <Menu className='menu'
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  // color: disabled ? "#eee" : "#455A64",
                  backgroundColor: active ? "#FFC9C9" : undefined,
                  borderRadius: active ? "8px !important": undefined,
                  height: "100%",
                  "&:hover": {
                     backgroundColor: "#FFC9C9 !important",
                     color: "white !important",
                     borderRadius: "8px !important",
                     fontWeight: "bold !important",
                   },
                };
              }
            },
          }}
        >
          <MenuItem className="menuItem" icon=<ToggleLogo/> onClick={() => setCollapsed(!collapsed)}></MenuItem><br/><br/>
          <MenuItem className="menuItem" icon={<HomeIcon style={{width: 40, height: 40}}/>} active={selected === "home"} onClick={()=>setSelected("home")} component={<Link to="/home" />}> {"Home"}</MenuItem>
          <MenuItem className="menuItem" icon=<GugudanLogo/> active={selected === "gugudan"} onClick={()=>setSelected("gugudan")} component={<Link to="/gugudan" />}> {"구구단"}<Link to="/gugudan" /></MenuItem>
          <MenuItem className="menuItem" icon=<WordRelayLogo/> active={selected === "wordRelay"} onClick={()=>setSelected("wordRelay")} component={<Link to="/wordRelay" />}> 끝말잇기</MenuItem>
          <MenuItem className="menuItem" icon=<NumberBaseballLogo/> active={selected === "numberBaseball"} onClick={()=>setSelected("numberBaseball")} component={<Link to="/numberBaseball" />}> 숫자야구</MenuItem>
          <MenuItem className="menuItem" icon=<ResponseCheckLogo/> active={selected === "responseCheck"} onClick={()=>setSelected("responseCheck")} component={<Link to="/responseCheck" />}> 반응속도 체크</MenuItem>
          <MenuItem className="menuItem" icon=<RSPLogo/> active={selected === "RSP"} onClick={()=>setSelected("RSP")} component={<Link to="/RSP" />}> 가위바위보</MenuItem>
          <MenuItem className="menuItem" icon=<LottoLogo/> active={selected === "lotto"} onClick={()=>setSelected("lotto")} component={<Link to="/lotto" />}> 로또 추첨기</MenuItem>
          <MenuItem className="menuItem" icon=<OneToFiftyLogo/> active={selected === "oneToFifty"} onClick={()=>setSelected("oneToFifty")} component={<Link to="/oneToFifty" />}> 1~50숫자 세기</MenuItem>
          <MenuItem className="menuItem" icon=<TictactoeLogo/> active={selected === "tictactoe"} onClick={()=>setSelected("tictactoe")} component={<Link to="/tictactoe" />}> 틱택토</MenuItem>
        </Menu>
      </Sidebar>
  </>
    );
}

export default SidebarMenu;