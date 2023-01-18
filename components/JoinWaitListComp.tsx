/** @format */

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import { useAppDispatch, useAppSelector } from "../appStore/hooks";
import { RiErrorWarningFill } from "react-icons/ri";
import {MdOutlineGppGood}	from "react-icons/md";
import Message from "../layouts/Message";
import styles from "./compstyles/JoinWaitListComp.module.scss";
import { closeModal } from "../reduxSlices/allModalSlice";
import { useWaitListMutation } from "../services/userServices";
import { Bars } from "react-loader-spinner";
import {
	BsReddit,
	BsTwitter,
	BsLinkedin,
	BsInstagram,
	BsMedium,
	BsYoutube,
} from "react-icons/bs";

const JoinWaitListComp = () => {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
	});
	const [phonenumber, setPhonenumber] = useState<any>();
	const [status, setStatus] = useState("idle");
	const [message, setMessage] = useState("");

	const [waitList, { isLoading, isSuccess, isError, error }] =
		useWaitListMutation();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const { name, email } = userData;
		try {
			await waitList({
				name: name,
				email: email,
				phone: phonenumber,
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (isSuccess) {
			setStatus("success");
			setMessage("You have successfully joined our waitlist");
			setUserData({ name: "", email: "" });
			setPhonenumber(0);
		} else if (isError) {
			setStatus("error");
			setMessage((error as any).data.message);
		}
	}, [isSuccess, isError, error]);
	return (
		<>
			<div className="container">
				<Link href="/">
					<div className={styles.joinwaitlist_nav}>
						<h2>BlockPlot</h2>
					</div>
				</Link>
				<div className={styles.joinwait_main}>
					<div className={styles.joinwait_texts}>
						<h1>Tokenized Assets Issuance and Exchange Protocol</h1>
						<p>
							Blockplot is a decentralized ecosystem for tokenized assets. A
							multi-jurisdiction protocol built for the protection of issuers,
							investors and other participants of the private market, with
							guaranteed on-chain compliance
						</p>
					</div>
					<div className={styles.joinwait_form}>
						<div className={styles.joinwait_form_header}>
							<h2>Get early access</h2>
							<h5>Be the first to know when we go live</h5>
						</div>

						<div className={styles.joinwait_form_body}>
							<form onSubmit={handleSubmit}>
								<input
									type="text"
									name="firstName"
									value={userData.name}
									onChange={(e) =>
										setUserData({
											...userData,
											name: e.target.value,
										})
									}
									required
									placeholder="Full Name"
								/>
								<input
									type="email"
									name="email"
									value={userData.email}
									onChange={(e) =>
										setUserData({
											...userData,
											email: e.target.value,
										})
									}
									required
									placeholder="Enter email address"
								/>

								<div className="hn">
									<PhoneInput
										placeholder="Phone number"
										international
										defaultCountry="NG"
										countryCallingCodeEditable={false}
										value={phonenumber}
										onChange={setPhonenumber}
									/>
								</div>

								<button type="submit">
									{isLoading ? (
										<div>
											<Bars
												height="30"
												width="30"
												color="#fff"
												ariaLabel="bars-loading"
												wrapperStyle={{}}
												wrapperClass=""
												visible={true}
											/>
										</div>
									) : (
										<div>Join Waitlist</div>
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className={styles.joinwait_footer}>
					<div className={styles.joinwait_footer_left}>
						<p>
							All Rights Reserved <span> &#169; 2022 Blockplot</span>
						</p>
					</div>
					<div className={styles.joinwait_footer_center}>
						<img
							src="./joinwaitlistimages/joinPhone.svg"
							alt="feature_wallet"
						/>
					</div>
					<div className={styles.joinwait_footer_right}>
						<Link
							href="https://www.reddit.com/r/Blockplotfinance/"
							target="_blank"
							rel="noopener noreferrer">
							<BsReddit size={29} color="#717172" />
						</Link>
						<Link
							href="https://twitter.com/blockplot"
							target="_blank"
							rel="noopener noreferrer">
							<BsTwitter size={29} color="#717172" />
						</Link>
						<Link
							href="https://www.linkedin.com/company/blockplot/"
							target="_blank"
							rel="noopener noreferrer">
							<BsLinkedin size={29} color="#717172" />
						</Link>
						<Link
							href="https://www.instagram.com/blockplot/"
							target="_blank"
							rel="noopener noreferrer">
							<BsInstagram size={29} color="#717172" />
						</Link>
						<Link
							href="https://medium.com/@blockplot"
							target="_blank"
							rel="noopener noreferrer">
							<BsMedium size={29} color="#717172" />
						</Link>
						<Link
							href="https://www.youtube.com/"
							target="_blank"
							rel="noopener noreferrer">
							<BsYoutube size={29} color="#717172" />
						</Link>
					</div>
				</div>
			</div>
			{status === "success" && (
				<Message
					message={message}
					icon={<MdOutlineGppGood color="#18e20a" size={50} />}
					setStatus={setStatus}
				/>
			)}
			{status === "error" && (
				<Message
					message={message}
					icon={<RiErrorWarningFill color="#e40d0d" size={50} />}
					setStatus={setStatus}
				/>
			)}
		</>
	);
};

export default JoinWaitListComp;
