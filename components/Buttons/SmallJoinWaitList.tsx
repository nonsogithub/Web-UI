/** @format */

import Link from "next/link";
import React from "react";
import { useAppDispatch } from "../../appStore/hooks";
import { openModal } from "../../reduxSlices/allModalSlice";
import styles from "./Buttons.module.css";

const SmallJoinWaitList = () => {
  const dispatch = useAppDispatch();
  const handleWaitlistModal = () => {
    dispatch(openModal("waitlistmodal"));
  };

  return (
    <Link
      href="https://app.blockplot.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <button type="button" className={styles.smallconnect_button}>
          Launch App
        </button>
      </div>
    </Link>
  );
};

export default SmallJoinWaitList;
