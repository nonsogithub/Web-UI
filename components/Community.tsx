/** @format */

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
	BsTwitter,
	BsLinkedin,
	BsMedium,
	BsTelegram,
	BsYoutube,
} from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import styles from "./compstyles/Community.module.css";

const Community = () => {
	return (
		<div className="gaga_online">
			<div className="container">
				<div className={styles.community_div}>
					<div className={styles.community_header}>
						<h3>Community</h3>
						<p>
							Join our vast community across different social media platform
						</p>
					</div>
					<div className={styles.community_socialhandles}>
						<div className={styles.socialmedia_handles}>
							<div className={styles.socialmedia_header}>
								<div className={styles.socialmedia_logo}>
									<BsTwitter color="03A9F4" size={30} />
									<p>Twitter</p>
								</div>
								<Link
									href="https://twitter.com/blockplot"
									target="_blank"
									rel="noopener noreferrer">
									<button type="button">Join</button>
								</Link>
							</div>
							<h3 className={styles.socialmedia_body}>
								Join our twitter community and stay updated always
							</h3>
						</div>
						<div className={styles.socialmedia_handles}>
							<div className={styles.socialmedia_header}>
								<div className={styles.socialmedia_logo}>
									<FaRedditAlien color="E23C0A" size={30} />
									<p>Reddit</p>
								</div>
								<Link
									href="https://www.reddit.com/r/Blockplotfinance/"
									target="_blank"
									rel="noopener noreferrer">
									<button type="button">Join</button>
								</Link>
							</div>
							<h3 className={styles.socialmedia_body}>
								Join our reddit community and stay updated always
							</h3>
						</div>
						<div className={styles.socialmedia_handles}>
							<div className={styles.socialmedia_header}>
								<div className={styles.socialmedia_logo}>
									<BsLinkedin color="0B86CA" size={30} />
									<p>Linkedin</p>
								</div>
								<Link
									href="https://www.linkedin.com/company/blockplot/"
									target="_blank"
									rel="noopener noreferrer">
									<button type="button">Join</button>
								</Link>
							</div>
							<h3 className={styles.socialmedia_body}>
								Join our linkedin community and stay updated always
							</h3>
						</div>
						<div className={styles.socialmedia_handles}>
							<div className={styles.socialmedia_header}>
								<div className={styles.socialmedia_logo}>
									<GrInstagram color="F44336" size={30} />
									<p>Instagram</p>
								</div>
								<Link
									href="https://www.instagram.com/blockplot/"
									target="_blank"
									rel="noopener noreferrer">
									<button type="button">Join</button>
								</Link>
							</div>
							<h3 className={styles.socialmedia_body}>
								Join our instagram community and stay updated always
							</h3>
						</div>
						<div className={styles.socialmedia_handles}>
							<div className={styles.socialmedia_header}>
								<div className={styles.socialmedia_logo}>
									<BsMedium size={30} />
									<p>Medium</p>
								</div>
								<Link
									href="https://medium.com/@blockplot"
									target="_blank"
									rel="noopener noreferrer">
									<button type="button">Join</button>
								</Link>
							</div>
							<h3 className={styles.socialmedia_body}>
								Join our medium community and stay updated always
							</h3>
						</div>
						<div className={styles.socialmedia_handles}>
							<div className={styles.socialmedia_header}>
								<div className={styles.socialmedia_logo}>
									<BsTelegram color="0B86CA" size={30} />
									<p>Telegram</p>
								</div>
								<button type="button">Join</button>
							</div>
							<h3 className={styles.socialmedia_body}>
								Join our telegram community and stay updated always
							</h3>
						</div>
						<div className={styles.socialmedia_handles}>
							<div className={styles.socialmedia_header}>
								<div className={styles.socialmedia_logo}>
									<BsYoutube color="F44336" size={30} />
									<p>Youtube</p>
								</div>
								<button type="button">Join</button>
							</div>
							<h3 className={styles.socialmedia_body}>
								Join our youtube community and stay updated always
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Community;
