import React from 'react';  // Import React
import styles from './Performance.module.css';  // Assuming you're using CSS modules

const Performance = () => {
  return (
    <div className={styles.performance}>
      <b className={styles.performanceReview}>2024 Performance Review</b>
      <img className={styles.performanceChild} alt="" src="Line 15.svg" />
      <img className={styles.performanceItem} alt="" src="Line 16.svg" />
      <div className={styles.performanceInner} />
      <div className={styles.performanceRating}>Performance Rating</div>
      <div className={styles.meetingExpectation}>3/5 (Meeting Expectation)</div>
      <div className={styles.eligibleForPromotion}>Eligible For Promotion</div>
      <div className={styles.exceedsExpectation}>5/5 (Exceeds Expectation)</div>
      <div className={styles.potentialRating}>Potential Rating</div>
      <div className={styles.incrementWrapper}>
        <div className={styles.increment}>10% Increment</div>
      </div>
      <img className={styles.vectorIcon} alt="" src="Vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="Vector.svg" />
      <img className={styles.bitcoinIconsverifyFilled} alt="" src="bitcoin-icons:verify-filled.svg" />
    </div>
  );
};

export default Performance;
