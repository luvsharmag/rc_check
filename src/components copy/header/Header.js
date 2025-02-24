import React from 'react';
import './Header.css';

//import phonoImage from '../../assets/header-imgs/download 1.png'
import wallImg from '../../assets/header-imgs/Group 38.png'
import wallet from '../../assets/header-imgs/Group 39.png'


function Header() {
  return (
    <>
      
    <div className="ph-container">

      

      <div className="main-img">

      <div className="wall">
        <img src={wallImg} alt="" />
      </div>

        <div className="wallet-img">
        <img src={wallet} alt="" />

        </div>
      </div>

    </div>
    </>

  )
}

export default Header;