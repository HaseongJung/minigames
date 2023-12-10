import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import "../styles/SidebarMenu.css";

const SidebarMenu = () => {
  return(
    <>
      <Sidebar className='sidebar'>
        <Menu className='menu'
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <MenuItem className="menuItem" component={<Link to="/" />}>Home</MenuItem>
          <MenuItem className="menuItem" component={<Link to="/gugudan" />}>구구단</MenuItem>
          <MenuItem className="menuItem" component={<Link to="/wordRelay" />}>끝말잇기</MenuItem>
          <MenuItem className="menuItem" component={<Link to="/numberBaseball" />}>숫자야구</MenuItem>
          <MenuItem className="menuItem" component={<Link to="/responseCheck" />}>반응속도 체크</MenuItem>
          <MenuItem className="menuItem" component={<Link to="/RSP" />}>가위바위보</MenuItem>
          <MenuItem className="menuItem" component={<Link to="/lotto" />}>로또 추첨기</MenuItem>
          <MenuItem className="menuItem" component={<Link to="/oneToFifty" />}>1~50숫자 세기</MenuItem>
          <MenuItem className="menuItem" component={<Link to="/tictactoe" />}>틱택토</MenuItem>
        </Menu>
      </Sidebar>
  </>
    );
}

export default SidebarMenu;