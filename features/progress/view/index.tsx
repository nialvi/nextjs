import styles from "../../../styles/progressBar.module.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.wrapperProgressBar}>
      <h1 className={styles.header}>{progress}%</h1>

      <div className={styles.wrapperBar}>
        <div
          className={styles.bar}
          style={{ width: `${progress.toFixed()}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
