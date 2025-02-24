import React from 'react'
import './Maincontent.css';
import phoneImg from '../../assets/header-imgs/Rectangle.png'
import go from '../../assets/go.png'
import go1 from '../../assets/goicons/Ellipse 1.png'
import go2 from '../../assets/goicons/Ellipse 2.png'
import go3 from '../../assets/goicons/Ellipse 3.png'
import go4 from '../../assets/goicons/Ellipse 4.png'
import go5 from '../../assets/goicons/Ellipse 5.png'
import go6 from '../../assets/goicons/Ellipse 6.png'
import go7 from '../../assets/goicons/Ellipse 7.png'
import go8 from '../../assets/goicons/Ellipse 8.png'

import ph2 from '../../assets/ph2.png'


function Maincontent() {
    return (
        <div className='container'>
        
            <div className='txt-container'>
                <div  className='txtmain-container'>
                    <div className="txt-con"  data-aos="fade"  data-aos-duration="4000"   data-aos-delay="300" >
                        Self-Custody
                        <br />
                        Crypto Wallet
                        <br />
                        For DeFi, NFT
                        <br />
                        & Metaverse

                    </div>
                    
                </div>
            </div>

            <div className="ph-txt">
                <div className="phone-txt">

                    <div className="inner-txt" data-aos="fade"  data-aos-duration="4000"   data-aos-delay="300">
                        Store, Send,
                        <br />
                        Receive and Trade
                        <br />
                        over 10,000 crypto
                        <br />
                        assets and NFTs
                    </div>                                           
    
                </div>

                <div className="phonImg" data-aos="fade"  data-aos-duration="5000"   data-aos-delay="1000">
                    <img src={phoneImg} alt="imhg" />
                </div>

            </div>


            <div className="parent-chain">

                <div className="go-img" data-aos="fade"  data-aos-duration="4000"   data-aos-delay="300">
                    <img src={go} alt="" />
                </div>

                <div className="go-txt" data-aos="fade"  data-aos-duration="4000"   data-aos-delay="600">
                    Unlimited support of all EVM Chains with the fastest RPC
                </div>

                <div className="go-icons" data-aos="fade"  data-aos-duration="4000"   data-aos-delay="600">
                    <img src={go1} alt="" />
                    <img src={go2} alt="" />
                    <img src={go3} alt="" />
                    <img src={go4} alt="" />
                    <img src={go5} alt="" />
                    <img src={go6} alt="" />
                    <img src={go7} alt="" />
                    <img src={go8} alt="" />
                </div>

            </div>

            <div className="ph2 ">

                <img src={ph2} alt="" data-aos="fade"  data-aos-duration="5000"   data-aos-delay="1000" />

                <div className="ph2txt-cntnr" data-aos="fade"  data-aos-duration="4000"   data-aos-delay="300" >

                    <div className="ph2txt">
                        Get
                        <br />
                        Access
                        <br />
                        to 1000s
                        <br />
                        dApps
                    </div>


                    <div className="wite">
                        Explore the list of 1000s dApps or 
                        <br />
                        connect Web3 App with a 
                        <br />
                        WalletConnect protocol 

                    </div>


                </div>

            </div>

            <div className="ph2">
                <div  className="ph2txt-cntnr" data-aos="fade"  data-aos-duration="4000"   data-aos-delay="300">
                    <div className="ph2txt ">
                        All
                        <br />
                        DEXes
                        <br />
                        in your
                        <br />
                        pocket
                    </div>


                    <div className="wite">
                        HyperDEX aggregator provides the
                        <br />
                        best rates and the deepest liquidity
                        <br />
                        for more than 10,000 crypto assets
                    </div>


                </div>

                <img src={ph2} alt=""data-aos="fade"  data-aos-duration="5000"   data-aos-delay="1000" />

            </div>

            <div className="ph2">

                <img src={ph2} alt="" data-aos="fade"  data-aos-duration="5000"   data-aos-delay="1000" />

                <div className="ph2-cont mt-2" data-aos="fade"  data-aos-duration="4000"   data-aos-delay="300">

                    <div className="ph2txt">
                        NFT
                        <br />
                        Metaverse
                        <br />
                        in one app
                        <br />
                    </div>

                    <div className="wite">
                        EBuy, Sell and Store your NFTs
                        <br />
                        and collections in one place

                    </div>
                </div>

            </div>

        </div>


    )
}

export default Maincontent