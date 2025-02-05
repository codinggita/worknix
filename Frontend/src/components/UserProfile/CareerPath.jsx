import React from 'react';
import styles from './CareerPath.module.css';

const CareerPath = () => {
  return (
    <div className={styles.careerPath}>
      <div className={styles.frameParent}>
        <div className={styles.skillsAndCompetenciesWrapper}>
          <b className={styles.skillsAndCompetencies}>Skills And Competencies</b>
        </div>
        <div className={styles.creativeDirectorParent}>
          <div className={styles.creativeDirector}>Creative Director</div>
          <div className={styles.years}>17 Oct 2023 - Present</div>
          <div className={styles.currentRoleWrapper}>
            <div className={styles.currentRole}>Current Role</div>
          </div>
        </div>
        <div className={styles.avpMarketingParent}>
          <div className={styles.creativeDirector}>AVP Marketing</div>
          <div className={styles.years}>4-6 Years</div>
          <div className={styles.employeUCan}>2 Employe  U Can Reach out to</div>
          <img className={styles.frameChild} alt="" src="Ellipse 5.png" />
          <img className={styles.frameItem} alt="" src="Ellipse 4.png" />
        </div>
        <div className={styles.level2Wrapper}>
          <div className={styles.level2}>Level 2</div>
        </div>
        <div className={styles.level3Wrapper}>
          <div className={styles.level2}>Level 3</div>
        </div>
      </div>
      <b className={styles.careerPath1}>Career Path</b>
    </div>
  );
};

export default CareerPath;
