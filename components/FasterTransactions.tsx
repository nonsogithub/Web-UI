/** @format */

import React from "react";
import styles from "./compstyles/FasterTransactions.module.css";
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
} from "react-headless-accordion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Playstore from "./Buttons/Playstore";
import Applestore from "./Buttons/Apple";

const FasterTransactions = () => {
	const data = [
		{
			title: "Who are we?",
			content:
				"Blockplot is a dedicated team of engineers, designers, developers and traders in the real estate space with a vision of making real estate assets available to anyone. At Blockplot, we aim to bridge the gaps between real estate and blockchain technology.",
		},
		{
			title: "Who are we?",
			content:
				"Blockplot is a dedicated team of engineers, designers, developers and traders in the real estate space with a vision of making real estate assets available to anyone. At Blockplot, we aim to bridge the gaps between real estate and blockchain technology.",
		},
		{
			title: "Who are we?",
			content:
				"Blockplot is a dedicated team of engineers, designers, developers and traders in the real estate space with a vision of making real estate assets available to anyone. At Blockplot, we aim to bridge the gaps between real estate and blockchain technology.",
		},
		{
			title: "Who are we?",
			content:
				"Blockplot is a dedicated team of engineers, designers, developers and traders in the real estate space with a vision of making real estate assets available to anyone. At Blockplot, we aim to bridge the gaps between real estate and blockchain technology.",
		},
		{
			title: "Who are we?",
			content:
				"Blockplot is a dedicated team of engineers, designers, developers and traders in the real estate space with a vision of making real estate assets available to anyone. At Blockplot, we aim to bridge the gaps between real estate and blockchain technology.",
		},
		{
			title: "Who are we?",
			content:
				"Blockplot is a dedicated team of engineers, designers, developers and traders in the real estate space with a vision of making real estate assets available to anyone. At Blockplot, we aim to bridge the gaps between real estate and blockchain technology.",
		},
	];
	return (
		<div className={styles.faster_transactions}>
			<div className="container">
				<div className={styles.faster_transactions_faq}>
					<h1 className={styles.faster_transactions_faq_title}>
						Frequently Asked Questions
					</h1>
					<div>
						<Accordion className={styles.accordion_width}>
							{data.map((item, index) => (
								<AccordionItem key={index}>
									{({ open }: any) => (
										<>
											<AccordionHeader className={styles.accordion_header}>
												<h3>{item.title}</h3>
												{open ? <AiOutlineMinus /> : <AiOutlinePlus />}
											</AccordionHeader>

											<AccordionBody>
												<div className={styles.accordion_body}>
													<p>{item.content}</p>
												</div>
											</AccordionBody>
										</>
									)}
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
				<div className={styles.faster_transactions_maincontainer}>
					<div className={styles.faster_transactions_leftcontent}>
						<h1 className={styles.faster_transactions_leftcontent_heading}>
							Seamless transaction on the mobile app
						</h1>
						<p className={styles.faster_transactions_leftcontent_paragraph}>
							<span>Blockplot </span>is available for download on both Playstore
							& Appstore
						</p>
						<div className={styles.faster_transactions_leftcontent_buttons}>
							<Playstore />
							<Applestore />
						</div>
					</div>
					<div className={styles.faster_transactions_rightcontent}>
						<img src="./landingpageasserts/Bphones.svg" alt="phone" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default FasterTransactions;
