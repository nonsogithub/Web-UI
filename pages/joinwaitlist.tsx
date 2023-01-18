/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import JoinWaitListComp from "../components/JoinWaitListComp";
import styles from "../styles/Home.module.css";

const JoinWaitList: NextPage = () => {
	const ref = useRef(null);

	const options = {
		smooth: true,
		multiplier: 3,
		smartphone: {
			smooth: true,
		},
	};
	return (
		<div className="g-height">
			<Head>
				<title>Join WaitList| Blockplot</title>
				<meta name="description" content="Join WaitList" />
				<link rel="icon" href="/blockplot.ico" />
			</Head>
			<LocomotiveScrollProvider options={options} containerRef={ref}>
				<div data-scroll-container ref={ref} className={styles.nav_joinImage}>
					<JoinWaitListComp />
				</div>
			</LocomotiveScrollProvider>
		</div>
	);
};

export default JoinWaitList;
