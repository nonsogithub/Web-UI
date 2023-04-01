/**
 * /* eslint-disable @next/next/no-img-element
 *
 * @format
 */

import React from "react";
// import { Element, Link } from 'react-scroll';
import { useAppDispatch, useAppSelector } from "../appStore/hooks";
import { openModal } from "../reduxSlices/allModalSlice";
import styles from "./compstyles/HeroSection.module.scss";
import BigJoinWaitList from "./Buttons/BigJoinWaitList";

const HeroSection = () => {
  return (
    <div className="container" data-scroll-section>
      <div className={styles.hero_main}>
        <div
          className={styles.hero_texts}
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="2"
        >
          <h1>Fractional Real Estate Issuance and Exchange Platform</h1>
          <p>
            Simple, Fast and Flexible Fractional Real Estate ownership platform,
            wthout hassle. A Blockchain powered permissioned ecosystem for
            tokenized assets.
          </p>
          <BigJoinWaitList />
        </div>
        <div
          className={styles.hero_images}
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="2"
        >
          <img
            src="./landingpageasserts/feature_wallet.svg"
            alt="feature_wallet"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
