/** @format */

import "../styles/globals.css";
import "react-phone-number-input/style.css";
import React, { useEffect, useRef, useState } from "react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "locomotive-scroll/src/locomotive-scroll.scss";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "../appStore/store";
import Loader from "../components/Loader";

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
			<Provider store={store}>
				<ToastContainer />
				{loader ? <Loader /> : <Component {...pageProps} />}
			</Provider>
		</div>
	);
}

export default MyApp;
