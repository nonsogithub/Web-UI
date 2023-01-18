/** @format */

import React from "react";
import styles from "./compstyles/FasterTransactions.module.css";
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
} from "react-headless-accordion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Playstore from "./Buttons/Playstore";
import Applestore from "./Buttons/Apple";

const FasterTransactions = () => {
	const data = [
		{
			title: "What is Blockplot?",
			content:
				"Blockplot is an SPV platform that tokenizes real estate assets. You can become an asset owner by purchasing the fractions of the asset on our platform and receive returns like you owned real world, yield producing real estate assets.",
		},
		{
			title: "How does tokenizing an asset work?",
			content:
				"Each property is vetted for legitimacy, before being tokenized on our platform. Blockplot will act as the facilitator of transferring equity from the property’s owning company to a new owner, the token holders. The equities will then be split into the tokens on the Blockchain. These tokens will solely represent the amount of ownership you have, which in essence gives you ownership of the real estate asset.",
		},
		{
			title: "What form of currency can I use to purchase tokenized assets?",
			content:
				"Blockplot allow users to purchase assets with Stablecoins that follow the ERC20 standards. $DAI & $BUSD.",
		},
		{
			title: "How can I cash out my Tokenized Assets?",
			content:
				"Blockplot have built a decentralized exchange where tokens can be traded on easily. Liquidity will be provided by liquidity providers and the pools will utilize a constant product Automatic Market Maker to ensure liquidity is always available on the exchange.",
		},
		{
			title: "How often is rent paid out?",
			content: "Rent is paid out monthly to token holders.",
		},
		{
			title: "Who can participate?",
			content:
				"Anyone can participate globally, just fill out your basic information, perform a KYC and start owning. Ownership of tokens makes you a partner as a retail investor.",
		},
		{
			title: "What are the KYC requirements?",
			content:
				"We ask that you provide us with your full name, a visible picture of your government-issued ID, and the ID number.",
		},
		{
			title:
				"What is the maximum number of tokens I can purchase in each property?",
			content:
				"For each property, the maximum number of tokens each investor can own is 10%. This limit is in place for Governance reasons to ensure a fair voting system. This can be changed in the future.",
		},
		{
			title: "Can I invest under an Entity like an LLC?",
			content: "Not at this time, though we may support this in the future.",
		},
		{
			title:
				"How does Blockplot ensure a smooth selling experience during extreme market conditions?",
			content:
				"Our tokens are backed by real world assets, i.e. the physical properties. Therefore, there would never be an insolvency issue. Liquidity providers will also be available to bolster the pools to ensure liquidity is always available to users who want to swap their tokens. However, we will be using a portion of our operating cash to provide liquidity for users who may need liquidity on short notice, in case there is shortage of liquidity in the pools and arbitragers haven’t capitalized on the price imbalance. The tokens are then re-sold to new users on the marketplace, replenishing this liquidity pool. If sell-backs might exceed the normal liquidity pool, a queue system will be implemented. It will be operated on a first-come-first-out basis. As tokens that are purchased back from this queue are re-sold successfully on the marketplace, the replenished funds will be used to purchase more sell-backs from users further down in the queue until the queue ends, or until sell-back requests return to the normal operating baseline.",
		},
		{
			title: "How can I track the performance of my property?",
			content: "All owners have their dashboard, called Assets Overview, where you can see how many tokens you hold and their current principal value, which will adjust automatically each quarter starting after the token offering is complete. You will be able to see income added to your account along with records of historical transactions.",
		},
	];
	return (
		<div className={styles.faster_transactions}>
			<div className="container">
				<div className={styles.faster_transactions_faq}>
					<h1 className={styles.faster_transactions_faq_title}>
						Frequently Asked Questions
					</h1>
					<div>
						<Accordion className={styles.accordion_width}>
							{data.map((item, index) => (
								<AccordionItem key={index}>
									{({ open }: any) => (
										<>
											<AccordionHeader className={styles.accordion_header}>
												<h3>{item.title}</h3>
												{open ? <AiOutlineMinus /> : <AiOutlinePlus />}
											</AccordionHeader>

											<AccordionBody>
												<div className={styles.accordion_body}>
													<p>{item.content}</p>
												</div>
											</AccordionBody>
										</>
									)}
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
				<div className={styles.faster_transactions_maincontainer}>
					<div className={styles.faster_transactions_leftcontent}>
						<h1 className={styles.faster_transactions_leftcontent_heading}>
							Seamless transaction on the mobile app
						</h1>
						<p className={styles.faster_transactions_leftcontent_paragraph}>
							<span>Blockplot </span>is available for download on both Playstore
							& Appstore
						</p>
						<div className={styles.faster_transactions_leftcontent_buttons}>
							<Playstore />
							<Applestore />
						</div>
					</div>
					<div className={styles.faster_transactions_rightcontent}>
						<img src="./landingpageasserts/Bphones.svg" alt="phone" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default FasterTransactions;
