import React from 'react';
import Link from 'next/link';
import styles from './Buttons.module.css';

const Playstore = () => {
    const LINK =
        'https://expo.dev/accounts/stevepath/projects/blockplot-mobile/builds/1de619b7-eb1c-401a-9e33-78a6d1acffd3';
    return (
        (<Link href={LINK} target="_blank" rel="noopener noreferrer">

            <div className={styles.storebuttons}>
                <div>
                    <img
                        src="./landingpageasserts/Playstore.svg"
                        className={styles.playstore}
                        alt="playstore"
                    />
                </div>
                <div>
                    <h4>Get it on</h4>
                    <h3>Playstore</h3>
                </div>
            </div>

        </Link>)
    );
};

export default Playstore;
