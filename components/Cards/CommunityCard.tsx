/** @format */

import React from "react";
import styles from "./CardsStyles/CommunityCard.module.scss";

const CommunityCard = () => {
	return (
		<div className={styles.community_card}>
			<div className={styles.community_card__images_one}>
				<div className={styles.community_card__image}>
					<p>Twitter</p>
					<img src="./socials/twitter.svg" alt="phone" />
				</div>
				<div className={styles.community_card__image}>
					<p>Reddit</p>
					<img src="./socials/reddit.svg" alt="phone" />
				</div>
				<div className={styles.community_card__image}>
					<p>Instagram</p>
					<img src="./socials/Instagram.svg" alt="phone" />
				</div>
				<div className={styles.community_card__image}>
					<p>Linkedin</p>
					<img src="./socials/linkedin.svg" alt="phone" />
				</div>
				<div className={styles.community_card__image}>
					<p>Youtube</p>
					<img src="./socials/youtube.svg" alt="phone" />
				</div>
			</div>
			<div className={styles.community_card__images_two}>
				<div className={styles.community_card__image}>
					<p>Telegram</p>
					<img src="./socials/telegram.svg" alt="phone" />
				</div>
				<div className={styles.community_card__image}>
					<p>Medium</p>
					<img src="./socials/medium.svg" alt="phone" />
				</div>
			</div>
		</div>
	);
};

export default CommunityCard;
