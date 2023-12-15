import React, { useState } from 'react';
import Gugudan from "../assets/gugudan.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const GugudanLogo = () => {


    return(
        <div>
            <img src={Gugudan} alt="gugudan logo" style={{width: 40, height: 40}}/>
        </div>
    );
}
export default GugudanLogo;