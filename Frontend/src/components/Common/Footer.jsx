import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.twemojicopyrightParent}>
      <img className={styles.twemojicopyrightIcon} alt="" src="twemoji:copyright.svg" />
      <div className={styles.copyright2025}>COPYRIGHT 2025</div>
      <div className={styles.proconnect}>PROCONNECT</div>
      <div className={styles.wwwproconnectcom}>WWW.PROCONNECT.COM</div>
      <div className={styles.contactUs}>CONTACT US</div>
      <div className={styles.termsAndCondition}>TERMS AND CONDITION</div>
      <div className={styles.byAccessingOr}>
        {`By accessing or using the Service, you confirm that you accept these Terms and Conditions and agree to abide by them. If you do not agree with any part of these Terms, you are prohibited from using the Service.`}
      </div>
      <div className={styles.yourUseOf}>
        Your use of the Service is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using the Service, you consent to the collection and use of your information as described in the Privacy Policy.
      </div>
      <div className={styles.raiUniversity}>Rai University</div>
      <div className={styles.worknixgmailcom}>Worknix@gmail.com</div>
      <div className={styles.xxxxxx}>888888XXXXXX</div>
      <div className={styles.httpyoutubeworknix}>HTTP://YOUTUBE/Worknix</div>
      <div className={styles.customerService24365}>Customer Service 24*365</div>
      <img className={styles.mynauilocationIcon} alt="" src="mynaui:location.svg" />
      <img className={styles.lineMdemailIcon} alt="" src="line-md:email.svg" />
      <img className={styles.ricustomerService2LineIcon} alt="" src="ri:customer-service-2-line.svg" />
      <img className={styles.iconoiryoutube} alt="" src="iconoir:youtube.svg" />
      <img className={styles.frameChild} alt="" src="Line 3.svg" />
    </div>
  );
};

export default Footer;
