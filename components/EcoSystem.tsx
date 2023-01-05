/** @format */

import React, { useState } from "react";
import { FiCode, FiGithub } from "react-icons/fi";
import { BsBank } from "react-icons/bs";
import { RiFilePaper2Line } from "react-icons/ri";
import styles from "./compstyles/EcoSystem.module.scss";
import {
	BlogCard,
	CommunityCard,
	DevelopersCard,
	EcoSystemCard,
	GovernanceCard,
} from "./Cards";

const EcoSystem = () => {
	const [cardOptions, setCardOptions] = useState("Ecosystem");
	return (
		<div className={styles.herotwo_div}>
			<div className="container">
				<div className={styles.ecosystem_intro}>
					<div className={styles.ecosystem_intro_header}>
						<h3>Africa’s first tokenized bank</h3>
						<p>Community Owned, Complaint & Decentralized</p>
					</div>
					<div className={styles.ecosystem_intro_cards}>
						<div className={styles.ecosystem_intro_card}>
							<FiCode color="#333333" size={20} />
							<h3>Developers</h3>

							<div className={styles.ecosystem_intro_card_details}>
								<div className={styles.ecosystem_intro_card_detail}>
									<p>
										Whitepaper
										<span>
											<RiFilePaper2Line color="#333333" size={20} />
										</span>
									</p>
								</div>
								<div className={styles.ecosystem_intro_card_detail}>
									<p>
										GitHub
										<span>
											<FiGithub color="#333333" size={20} />
										</span>
									</p>
								</div>
							</div>
						</div>
						<div className={styles.ecosystem_intro_card}>
							<BsBank color="#333333" size={20} />
							<h3>Protocol Governance</h3>
							<div className={styles.ecosystem_intro_card_details}>
								<div className={styles.ecosystem_intro_card_detail}>
									<p>Governance forum</p>
								</div>
								<div className={styles.ecosystem_intro_card_detail}>
									<p>Governance portal</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.ecosystem_features}>
					<div className={styles.ecosystem_features_header}>
						<h3>Blockplot Ecosystem</h3>
						<p>
							Asset issuers, Developers, traders, liquidity providers, and
							various level of professionals all in a decentralized financial
							marketplace, accessible to all. Built on the principles of
							decentralization and community consensus
						</p>
					</div>
					<div className={styles.ecosystem_features_cards}>
						<div
							className={`${
								cardOptions === "Ecosystem"
									? styles.ecosystem_features_activecard
									: styles.ecosystem_features_card
							} `}
							onClick={() => setCardOptions("Ecosystem")}>
							<p>Ecosystem</p>
						</div>
						<div
							className={`${
								cardOptions === "Community"
									? styles.ecosystem_features_activecard
									: styles.ecosystem_features_card
							} `}
							onClick={() => setCardOptions("Community")}>
							<p>Community</p>
						</div>
						<div
							className={`${
								cardOptions === "Governance"
									? styles.ecosystem_features_activecard
									: styles.ecosystem_features_card
							} `}
							onClick={() => setCardOptions("Governance")}>
							<p>Governance</p>
						</div>
						<div
							className={`${
								cardOptions === "Developers"
									? styles.ecosystem_features_activecard
									: styles.ecosystem_features_card
							} `}
							onClick={() => setCardOptions("Developers")}>
							<p>Developers</p>
						</div>
						<div
							className={`${
								cardOptions === "Blog"
									? styles.ecosystem_features_activecard
									: styles.ecosystem_features_card
							} `}
							onClick={() => setCardOptions("Blog")}>
							<p>Blog</p>
						</div>
					</div>
					<h5>
						Buy, swap, earn, vote. Hundreds of real-world assets, tokenized on
						the Blockplot protocol
					</h5>
					<div className={styles.ecosystem_available_card}>
						{
							{
								Ecosystem: <EcoSystemCard />,
								Community: <CommunityCard />,
								Governance: <GovernanceCard />,
								Developers: <DevelopersCard />,
								Blog: <BlogCard />,
							}[cardOptions]
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EcoSystem;
