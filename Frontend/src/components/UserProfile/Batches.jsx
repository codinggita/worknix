import React from 'react';
import styles from './Batches.module.css';

const Batches = () => {
  return (
    <div className={styles.batches}>
      <b className={styles.batches1}>Batches</b>
      <img className={styles.materialSymbolsawardStarIcon} alt="" src="material-symbols:award-star.svg" />
      <img className={styles.basilawardOutlineIcon} alt="" src="basil:award-outline.svg" />
      <img className={styles.basilawardOutlineIcon1} alt="" src="basil:award-outline.svg" />
      <img className={styles.basilawardOutlineIcon2} alt="" src="basil:award-outline.svg" />
      <div className={styles.bestEmployeOf}>Best Employe of Month</div>
      <div className={styles.topPerformance}>Top Performance</div>
      <div className={styles.leadershipImpact}>LeaderShip Impact</div>
    </div>
  );
};

export default Batches;

