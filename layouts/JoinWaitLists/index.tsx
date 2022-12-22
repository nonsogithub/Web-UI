/** @format */

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import styles from "./JoinWaitList.module.scss";
import { useAppDispatch, useAppSelector } from "../../appStore/hooks";
import { closeModal } from "../../reduxSlices/allModalSlice";
import { useWaitListMutation } from "../../services/userServices";

const JoinWaitList = () => {
	const dispatch = useAppDispatch();
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		phonenumber: "",
	});

	const [waitList, { isLoading, isSuccess, isError, error }] =
		useWaitListMutation();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const { name, email, phonenumber } = userData;
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
            toast.success("Added Successfuly to our waitlist");
           dispatch(closeModal());
		} else if (isError) {
			toast.error((error as any).data.message);
		}
	}, [isSuccess, isError, error, dispatch]);

	return (
		<div className={styles.modal_container}>
			<div className={styles.wallet_modal}>
				<div className={styles.wallet_modal_header}>
					<h2>Join Our Waitlist</h2>
					<div onClick={() => dispatch(closeModal())}>
						<img src="/closebutton.svg" alt="metamask" />
					</div>
				</div>
				<h5>Be the first to know when Blockplot is launched</h5>
				<div className={styles.wallet_modal_body}>
					{/* onSubmit={handleSubmit} */}
					<form onSubmit={handleSubmit}>
						<label htmlFor="firstName">Full Name</label>
						<input
							type="text"
							name="firstName"
							// id="firstName"
							value={userData.name}
							onChange={(e) =>
								setUserData({
									...userData,
									name: e.target.value,
								})
							}
							required
							placeholder="Enter your first name"
						/>
						<label htmlFor="email">Contact Email Address</label>
						<input
							type="email"
							name="email"
							// id="email"
							value={userData.email}
							onChange={(e) =>
								setUserData({
									...userData,
									email: e.target.value,
								})
							}
							required
							placeholder="Enter your email address"
						/>

						<label htmlFor="email">Contact Phone Number</label>
						<input
							type="tel;"
							name="phonenumber"
							// id="phonenumber"
							value={userData.phonenumber}
							onChange={(e) =>
								setUserData({
									...userData,
									phonenumber: e.target.value,
								})
							}
							required
							maxLength={15}
							placeholder="Enter Phone Number"
						/>
						{/* <button type="submit">Join Waitlist</button> */}
						<button  type="submit">
							{isLoading ? <div>Loadi</div> : <div>Join Waitlist</div>}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default JoinWaitList;
