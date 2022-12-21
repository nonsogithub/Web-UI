import React from 'react';
// import { Element, Link } from 'react-scroll';
import styles from './compstyles/Footer.module.css';
import Playstore from './Buttons/Playstore';
import Applestore from './Buttons/Apple';

const Footer = () => {
    return (
        <div className={styles.footer_div}>
            <div className={styles.footer_logotext}>
                <h3>Blockplot</h3>
                <div />
            </div>
            <div className={styles.footer_links}>
                <div className={styles.footer_links_div}>
                    <h3>About Us</h3>
                    <p>Company</p>
                    <p>Why blockplot</p>
                    <p>Terms</p>
                    <p>Privacy policy</p>
                </div>
                <div className={styles.footer_links_div}>
                    <h3>Services</h3>
                    <p>Buy assets</p>
                    <p>Sell assets</p>
                    <p>Buy Crypto</p>
                    <p>Swap</p>
                </div>
                <div className={styles.footer_links_div}>
                    <h3>Support</h3>
                    <p>Help</p>
                    <p>Community</p>
                    <p>Guide</p>
                </div>

                <div className={styles.footer_links_div}>
                    <h3>Contact</h3>
                    <p>+2349073426535</p>
                    <p>help@blockplot.com</p>
                    <p>blockplot@gmail.com</p>
                </div>
                <div className={styles.footer_links_div}>
                    <h3>Follow</h3>
                    <p>Twitter</p>
                    <p>Linkedin</p>
                    <p>Youtube</p>
                    <p>Medium</p>
                    <p>Instagram</p>
                    <p>Reddit</p>
                </div>
            </div>
            <div className={styles.footer_download}>
                <h2>Available on web and also on</h2>
                <div className={styles.footer_download_btns}>
                    <Playstore />
                    <Applestore />
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <p>
                    All Rights Reserved <span> &#169; 2022 Blockplot</span>
                </p>
                <div className={styles.footer_img}>
                    <img src="./landingpageasserts/discord.svg" alt="discord" />
                    <img src="./landingpageasserts/twitter.svg" alt="twitter" />
                    <img
                        src="./landingpageasserts/linkedin.svg"
                        alt="linkedin"
                    />
                    <img
                        src="./landingpageasserts/instagram.svg"
                        alt="instagram"
                    />
                    <img src="./landingpageasserts/medium.svg" alt="medium" />
                    <img src="./landingpageasserts/Youtube.svg" alt="Youtube" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
