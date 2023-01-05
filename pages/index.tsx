import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import EcoSystem from "../components/EcoSystem";
import FeatureWallet from "../components/FeatureWallet";
import FasterTransactions from "../components/FasterTransactions";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	
  return (
		<div>
			<Head>
				<title>Blockplot</title>
				<meta name="description" content="Blockchain Housing Investment" />
				<link rel="icon" href="/blockplot.ico" />
			</Head>

			<div className={styles.nav_heroImage}>
				<NavBar />
				<HeroSection />
			</div>
			<EcoSystem />
			<Footer />

			{/*
			<HeroSectionTwo /> */}
			{/* <FeatureWallet /> */}
			{/* <FasterTransactions /> */}
			{/* <CTA /> */}
			{/* <Footer /> */}
		</div>
	);
}

export default Home
