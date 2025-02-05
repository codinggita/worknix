import React from 'react';
import styles from './Overtime.module.css';

const Overtime = () => {
  return (
    <div className={styles.overtime}>
      <div className={styles.ellipseParent}>
        <img className={styles.frameChild} alt="" src="Ellipse 5.png" />
        <div className={styles.mrjohnSen}>Mr.John Sen</div>
        <div className={styles.date}>Date</div>
        <div className={styles.reason}>Reason</div>
        <div className={styles.approve}>Approve</div>
        <div className={styles.reject}>Reject</div>
        <div className={styles.salesManger}>Sales Manager</div>
        <div className={styles.stJunemonday600Pm}>1st June, Monday (6:00 PM - 8:00 PM)</div>
        <div className={styles.workOverload}>Work Overload</div>
      </div>
      <div className={styles.ellipseGroup}>
        <img className={styles.frameChild} alt="" src="Ellipse 5.png" />
        <div className={styles.mrjohnSen}>Ameen Ahmed</div>
        <div className={styles.date}>Date</div>
        <div className={styles.reason}>Reason</div>
        <div className={styles.salesManger}>Product Manager</div>
        <div className={styles.stJunemonday600Pm}>1st June, Monday (6:00 PM - 8:00 PM)</div>
        <div className={styles.workOverload}>Work Overload</div>
        <div className={styles.reject1}>Reject</div>
        <div className={styles.approve1}>Approve</div>
        <img className={styles.frameInner} alt="" src="Line 18.svg" />
      </div>
      <div className={styles.ellipseContainer}>
        <img className={styles.frameChild} alt="" src="Ellipse 5.png" />
        <div className={styles.mrjohnSen}>Ameen Ahmed</div>
        <div className={styles.date}>Date</div>
        <div className={styles.reason}>Reason</div>
        <div className={styles.salesManger}>Product Manager</div>
        <div className={styles.stJunemonday600Pm}>1st June, Monday (6:00 PM - 8:00 PM)</div>
        <div className={styles.workOverload}>Work Overload</div>
        <div className={styles.reject1}>Reject</div>
        <div className={styles.approve1}>Approve</div>
        <img className={styles.frameInner} alt="" src="Line 18.svg" />
      </div>
      <img className={styles.overtimeChild} alt="" src="Line 18.svg" />
      <div className={styles.frameDiv}>
        <img className={styles.frameChild} alt="" src="Ellipse 5.png" />
        <div className={styles.mrjohnSen}>Mr.John Sen</div>
        <div className={styles.date}>Date</div>
        <div className={styles.reason}>Reason</div>
        <div className={styles.salesManger}>Sales Manager</div>
        <div className={styles.stJunemonday600Pm}>1st June, Monday (6:00 PM - 8:00 PM)</div>
        <div className={styles.workOverload}>Work Overload</div>
        <div className={styles.approve3}>Approve</div>
        <img className={styles.frameChild2} alt="" src="Line 18.svg" />
      </div>
      <div className={styles.overtimeRequst}>Overtime Request</div>
    </div>
  );
};

export default Overtime;
