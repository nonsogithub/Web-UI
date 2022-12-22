/** @format */

import { useEffect } from "react";

export default function useLocoScroll(started) {
	useEffect(() => {
		if (!started) return;

		import("locomotive-scroll").then((locomotiveModule) => {
			let scroll = new locomotiveModule.default({
				el: document.querySelector("[data-scroll-container]"),
				smooth: true,
				multiplier: 3,
				class: "is-reveal",
				smoothMobile: false,
				resetNativeScroll: true,
			});

			return () => {
				if (scroll) scroll.destroy();
			};
		});
	}, [started]);
}
