/** @format */
import React, { useState } from "react";
import { ReactNode } from "react";


const ModalLayout = ({ children }: { children: ReactNode }) => {

    return (
			<div data-scroll-container>
				{children}
				<div></div>
			</div>
		);
}
export default ModalLayout;