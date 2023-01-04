/** @format */
import React, { useState } from "react";
import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../appStore/hooks";
import { selectModal } from "../reduxSlices/allModalSlice";
import { closeModal, openModal } from "../reduxSlices/allModalSlice";
import JoinWaitList from "../layouts/JoinWaitLists";

const ModalLayout = ({ children }: { children: ReactNode }) => {
	const dispatch = useAppDispatch();
	const { modalIsOpen, modalType } = useAppSelector(selectModal);

	return (
		<div data-scroll-container>
			{children}
			<div>
				{modalIsOpen && modalType === "waitlistmodal" && <JoinWaitList />}
			</div>
		</div>
	);
};
export default ModalLayout;
