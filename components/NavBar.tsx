/** @format */

import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { setScreenSize, selectModal } from "../reduxSlices/allModalSlice";
import { selectWalletInstance } from "../reduxSlices/walletConnectionSlices";
import { useAppDispatch, useAppSelector } from "../appStore/hooks";
import styles from "./compstyles/NavBar.module.css";
import SmallJoinWaitList from "./Buttons/SmallJoinWaitList";

const NavBar = () => {
	const [toggle, setToggle] = useState(false);
	const [verified, setVerified] = useState(false);
	const dispatch = useAppDispatch();
	const { screenSize }: any = useAppSelector(selectModal);
	const { isConnected, address } = useAppSelector(selectWalletInstance);
	useEffect(() => {
		const handleResize = () => {
			dispatch(setScreenSize(window.innerWidth));
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const [colorChange, setColorchange] = useState(false);

	useEffect(() => {
		const changeNavbarColor = () => {
			if (window.scrollY >= 60) {
				setColorchange(true);
			} else {
				setColorchange(false);
			}
		};
		changeNavbarColor();
		window.addEventListener("scroll", changeNavbarColor);
	}, []);

	return (
		<>
			{screenSize <= 960 ? (
				<div
					className={`${
						colorChange ? `${styles.colorchange}` : `${styles.navdiv}`
					}`}
					id="page1">
					<div className={styles.nav}>
						<div className={styles.nav_padding}>
							<div>
								<Link href="/" legacyBehavior>
									<h2>BlockPlot</h2>
								</Link>
							</div>
							<div onClick={() => setToggle(!toggle)}>
								{toggle ? (
									<AiOutlineClose size={30} color="#000000" />
								) : (
									<AiOutlineMenu size={30} color="#000000" />
								)}
							</div>
						</div>
						{toggle && (
							<div
								className={`${toggle ? styles.mobilenav : styles.mobileclose}`}>
								<Link
									href="https://blockplots-organization.gitbook.io/docs/"
									target="_blank"
									rel="noopener noreferrer">
									<p>Docs</p>
								</Link>
								<Link href="/community" legacyBehavior>
									<p>Community</p>
								</Link>

								<div onClick={() => setToggle(!toggle)}>
									<SmallJoinWaitList />
								</div>
							</div>
						)}
					</div>
				</div>
			) : (
				<div
					className={`${
						colorChange ? `${styles.colorchange}` : `${styles.navdiv}`
					}`}
					id="page1">
					<div className="container">
						<div className={styles.nav}>
							<div>
								<Link href="/" legacyBehavior>
									<h2>BlockPlot</h2>
								</Link>
							</div>
							<div className={styles.menu_items}>
								<Link
									href="https://blockplots-organization.gitbook.io/docs/"
									target="_blank"
									rel="noopener noreferrer">
									<p>Docs</p>
								</Link>
								<Link href="/community" legacyBehavior>
									<p>Community</p>
								</Link>
							</div>
							<div>
								<SmallJoinWaitList />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default NavBar;
