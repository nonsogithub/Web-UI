import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import HeroSectionTwo from "../components/HeroSectionTwo";
import FeatureWallet from "../components/FeatureWallet";
import FasterTransactions from "../components/FasterTransactions";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	
  return (
		<div>
			<Head>
				<title>Block Plot</title>
				<meta name="description" content="Blockchain Housing Investment" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<NavBar />
			<HeroSection />

			{/* <HeroSection />
			<HeroSectionTwo /> */}
			{/* <FeatureWallet /> */}
			{/* <FasterTransactions /> */}
			{/* <CTA /> */}
			{/* <Footer /> */}
		</div>
	);
}

export default Home
