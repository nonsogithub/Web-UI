/** @format */

import React from "react";
import styles from "./compstyles/FasterTransactions.module.css";
import Playstore from "./Buttons/Playstore";
import Applestore from "./Buttons/Apple";

const FasterTransactions = () => {
	return (
		<div className={styles.faster_transactions}>
			<div className={styles.faster_transactions_maincontainer}>
				<div className={styles.faster_transactions_leftcontent}>
					<h1 className={styles.faster_transactions_leftcontent_heading}>
						Seamless transaction on the mobile app
					</h1>
					<p className={styles.faster_transactions_leftcontent_paragraph}>
						<span>Blockplot </span>is available for download on both Playstore &
						Appstore
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
	);
};
export default FasterTransactions;
