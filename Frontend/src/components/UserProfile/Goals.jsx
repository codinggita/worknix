import React from 'react';
import styles from './Goals.module.css';

const Goals = () => {
  return (
    <div className={styles.goals}>
      <b className={styles.goals1}>Goals</b>
      <div className={styles.improveDeliveryEffecient}>Improve Delivery Effecient</div>
      <div className={styles.enableTeamCollabration}>Enable Team Collabration</div>
      <div className={styles.reduceDelieverTime}>Reduce Deliever Time by 20%</div>
      <div className={styles.reduceDeliveryCost}>Reduce Delivery Cost by 20%</div>
      <div className={styles.increaseDeliverysBy}>Increase Deliverys by 20%</div>
      <img className={styles.materialSymbolsLightcircleIcon} alt="" src="material-symbols-light:circle.svg" />
      <img className={styles.materialSymbolsLightcircleIcon1} alt="" src="material-symbols-light:circle.svg" />
      <img className={styles.mingcutetimeLineIcon} alt="" src="mingcute:time-line.svg" />
      <img className={styles.nimbusmoneyIcon} alt="" src="nimbus:money.svg" />
      <img className={styles.systemUiconsgraphIncrease} alt="" src="system-uicons:graph-increase.svg" />
      <img className={styles.riteamLineIcon} alt="" src="ri:team-line.svg" />
      <img className={styles.rieBike2FillIcon} alt="" src="ri:e-bike-2-fill.svg" />
      <div className={styles.tablerarrowUpParent}>
        <img className={styles.tablerarrowUpIcon} alt="" src="tabler:arrow-up.svg" />
        <div className={styles.div}>8%</div>
      </div>
      <div className={styles.parent}>
        <div className={styles.div}>3%</div>
        <img className={styles.tablerarrowUpIcon1} alt="" src="tabler:arrow-up.png" />
      </div>
      <img className={styles.weuiarrowFilledIcon} alt="" src="weui:arrow-filled.png" />
      <img className={styles.weuiarrowFilledIcon1} alt="" src="weui:arrow-filled.png" />
    </div>
  );
};

export default Goals;

