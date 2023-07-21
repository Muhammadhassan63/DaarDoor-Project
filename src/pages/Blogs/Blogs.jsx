import React from "react";
import postImage1 from "../../assets/post_image-1.png";
import styles from "./blogs.module.css";
export default function Blogs() {
  return (
    <div>
      <div className={styles.blogsContainer}>
        <div className={styles.blogHeading}>Blogs</div>
        <div className={styles.blogSubHeading}>
          Join our community of property enthusiasts, and let DaarDoor Blogs be
          your trusted companion on your real estate adventure.
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.blogsPostContainer}>
          <img src={postImage1} alt="post image" />
          <div className={styles.postHeading}>
            Hacks for finding an ideal and best home
          </div>
          <div className={styles.postSubHeading}>
            Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec
            purus viverra. Sit justo velit, eu sed
          </div>
          <div>
            Properties By <span>Adam Smith</span>
          </div>
        </div>

        <div className={styles.blogsPostContainer}>
          <img src={postImage1} alt="post image" />
          <div className={styles.postHeading}>
            Hacks for findinf an ideal and best home
          </div>
          <div className={styles.postSubHeading}>
            Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec
            purus viverra. Sit justo velit, eu sed
          </div>
          <div>
            Properties By <span>Adam Smith</span>
          </div>
        </div>

        <div className={styles.blogsPostContainer}>
          <img src={postImage1} alt="post image" />
          <div className={styles.postHeading}>
            Hacks for findinf an ideal and best home
          </div>
          <div className={styles.postSubHeading}>
            Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec
            purus viverra. Sit justo velit, eu sed
          </div>
          <div>
            Properties By <span>Adam Smith</span>
          </div>
        </div>
      </div>

     
    </div>
  );
}
