import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ onLogout, loginHead }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    {loginHead ? (
      <h1 className={`${styles.title} ${styles.loginHead}`}>Business Card</h1>
    ) : (
      <>
        <img
          className={styles.earth}
          src="https://res.cloudinary.com/dczgrcjnn/image/upload/v1617699172/logo/earth_qx9stj.png"
          alt="earth"
        />
        <h1 className={styles.title}>Business Card</h1>
      </>
    )}
  </header>
));

export default Header;
