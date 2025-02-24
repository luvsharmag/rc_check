import './Mainsecond.css'
import phimg from '../../assets/Rc.svg'
import check from '../../assets/ownerInfo.svg'
import skull from '../../assets/whatRTO.svg'


function Mainsecond() {
    return (
        <div className='container'>
            <div className='personality'>

                <div className="p-txt">
                    RC Details
                    <br />
                    are important
                </div>

                <div className="psmall-txt">
                    Share your app experience
                </div>
            </div>

            <div className="img-wrap">
                <img src={phimg} alt="" data-aos="fade" data-aos-duration="4000" data-aos-delay="300" />
            </div>

            <div className="privacy">

                <div className="blacktxt">
                    <div className="circleImg">
                        <img src={check} alt="" />
                    </div>

                    <div className="pvctxt">
                        Vehicle Owner Info
                    </div>

                    <div className="pvt">
                        The Owner can collect data from
                        <br />
                        this app
                    </div>
                </div>

                <div className="alltxt">
                    <div className="pmtxt">
                        What are
                        <br />
                        RC Details?
                    </div>

                    <div className="white-txt" style={{ textAlign: "justify" }}>
                        By "RC details" the information about a vehicle could be
                        <br />
                        referred to, which is present in the Registration Certificate
                        <br />
                        of the vehicle. RC is an important document which
                        <br />
                        provides the proof of ownership and registration.
                    </div>
                </div>

            </div>

            <div className="skull">

                <div className="skull-txt">
                    <div className="skgrdnt">
                        Why do
                        <br />
                        we need to
                        <br />
                        check RC
                        <br />
                        Status Online?
                    </div>

                    <div className="sk-desc">
                        Checking the vehicle's RC (Registration Certificate)
                        <br />
                        is an important check to ensure legality and compliance
                        <br />
                        with various aspects of vehicle ownership and operation.
                    </div>
                </div>

                <div className="skull-img">
                    <img src={skull} alt="" data-aos="fade" data-aos-duration="2000" data-aos-delay="300" />
                </div>

            </div>

        </div>
    )
}

export default Mainsecond