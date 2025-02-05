import React from "react";
import styles from "./Rightsidel.module.css"; 


const Rightsidel = () => {
  return (
    <div className={styles.rightsidel}>
      <b className={styles.loginAndDiscover}>
        Login and Discover a Great Opportunity
      </b>
      <b className={styles.amountOfNew}>Amount of New Opportunities</b>
      <div className={styles.loginWrapper}>
        <button className={styles.login}>Signup</button>
      </div>
      <div className={styles.logoWrapper}>
        <b className={styles.logo}>Logo</b>
      </div>
    </div>
  );
};

export default Rightsidel;
