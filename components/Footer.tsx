import React from 'react';
// import { Element, Link } from 'react-scroll';
import styles from './compstyles/Footer.module.css';
import Playstore from './Buttons/Playstore';
import Applestore from './Buttons/Apple';
import Link from "next/link";

const Footer = () => {
    return (
			<div className={styles.footer_div} data-scroll-section>
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
						<Link
							href="https://twitter.com/blockplot"
							target="_blank"
							rel="noopener noreferrer">
							<p>Twitter</p>
						</Link>
						<Link
							href="https://www.linkedin.com/company/blockplot/"
							target="_blank"
							rel="noopener noreferrer">
							<p>Linkedin</p>
						</Link>
						<p>Youtube</p>
						<Link
							href="https://medium.com/@blockplot"
							target="_blank"
							rel="noopener noreferrer">
							<p>Medium</p>
						</Link>
						<Link
							href="https://www.instagram.com/blockplot/"
							target="_blank"
							rel="noopener noreferrer">
							<p>Instagram</p>
						</Link>
						<Link
							href="https://www.reddit.com/r/Blockplotfinance/"
							target="_blank"
							rel="noopener noreferrer">
							<p>Reddit</p>
						</Link>
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
						<Link
							href="https://twitter.com/blockplot"
							target="_blank"
							rel="noopener noreferrer">
							<img src="./landingpageasserts/twitter.svg" alt="twitter" />
						</Link>
						<Link
							href="https://www.linkedin.com/company/blockplot/"
							target="_blank"
							rel="noopener noreferrer">
							<img src="./landingpageasserts/linkedin.svg" alt="linkedin" />
						</Link>
						<Link
							href="https://www.instagram.com/blockplot/"
							target="_blank"
							rel="noopener noreferrer">
							<img src="./landingpageasserts/instagram.svg" alt="instagram" />
						</Link>
						<img src="./landingpageasserts/medium.svg" alt="medium" />
						<img src="./landingpageasserts/Youtube.svg" alt="Youtube" />
					</div>
				</div>
			</div>
		);
};

export default Footer;
