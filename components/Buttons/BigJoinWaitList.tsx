import React from 'react';
import { useAppDispatch,} from "../../appStore/hooks";
import { openModal } from "../../reduxSlices/allModalSlice";
import styles from './Buttons.module.css';

const BigJoinWaitList = () => {
      const dispatch = useAppDispatch();
			const handleWaitlistModal = () => {
				dispatch(openModal("waitlistmodal"));
    };
    
    return (
			<div onClick={handleWaitlistModal}>
				<button type="button" className={styles.connect_button}>
					Join Waitlist
				</button>
			</div>
		);
};

export default BigJoinWaitList;
