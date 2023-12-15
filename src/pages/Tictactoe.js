// Tictactoe.js
import React, { useEffect, useState, useReducer, useCallback } from 'react';
import Table from '../components/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
            tableData[action.row] = [...tableData[action.row]]; // immer라는 라이브러리로 가독성 해결 가능
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
            dispatch({ type: RESET_GAME });
        } else { 
            let all = true; // all이 true면 무승부라는 뜻
            tableData.forEach((row) => {   // 무승부 검사
                row.forEach((cell) => {
                    if (!cell) {
                        all = false;
                    }
                });
            });
            if (all) {
                dispatch({ type: SET_WINNER, winner: "nobody" });
                dispatch({ type: RESET_GAME });
            } else {
                dispatch({ type: CHANGE_TURN });
            }
        }
    }, [recentCell]);

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return(
        <div className='container'>
            <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                <Modal className="my-modal" show={show} onHide={handleClose} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>틱택토 게임 (3목)</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>오목과 아주 유사한 형태인 추상전략 보드 게임입니다. 3목이라고도 합니다.</p>
                        <p>가로 세로 대각선 중 어느 한 방향으로라도 먼저 3개가 이어지게 만들면 승리합니다!</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className='Tictactoe_Phone'>
            
                    <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch} />
                    {(winner==="nobody") ? <div><h2>무승부!</h2></div> : (winner==='') ? <div></div> : winner && <div><h2>{winner}님의 승리!</h2></div>}
                
            </div>
        </div>
    );
};

export default Tictactoe