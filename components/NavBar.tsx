import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { setScreenSize, selectModal } from '../reduxSlices/allModalSlice';
import { selectWalletInstance } from '../reduxSlices/walletConnectionSlices';
import { useAppDispatch, useAppSelector } from '../appStore/hooks';
import styles from './compstyles/NavBar.module.css';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const [verified, setVerified] = useState(false);
    const dispatch = useAppDispatch();
    const { screenSize }: any = useAppSelector(selectModal);
    const { isConnected, address } = useAppSelector(selectWalletInstance);
    useEffect(() => {
        const handleResize = () => {
            dispatch(setScreenSize(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {screenSize <= 960 ? (
                <div className={`${styles.navdiv} ${styles.fixed}`} id="page1">
                    <div className={styles.nav}>
                        <div className={styles.nav_padding}>
                            <div>
                                <Link href="/">
                                    <h2>BlockPlot</h2>
                                </Link>
                            </div>
                            <div onClick={() => setToggle(!toggle)}>
                                {toggle ? (
                                    <AiOutlineClose size={30} color="#000000" />
                                ) : (
                                    <AiOutlineMenu size={30} color="#000000" />
                                )}
                            </div>
                        </div>
                        {toggle && (
                            <div
                                className={`${
                                    toggle
                                        ? styles.mobilenav
                                        : styles.mobileclose
                                }`}
                            >
                                <Link href="/marketplace">
                                    <p>MarketPlace</p>
                                </Link>
                                <Link href="/community">
                                    <p>Community</p>
                                </Link>
                                {isConnected && verified && (
                                    <Link href="/dashboard">
                                        <p>Dashboard</p>
                                    </Link>
                                )}
                                <div onClick={() => setToggle(!toggle)}>
                                    {/* <ConnectWallet /> */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className={styles.navdiv} id="page1">
                    <div className="container">
                        <div className={styles.nav}>
                            <div>
                                <Link href="/">
                                    <h2>BlockPlot</h2>
                                </Link>
                            </div>
                            <div className={styles.menu_items}>
                                <Link href="/marketplace">
                                    <p>MarketPlace</p>
                                </Link>
                                <Link href="/community">
                                    <p>Community</p>
                                </Link>
                                {isConnected && verified && (
                                    <Link href="/dashboard">
                                        <p>Dashboard</p>
                                    </Link>
                                )}
                            </div>
                            <div>
                                {/* <ConnectWallet /> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
