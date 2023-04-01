/** @format */

import React from "react";
import { useAppDispatch } from "../../appStore/hooks";
import { openModal } from "../../reduxSlices/allModalSlice";
import styles from "./Buttons.module.css";
import Link from "next/link";

const BigJoinWaitList = () => {
  return (
    <Link href="/joinwaitlist" target="_blank" rel="noopener noreferrer">
      <div>
        <button type="button" className={styles.connect_button}>
          Join Our Community
        </button>
      </div>
    </Link>
  );
};

export default BigJoinWaitList;
