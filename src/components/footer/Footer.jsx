import '../footer/Footer.css'
import count1 from '../../assets/count1.png'
import count2 from '../../assets/count2.png'
import count3 from '../../assets/count3.png'
import qrImg from '../../assets/qrcode.png'
import applogo from '../../assets/header-imgs/apple.png'
import tele from '../../assets/social-icons/tele.png'
import tweet from '../../assets/social-icons/tweet.png'
import discord from '../../assets/social-icons/discord.png'
import footerPhones from '../../assets/footerCar.svg'


function Footer() {
    return (
        <div className='footer'>
            <div className="last-txt">
                Check Your RC Details
                <br />
                with Car Finder 🚗
            </div>

            <div className="count-icons">
                <div className="count-items">
                    <img  src={count1} alt="" />
                    <div className='count-txt'>Download the App</div>
                </div>

                <div className="count-items">
                    <img  src={count2} alt="" />
                    <div className='count-txt'>Fill the car number</div>
                </div>

                <div className="count-items">
                    <img  src={count3} alt="" />
                    <div className='count-txt'>Get the full RC details </div>
                </div>

            </div>

            <img className='qrImg' src={qrImg} alt="" />

            <img className='applogo' src={applogo} alt="" />

            <div className="social-icons">
                <img src={tele} alt="" className="media-icons" />
                <img src={tweet} alt="" className="media-icons" />
                <img src={discord} alt="" className="media-icons" />
            </div>

            <img className='ft-phones' src={footerPhones} alt="" data-aos="fade" data-aos-duration="2000" data-aos-delay="300" />

            <footer>
                <div className="footer-wrap">
                <div className="grey">© 2023 People MayDiv, Inc. All Rights Reserved</div>

                <div className="grey-II">
                    <li>Privacy Policy</li>
                    <li>Terms of Service </li>
                    <li>ENS: 0xPlasma.eth</li>
                </div>

                <div className="last-grey">Find@Rcdetails.com</div>
                </div>
            </footer>

        </div>
    )
}

export default Footer