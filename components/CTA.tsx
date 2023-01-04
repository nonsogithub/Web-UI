/** @format */

import React from "react";
import { Element, Link } from "react-scroll";
import styles from "./compstyles/CTA.module.css";
import Connect from "./Buttons/BigJoinWaitList";

const CTA = () => {
	return (
		<div className={styles.cta_div}>
			<div className={styles.ctatext_div}>
				<h3>
					Buy your first real estate <span>asset on Blockplot</span>
				</h3>
				<p>
					Go through a list of available assets listed
					<span>on Blockplot and invest.</span>
				</p>
			</div>
			<div className={styles.cta_button}>
				<Link
					activeClass="active"
					to="page1"
					spy
					smooth
					offset={0}
					duration={500}>
					<Connect />
				</Link>
			</div>
		</div>
	);
};
export default CTA;
