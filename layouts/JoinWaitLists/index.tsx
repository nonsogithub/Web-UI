/** @format */

import React, { useState } from "react";
import Image from "next/image";
import styles from "./JoinWaitList.module.scss";
import { useAppDispatch, useAppSelector } from "../../appStore/hooks";
import { closeModal } from "../../reduxSlices/allModalSlice";



const JoinWaitList = () => {
    const dispatch = useAppDispatch();
    const [userData, setUserData] = useState({
        name: "",
		email: "",
		phonenumber: "",
	} );
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
						<form>
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
                        <button>
                            Join Waitlist
                        </button>
							{/* <button disabled={isLoading} type="submit">
								{isLoading ? (
									<div>
										Loadi
									</div>
								) : (
									<div>Join Waitlist</div>
								)}
							</button> */}
						</form>
					</div>
				</div>
			</div>
		);


}

export default JoinWaitList;