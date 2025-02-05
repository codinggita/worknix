import React from 'react';
import styles from './User_plate.module.css';

const User_plate = () => {
  return (
    <div className={styles.ellipseParent}>
      <img className={styles.frameChild} alt="" src="Ellipse 4.png" />
      <b className={styles.userName}>USER NAME</b>
      <div className={styles.seniorDeveloper}>SENIOR DEVELOPER</div>
      <div className={styles.ellipseGroup}>
        <img className={styles.frameItem} alt="" src="Ellipse 5.png" />
        <div className={styles.reportingTo}>Reporting to</div>
        <div className={styles.projectManager}>Project Manager</div>
        <div className={styles.mrKrishnaYadav}>Mr. Krishna Yadav</div>
      </div>
      <div className={styles.personalDetailsParent}>
        <b className={styles.personalDetails}>Personal Details</b>
        <div className={styles.xxxxx}>98356XXXXX</div>
        <div className={styles.usernamegmailcom}>username@gmail.com</div>
        <div className={styles.remote}>Remote</div>
        <img className={styles.tablerphoneIcon} alt="" src="tabler:phone.svg" />
        <img className={styles.icoutlineEmailIcon} alt="" src="ic:outline-email.svg" />
        <img className={styles.mingcutelocationLineIcon} alt="" src="mingcute:location-line.svg" />
      </div>
      <div className={styles.jobDetailsParent}>
        <b className={styles.jobDetails}>JOB Details</b>
        <div className={styles.seniorDeveloper1}>Senior Developer</div>
        <div className={styles.techwebDeveloper}>Tech/Web Developer</div>
        <div className={styles.icoutlineEmailIcon} />
        <div className={styles.jobTitle}>Job Title</div>
        <div className={styles.department}>Department</div>
      </div>
    </div>
  );
};

export default User_plate;
