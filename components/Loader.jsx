import React from 'react';
import styles from "./compstyles/Loader.module.scss";


const Loader = () =>
{
  return (
		<div className={styles.loaderstyles}>
			<div className={styles.balls}>
				<div className={`${styles.ball} ${styles.one}`}></div>
				<div className={`${styles.ball} ${styles.two}`}></div>
				<div className={`${styles.ball} ${styles.three}`}></div>
			</div>
		</div>
	);
}
// ball three

export default Loader;
