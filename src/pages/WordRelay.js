import React, {useState} from 'react';
import '../styles/WordRelay.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/Modal.css";


const WordRelay = () => {
  const [word, setWord] = useState('밍주');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = React.useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕🎵🎶');
      setWord(value);
      setValue('');
      inputEl.current.focus();
    } else {
      setResult('❌땡❌');
      setValue('');
      inputEl.current.focus();
    }
  };

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);


  return (
    <div className='Container'>
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
    <Modal className="my-modal" show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>끝말잇기 게임</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>제시어를 보고 끝말잇기를 시작하세요!</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
            </div>
    <div className='WordRelay_Phone'>
      <div className='WordRelay_Display'>
        <div className='WordGame'>
          <h3>제시어: {word}</h3>
            <form onSubmit={onSubmitForm} className='Word_Form'>
              <input
                ref={inputEl}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
              />
              <button className='Word_Form_btn'>입력!</button>
            </form>
            <div className='WordRelay_Result'>{result}</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WordRelay;