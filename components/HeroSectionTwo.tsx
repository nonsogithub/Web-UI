import React from 'react';
import styles from './compstyles/HeroSectionTwo.module.css';

const HeroSectionTwo = () => {
    return (
        <div className={styles.herotwo_div}>
            <div className={styles.herotwo_content_div}>
                <div className={styles.contentimage}>
                    <div className={styles.loading} />
                    <img
                        src="./landingpageasserts/globalcount.svg"
                        alt="globalcount"
                    />
                </div>
                <div className={styles.contenttext}>
                    <h3>
                        Purchase fractions of real estate assets hassle free
                    </h3>
                    <p>
                        Unlike traditional ways of investing in real estate we
                        have made our user experience better by purchasing these
                        asset all in a few clicks.
                    </p>
                </div>
            </div>
            <div
                className={`${styles.herotwo_content_div} ${styles.column_reverse}`}
            >
                <div className={styles.contenttext}>
                    <h3>Secure, Reliable & Growth</h3>
                    <p>
                        All assets owned by retail investors are secure on
                        Blockplot, your transactions are stored on the
                        blockchain.
                    </p>
                </div>
                <div className={styles.contentimage_two}>
                    <img
                        src="./landingpageasserts/chart.svg"
                        alt="globalcount"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSectionTwo;
