/**
 * /* eslint-disable @next/next/no-img-element
 *
 * @format
 */

import React from "react";
// import { Element, Link } from 'react-scroll';
import { useAppDispatch, useAppSelector } from "../appStore/hooks";
import { openModal } from "../reduxSlices/allModalSlice";
import styles from "./compstyles/HeroSection.module.scss";
import BigJoinWaitList from "./Buttons/BigJoinWaitList";

const HeroSection = () => {
	const dispatch = useAppDispatch();
	const handleWaitlistModal = () => {
		dispatch(openModal("waitlistmodal"));
	};

	return (
		<div className="container">
			<div className={styles.hero_main}>
				<div className={styles.hero_texts}>
					<h1>Tokenized Assets Issuance and Exchange Protocol</h1>
					<p>
						Blockplot is a decentralized ecosystem for tokenized assets. A
						multi-jurisdiction protocol built for the protection of issuers,
						investors and other participants of the private market, with
						guaranteed on-chain compliance
					</p>
					<BigJoinWaitList />
				</div>
				<div className={styles.hero_images}>
					<img
						src="./landingpageasserts/feature_wallet.svg"
						alt="feature_wallet"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
