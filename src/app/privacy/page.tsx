import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Privacy } from "../components/Privacy/Privacy";
import { CarMainIcon } from "../icons/CarMainIcon";
import styles from "./page.module.scss";
const privacy = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainCont}>
        <Header />
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <Privacy />
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
export default privacy;
