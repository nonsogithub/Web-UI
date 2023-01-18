/** @format */

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Message.module.scss";

const Message = ({ message, icon, setStatus }: any) => {
	return (
		<div className={styles.modal_container}>
			<div className={styles.wallet_modal}>
				<div className={styles.wallet_modal_header}>
					{icon}
                    <h3>{message}</h3>
                    <button onClick={() => setStatus("idle")}>OK</button>
				</div>
			</div>
		</div>
	);
};

export default Message;
