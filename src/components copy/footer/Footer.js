import React from 'react';
import '../footer/Footer.css'
import count1 from '../../assets/count1.png'
import count2 from '../../assets/count2.png'
import count3 from '../../assets/count3.png'
import qrImg from '../../assets/qrcode.png'
import applogo from '../../assets/header-imgs/apple.png'
import tele from '../../assets/social-icons/tele.png'
import tweet from '../../assets/social-icons/tweet.png'
import discord from '../../assets/social-icons/discord.png'
import footerPhones from '../../assets/footerPhones.png'


function Footer() {
    return (
        <div className='footer'>
            <div className="last-txt">
                Begin your Crypto 🪐 Journey
                <br />
                with Plasma Wallet
            </div>

            <div className="count-icons">
                <div className="count-items">
                    <img  src={count1} alt="" />
                    <div className='count-txt'>Download the App</div>
                </div>

                <div className="count-items">
                    <img  src={count2} alt="" />
                    <div className='count-txt'>Top up your Wallet</div>
                </div>

                <div className="count-items">
                    <img  src={count3} alt="" />
                    <div className='count-txt'>Swap and Earn Crypto</div>
                </div>

            </div>

            <img className='qrImg' src={qrImg} alt="" />

            <img className='applogo' src={applogo} alt="" />

            <div className="social-icons">
                <img src={tele} alt="" className="media-icons" />
                <img src={tweet} alt="" className="media-icons" />
                <img src={discord} alt="" className="media-icons" />
            </div>

            <img className='ft-phones' src={footerPhones} alt="" />

            <footer>
                <div className="footer-wrap">
                <div className="grey">© 2023 People Metaversity, Inc. All Rights Reserved</div>

                <div className="grey-II">
                    <li>Privacy Policy</li>
                    <li>Terms of Service </li>
                    <li>ENS: 0xPlasma.eth</li>
                </div>

                <div className="last-grey">Hello@wallet.com</div>
                </div>
            </footer>

        </div>
    )
}

export default Footer