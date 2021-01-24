import { useState, useEffect } from "react";
import { getProgressPercent } from "../features/progress/model";
import ProgressBar from "../features/progress/view";
import styles from "../styles/Progress.module.css";

const getYearProgers = () => {
  const startYearMs = new Date(
    `${new Date().getFullYear()}-01-01T00:00:01`
  ).getTime();
  const endYearMs = new Date(
    `${new Date().getFullYear()}-12-31T23:59:59`
  ).getTime();
  const nowMs = new Date().getTime();

  return getProgressPercent({
    now: nowMs - startYearMs,
    full: endYearMs - startYearMs,
  });
};

function Progress(props) {
  const { initialProgress } = props;
  const [progress, setDate] = useState(initialProgress);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(getYearProgers());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className={styles.container}>
      <ProgressBar progress={progress} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      initialProgress: getYearProgers(),
    },
  };
}

export default Progress;
