import React from 'react';
import styles from './Buttons.module.css';

const Applestore = () => {
    return (
        <div className={styles.storebuttons}>
            <div>
                <img
                    src="./landingpageasserts/apple.svg"
                    className={styles.applestore}
                    alt="playstore"
                />
            </div>
            <div>
                <h4>Download on the</h4>
                <h3>App Store</h3>
            </div>
        </div>
    );
};

export default Applestore;
