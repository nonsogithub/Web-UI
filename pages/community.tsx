/** @format */
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Community from "../components/Community";

const CommunityPage: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Community| Block Plot</title>
				<meta name="description" content="Blockchain Housing Investment" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<Community />
			<Footer />
		</div>
	);
};

export default CommunityPage;
