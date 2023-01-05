import React from 'react'
import Image from 'next/image'
import styles from "./CardsStyles/GovernanceCard.module.scss"

const GovernanceCard = () => {
  return (
		<div className={styles.governance_card}>
			<p>
				Blockplot ecosystem is community owned, and governed by $BPT token
				hodlers
			</p>
			<img src="./landingpageasserts/Coin.svg" alt="phone" />
			{/* <Image
				src="landingpageasserts/twitter.svg"
				alt="twitter"
				width={20}
				height={20}
			/> */}
			{/* <Image src='../'
			<img src="../landingpageasserts/twitter.svg" alt="twitter" /> */}
		</div>
	);
}

export default GovernanceCard