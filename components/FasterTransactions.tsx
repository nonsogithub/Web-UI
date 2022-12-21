import React from 'react';
import styles from './compstyles/FasterTransactions.module.css';
import Playstore from './Buttons/Playstore';
import Applestore from './Buttons/Apple';

const FasterTransactions = () => {
    return (
        <div className={styles.faster_transactions}>
            <div className={styles.faster_transactions_maincontainer}>
                <div className={styles.faster_transactions_leftcontent}>
                    <h1
                        className={
                            styles.faster_transactions_leftcontent_heading
                        }
                    >
                        Seamless transaction on the mobile app
                    </h1>
                    <p
                        className={
                            styles.faster_transactions_leftcontent_paragraph
                        }
                    >
                        <span>Blockplot </span>is available for download on both
                        Playstore & Appstore
                    </p>
                    <div
                        className={
                            styles.faster_transactions_leftcontent_buttons
                        }
                    >
                        <Playstore />
                        <Applestore />
                    </div>
                </div>
                <div className={styles.faster_transactions_rightcontent}>
                    <img src="./landingpageasserts/phones.svg" alt="phone" />
                </div>
            </div>
            <div className={styles.faster_transactions_secondcontainer}>
                <div
                    className={
                        styles.faster_transactions_secondcontainer_firstcontent
                    }
                >
                    <h3>Faster Transactions</h3>
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
                        src="./landingpageasserts/doubleblock.svg"
                        className={styles.doubleblock}
                        alt="hero"
                    />
                </div>
                <div
                    className={
                        styles.faster_transactions_secondcontainer_secondcontent
                    }
                >
                    <div className={styles.asserts_count}>
                        <h3>10k+</h3>
                        <p>Retail investors</p>
                    </div>
                    <div className={styles.asserts_count}>
                        <h3>500+</h3>
                        <p>Listed asserts</p>
                    </div>
                    <div className={styles.asserts_count}>
                        <h3>10%</h3>
                        <p>Annual % Yield</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FasterTransactions;
