import styles from "./Header.module.scss";
import TextSpan from "../utils/TextSpan";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

function Header() {
  useEffect(() => {
    Aos.init();
  }, []);
  const firstName = "KACPER".split("");
  const smallHead = "Front-end Developer".split("");
  const lastName = "WOŹNICKI".split("");
  return (
    <nav className={styles.container}>
      <main className={styles.main}>
        <section data-aos='fade-left' className={styles.mainText}>
          {firstName.map((letter, index) => {
            return <TextSpan key={index}>{letter}</TextSpan>;
          })}
        </section>
        <section data-aos='fade-right' className={styles.secondText}>
          {smallHead.map((letter, index) => {
            if (letter === " ") {
              return <TextSpan key={index}>&nbsp;</TextSpan>;
            } else {
              return (
                <TextSpan
                  key={index}
                  className={styles.nowrap}
                >
                  {letter}
                </TextSpan>
              );
            }
          })}
        </section>
        <section  className={styles.mainText}>
          <section>
            <p className={styles.topSec}>&lt;h1&gt;</p>
          </section>
          {lastName.map((letter, index) => {
            return <TextSpan  key={index}>{letter}</TextSpan>;
          })}
          <section>
            <p className={styles.bottomSec}>&lt;/h1&gt;</p>
          </section>
        </section>
      </main>
    </nav>
  );
}

export default Header;
