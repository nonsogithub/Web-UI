/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import { Element, Link } from 'react-scroll';
import { useAppDispatch, useAppSelector } from '../appStore/hooks';
import { openModal } from '../reduxSlices/allModalSlice';
import styles from './compstyles/HeroSection.module.css';
import Connect from './Buttons/Connect';

const HeroSection = () => {
    const dispatch = useAppDispatch();
    const handleConnectWallet = () => {
        dispatch(openModal('walletmodal'));
    };

    return (
        <div className={styles.hero_main}>
            <div className={styles.hero_div}>
                <div className={styles.hero_contents}>
                    <div className={styles.hero_headings}>
                        <h1>Decentralized Real Estate</h1>
                        <p>
                            Blockplot has provided a platform where anyone from
                            anywhere can start investing in real world estate
                            seamlessly.
                        </p>
                        <div onClick={handleConnectWallet}>
                            <Connect />
                        </div>
                    </div>
                </div>
                <div className={styles.hero_svgs}>
                    <img
                        src="./landingpageasserts/singleblock.svg"
                        className={styles.singleblock_one}
                        alt="singleblock"
                    />
                    <img
                        src="./landingpageasserts/singleblock.svg"
                        className={styles.singleblock_two}
                        alt="singleblock"
                    />
                    <img
                        src="./landingpageasserts/majorhouse.svg"
                        className={styles.majorhouse}
                        alt="hero"
                    />
                    <img
                        src="./landingpageasserts/cardhouse.svg"
                        className={styles.cardhouse}
                        alt="hero"
                    />
                    <img
                        src="./landingpageasserts/doubleblock.svg"
                        className={styles.doubleblock}
                        alt="hero"
                    />
                </div>
            </div>

            <div className={styles.user_counter}>
                <div className={styles.user_count}>
                    <h1>10k+</h1>
                    <p>Retail investors</p>
                </div>
                <div className={styles.user_count}>
                    <h1>500+</h1>
                    <p>Listed assets</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
