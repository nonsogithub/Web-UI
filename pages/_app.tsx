/** @format */

import "../styles/globals.css";
import React, { useEffect, useRef, useState } from "react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import useLocoScroll from "../hooks/useLocoScroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "../appStore/store";
import Loader from "../components/Loader";
import ModalLayout from "../layouts/ModalLayout";

function MyApp({ Component, pageProps }: AppProps) {
	const [loader, setLoader] = useState(true);
	const [timer, setTimer] = useState(3);

	// useLocoScroll(!loader);

	const id = useRef<any>(null);

	const clear = () => {
		clearInterval(id.current);
	};

	useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer((timer) => timer - 1);
		}, 1000);
		return () => clear();
	}, []);

	useEffect(() => {
		if (timer === 0) {
			setLoader(false);
			clear();
		}
	}, [timer]);

	useEffect(() => {
		window.dispatchEvent(new Event("resize"));
	}, [Component]);

	return (
		<div data-scroll-container>
			{/* style={{ perspective: "1px" }} */}
			{/* minHeight: "100vh" */}
			<Provider store={store}>
				<ToastContainer />
				{loader ? (
					<Loader />
				) : (
					<ModalLayout>
						<Component {...pageProps} />
					</ModalLayout>
				)}
			</Provider>
		</div>
	);
}

export default MyApp;
