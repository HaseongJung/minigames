import React, { useEffect, useState, useReducer, useCallback } from 'react';
import Table from '../components/Table';
import '../styles/Tictactoe.css';

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
      ['','',''],
      ['','',''],
      ['','','']
  ],
  recentCell: [-1, -1],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN'; 
export const RESET_GAME = 'RESET_GAME';

const reducer = (state, action) => {
  switch (action.type) {
      case SET_WINNER:
          return {
              ...state,
              winner: action.winner,
          };
      case CLICK_CELL:
          const tableData = [...state.tableData];
          tableData[action.row] = [...tableData[action.row]];
          tableData[action.row][action.cell] = state.turn;
          return {
              ...state,
              tableData, 
              recentCell: [action.row, action.cell],            
          };
      case CHANGE_TURN:
          return {
              ...state,
              turn: state.turn === 'O' ? 'X' : 'O',
          }
      case RESET_GAME: {
          return {
              ...state,
              turn: 'O',
              tableData: [
                  ['','',''],
                  ['','',''],
                  ['','','']
              ],
              recentCell: [-1, -1],
          };
      }
      default:
          return state;
  }
};

const Tictactoe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, turn, winner, recentCell } = state;
  const [records, setRecords] = useState([]);

  const onClickTable = useCallback(() => {    
      dispatch({ type: SET_WINNER, winner: 'O' })
  }, []);

  useEffect(() => {
      const [row, cell] = recentCell;
      if (row < 0) {
          return;
      }
      let win = false;
      if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
          win = true;
      }
      if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
          win = true;
      }
      if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
          win = true;
      }
      if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
          win = true;
      }
      if (win) { // 승리시
          dispatch({ type: SET_WINNER, winner: turn });
          setRecords(r => [...r, `${turn}님의 승리!`]);
          dispatch({ type: RESET_GAME });
      } else { 
          let all = true; 
          tableData.forEach((row) => {   
              row.forEach((cell) => {
                  if (!cell) {
                      all = false;
                  }
              });
          });
          if (all) {
              dispatch({ type: SET_WINNER, winner: "nobody" });
              setRecords(r => [...r, `무승부!`]);
              dispatch({ type: RESET_GAME });
          } else {
              dispatch({ type: CHANGE_TURN });
          }
      }
  }, [recentCell]);

  return(
      <div className='Tictactoe'>
        <div className='Tictactoe_Phone'>
            <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch} />
            {(winner==="nobody") ? <div><h2>무승부!</h2></div> : (winner==='') ? <div></div> : winner && <div><h2>{winner}님의 승리!</h2></div>}
        </div>
        <div className='Tictactoe_Score'>
                <div className='Tictactoe_Records'>
                <h2>⭐게임 스코어⭐</h2>
                    {records.map((record, index) => (
                    <p key={index} div className='Tictactoe_Result'> {index + 1} 번 게임: {record}</p>
                    ))}
                </div>
            </div>
      </div>
  );
};

export default Tictactoe;
