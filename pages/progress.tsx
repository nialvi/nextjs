import { useState, useEffect } from "react";
import { getProgress } from "./progress/model";
import styles from "../styles/Progress.module.css";

const getYearProgers = () => {
  const startYearMs = new Date(
    `${new Date().getFullYear()}-01-01T00:00:00`
  ).getTime();
  const endYearMs = new Date(
    `${new Date().getFullYear()}-12-31T23:59:59`
  ).getTime();
  const nowMs = new Date().getTime();

  return getProgress(startYearMs, endYearMs, nowMs);
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
      <div>
        <h1 className={styles.header}>{progress}%</h1>
      </div>
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
