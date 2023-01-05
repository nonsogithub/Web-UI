import React from 'react'
import styles from "./CardsStyles/BlogCard.module.scss";
import {MdOpenInNew} from "react-icons/md"
const BlogCard = () => {
  return (
		<div className={styles.blogCard}>
			<p>Get updates, user education, announcements from the Blockplot team</p>
			<div>
				<p>See Blog</p>
				<MdOpenInNew size={14} color="#333333" />
			</div>
		</div>
	);
}

export default BlogCard