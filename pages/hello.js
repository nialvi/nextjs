import Head from "next/head";
import styles from "../styles/Hello.module.css";

export default function Hello() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello world!</h1>

      <p>My name is Viktor and I am a frontend developer.</p>
    </div>
  );
}
