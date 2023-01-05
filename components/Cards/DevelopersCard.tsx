import React from 'react' 
import { RiFilePaper2Line } from "react-icons/ri"
import { FiGithub } from "react-icons/fi"
import {IoDocumentTextOutline} from "react-icons/io5"
import styles from "./CardsStyles/DeveloperCard.module.scss";

const DevelopersCard = () => {
  return (
		<div className={styles.developersCards}>
			<div className={styles.developersCard}>
				<RiFilePaper2Line size={17} color="#1A1919" />
				<p>Whitepaper</p>
			</div>
			<div className={styles.developersCard}>
				<FiGithub size={17} color="#1A1919" />
				<p>GitHub</p>
			</div>
			<div className={styles.developersCard}>
				<IoDocumentTextOutline size={17} color="#1A1919" />
				<p>Documentation</p>
			</div>
		</div>
	);
}

export default DevelopersCard