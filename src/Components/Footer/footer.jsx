/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import logo from '../../assets/Asset 10@2x.png';
import logo2 from '../../assets/GHH 9@2x.png';
import insta from '../../assets/media/instagram.svg';
import facebook from '../../assets/media/facebook.svg';
import youtube from '../../assets/media/youtube.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <footer className="section-footer" id="Getinvolved">
            <div className="footer-head">
                <p className='get-involved'>Get Involved</p>
                <div className="media">
                    <img
                        data-aos="flip-right"
                        data-aos-duration="800"
                        data-aos-once = 'true'
                        src={insta}
                        alt="Instagram"
                        className="social-media insta"
                    />
                    <img
                        data-aos="flip-right"
                        data-aos-duration="800"
                        data-aos-once = 'true'
                        src={facebook}
                        alt="Facebook"
                        className="social-media facebook"
                    />
                    <img
                        data-aos="flip-right"
                        data-aos-duration="800"
                        data-aos-once = 'true'
                        src={youtube}
                        alt="YouTube"
                        className="social-media youtube"
                    />
                </div>
            </div>
            <div className="footer-body">
                <div className="log-icons">
                    <img src={logo2} alt="GHH Logo" onError={(e) => { e.target.src = logo; }} />
                </div>
                <div className="contact-details">
                    <div className="contact address">🚩Plot No: 2, Srilakshminagar Colony, Arasavilli, Srikakulam District - 532001</div>
                    <div className="contact number">📞7382745053</div>
                    <div className="contact email">📩gracehelpinghands.hema@gmail.com</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
