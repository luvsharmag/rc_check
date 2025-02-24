import React from 'react';
import aplogo from '../../assets/header-imgs/apple.png';
import './Navbar.css'

function Navbar() {
    return (
        <>
        <nav>
            <div className='container'>
                <div className="main-menu">
                    <div className='head-txt'>
                        Plasma wallet
                    </div>

                    <div className='aplogo'>
                        <img src={aplogo} alt="img" />
                    </div>
                </div>

            </div>
            </nav>
        </>
    )
}

export default Navbar