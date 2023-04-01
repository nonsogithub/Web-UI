/** @format */

import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { BsBank } from "react-icons/bs";
import { RiFilePaper2Line } from "react-icons/ri";
import styles from "./compstyles/EcoSystem.module.scss";
import BigJoinWaitList from "./Buttons/BigJoinWaitList";
import {
  BlogCard,
  CommunityCard,
  DevelopersCard,
  EcoSystemCard,
  GovernanceCard,
} from "./Cards";
import { BsArrowUpRight } from "react-icons/bs";
import ButtonStyles from "./Buttons/Buttons.module.css";
import { FaCoins, FaCommentDollar, FaMoneyCheckAlt } from "react-icons/fa";

const EcoSystem = () => {
  return (
    <div className={styles.herotwo_div} data-scroll-section>
      <div className="container">
        <div className={styles.ecosystem_intro_governance}>
          <div className={styles.ecosystem_intro_governance_header}>
            <h3>Africa’s first tokenized bank</h3>
            <p>Community Owned, Complaint & Permissioned</p>
          </div>
          <div
            className={styles.ecosystem_intro_governance_cards}
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="2"
          >
            <div className={styles.ecosystem_intro_governance_card_header}>
              <h3>Protocol Governance</h3>
              <p>
                Asset holders vote on property decisions through our
                decentralized governance system. Decisions range from rental
                increment to repair requests and more. The majority decides on
                what should be done & relayed to the property management for
                execution.
              </p>
            </div>
            <div className={styles.ecosystem_intro_governance_card_body}>
              <button>
                Governance forum
                <span>
                  <FiArrowUpRight color="#ffff" size={24} />
                </span>
              </button>
              <button>
                Governance portal
                <span>
                  <FiArrowUpRight color="#ffff" size={24} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.blockplot_ecosystem}>
          <div
            className={styles.blockplot_ecosystem_card}
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="2"
          >
            <div>
              <h3>Blockplot Ecosystem</h3>
              <p>
                Asset issuers, Real estate investors, liquidity providers, and
                various level of professionals all in a decentralized financial
                marketplace, accessible to all. Built on the principles of
                decentralization and community consensus
              </p>
            </div>

            <img src="./landingpageasserts/pattern.svg" />
          </div>
          <div
            className={styles.blockplot_gov}
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="2"
          >
            <div>
              <h3>Governance</h3>
              <p>
                Blockplot ecosystem is community owned, and governed by very
                member of the ecosystem
              </p>
            </div>
            <div>
              <img src="./landingpageasserts/Coin.svg" />
            </div>
          </div>
        </div>
        <div className={styles.blockplot_blog}>
          <div className={styles.blog}>
            <div>
              <h3>Blog</h3>
              <p>
                Get updates, user education, announcements from the Blockplot
                team
              </p>
              <button>
                See blog
                <span>
                  <FiArrowUpRight color="#ffff" size={24} />
                </span>
              </button>
            </div>
            <img src="./landingpageasserts/blog.svg" />
          </div>
          <div className={styles.developers}>
            <div>
              <h3>Development</h3>
              <p>
                Learn about our product process and understand the
                technicalities of the Blockplot.
              </p>
              <Link
                href="https://blockplots-organization.gitbook.io/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Read documentation</button>
              </Link>
            </div>
            <div>
              <Link
                href="https://blockplots-organization.gitbook.io/docs/user-documentation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  Whitepaper
                  <span>
                    <FiArrowUpRight color="#ffff" size={24} />
                  </span>
                </button>
              </Link>
              <Link
                href="https://github.com/Blockplot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  GitHub
                  <span>
                    <FiArrowUpRight color="#ffff" size={24} />
                  </span>
                </button>
              </Link>
            </div>
            <img src="./landingpageasserts/dev_ecllipse.svg" />
          </div>
        </div>
        <div className={styles.how_to_invest}>
          <div>
            <h3>How It Works</h3>
          </div>
          <div className={styles.how_to_invest_container}>
            <div className={styles.how_to_invest_cards}>
              <h2>Fractional Ownership</h2>
              <div>
                We bring real estate assets to the blockchain, fractionalize it,
                and offer it to users to buy as Tokenized assets
              </div>
              <div className={styles.invest_footer_images}>
                <FaCoins className={styles.invest_icons} />
              </div>
            </div>
            <div className={styles.how_to_invest_cards}>
              <h2>Buy, Sell or Trade</h2>
              <div>
                Buy Real estate tokens from our marketplace and sell whenever on
                secondary markets with none of the tradFi limitations.
              </div>
              <div className={styles.invest_footer_images}>
                <FaMoneyCheckAlt className={styles.invest_icons} />
              </div>
            </div>
            <div className={styles.how_to_invest_cards}>
              <h2>Earn Passive Income </h2>
              <div>
                Earn yields as Rental income is collected and distributed to
                your wallet address.
              </div>
              <div className={styles.invest_footer_images}>
                <FaCommentDollar className={styles.invest_icons} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blockplot_community}>
          <div>
            {/* <h3>Join Our Community</h3> */}
            <Link
              href="/joinwaitlist"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <button
                  type="button"
                  className={ButtonStyles.join_community_btn}
                >
                  Join Our Community
                </button>
              </div>
            </Link>
            <p>
              The Blockplot ecosystem is an ecosystem of designers, developers,
              Liquidity providers, Real estate investors, professionals. Join
              the conversation. – Our community determines the success of our
              protocol
            </p>
          </div>
          <div>
            <Link
              href="https://twitter.com/blockplot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.container}>
                <p>Twitter</p>
                <img src="./socials/twitter.svg" alt="twitter" />
              </div>
            </Link>
          </div>
          <div>
            <Link
              href="https://www.reddit.com/r/Blockplotfinance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.container}>
                <p>Reddit</p>
                <img src="./socials/reddit.svg" alt="reddit" />
              </div>
            </Link>
          </div>
          <div>
            <Link
              href="https://www.instagram.com/blockplot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.container}>
                <p>Instagram</p>
                <img src="./socials/Instagram.svg" alt="reddit" />
              </div>
            </Link>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/company/blockplot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.container}>
                <p>Linkedin</p>
                <img src="./socials/linkedin.svg" alt="linkedin" />
              </div>
            </Link>
          </div>
          <div>
            <div className={styles.container}>
              <p>Youtube</p>
              <img src="./socials/youtube.svg" alt="youtube" />
            </div>
          </div>
          <div>
            <div className={styles.container}>
              <p>Telegram</p>
              <img src="./socials/telegram.svg" alt="youtube" />
            </div>
          </div>
          <div>
            <Link
              href="https://medium.com/@blockplot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.container}>
                <p>Medium</p>
                <img src="./socials/medium.svg" alt="Medium" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoSystem;
