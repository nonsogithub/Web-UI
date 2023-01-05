/** @format */

import React from "react";
import styles from "./CardsStyles/EcoSystemCard.module.scss";
const EcoSystemCard = () => {
	return (
		<div className={styles.ecocards}>
			<div className={styles.ecocards_card}>
				<p>Asset issuers</p>
			</div>
			<div className={styles.ecocards_card}>
				<p>Protocol-1</p>
			</div>
			<div className={styles.ecocards_card}>
				<p>Protocol-2</p>
			</div>
			<div className={styles.ecocards_card}>
				<p>Protocol-3</p>
			</div>
		</div>
	);
};

export default EcoSystemCard;
