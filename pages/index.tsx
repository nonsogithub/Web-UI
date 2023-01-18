/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import EcoSystem from "../components/EcoSystem";
import FasterTransactions from "../components/FasterTransactions";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const ref = useRef(null);

	const options = {
		smooth: true,
		multiplier: 1,
		smartphone: {
			smooth: true,
		},
	};

	return (
		<div>
			<Head>
				<title>Blockplot</title>
				<meta name="description" content="Blockchain Housing Investment" />
				<link rel="icon" href="/blockplot.ico" />
			</Head>
			{/* <LocomotiveScrollProvider options={options} containerRef={ref}>
				
			</LocomotiveScrollProvider> */}
			<div className={styles.nav_heroImage}>
				<NavBar />
				<HeroSection />
				<EcoSystem />
				<FasterTransactions />
				<Footer />
			</div>
			{/* <EcoSystem /> */}
			{/* <FasterTransactions /> */}
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
