import React from 'react';
import styles from './compstyles/FeatureWallet.module.css';

const FeatureWallet = () => {
    return (
        <div className={styles.feature_wallet}>
            <div className={styles.feature_wallet_first}>
                <div className={styles.feature_wallet_content}>
                    <h2>Transact with stablecoins</h2>
                    <p>
                        The Wallet feature allows users Buy, Send, Receive, and
                        Swap Tether, Dai, & USDC
                    </p>
                </div>
                <div className={styles.feature_wallet_Images}>
                    <img
                        src="./landingpageasserts/Coins_One.svg"
                        className={styles.coins_one}
                        alt="singleblock"
                    />
                    <img
                        src="./landingpageasserts/Coins_Two.svg"
                        className={styles.coins_two}
                        alt="singleblock"
                    />
                    <img
                        src="./landingpageasserts/singleblock.svg"
                        className={styles.singleblock}
                        alt="singleblock"
                    />
                </div>
            </div>
            <div className={styles.feature_wallet_second}>
                <div className={styles.feature_wallet_second_content}>
                    <h2>DashBoard</h2>
                    <p>
                        Vital information, Data and Charts are all clearly laid
                        out on <span>the users DashBoard</span>
                    </p>
                </div>
                <div className={styles.feature_wallet_img}>
                    <img
                        src="./landingpageasserts/feature_wallet.svg"
                        alt="feature_wallet"
                    />
                </div>
            </div>
        </div>
    );
};
export default FeatureWallet;
