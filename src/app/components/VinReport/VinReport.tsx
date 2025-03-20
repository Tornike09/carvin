import styles from "./VinReport.module.scss";
import { DocumentIcon } from "@/app/icons/DocumentIcon";
import { CarMainInfo } from "../CarMainInfo/CarMainInfo";
import { ReportOptions } from "../ReportOptions/ReportOptions";

export const VinReport = () => {
  return (
    <div className={styles.vinReport}>
      <div>
        <h1>Select the desired VIN Report</h1>
        <p>Online payment with any VISA Mastercard</p>
        <h3 className={styles.vin}>VIN: SALWR2VF1GA556677</h3>
        <CarMainInfo/>
        <div className={styles.hr}></div>
        <ReportOptions/>
        <div className={styles.buyReportCont}>
          <h3>Service Fee <span className={styles.finalPrice}>12€</span></h3>
          <button><DocumentIcon/><span>Buy your report</span></button>
          <div>
            <input type="checkbox" />
            <h4>
              Agree with <span>Terms & Conditions</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
