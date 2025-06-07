import { ContactUs } from "../components/ContactUs/ContactUs";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { CarMainIcon } from "../icons/CarMainIcon";
import styles from "./page.module.scss";

const contactUs = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainCont}>
        <Header />
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <ContactUs />
          </div>
          <div className={styles.reportImageCont}>
            <CarMainIcon />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contactUs;
