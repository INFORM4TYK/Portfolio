import styles from "./About.module.scss";
import WhatsApp from "../../images/whats.svg";
import Instagram from "../../images/insta.svg";
import Messenger from "../../images/Messenger.svg";
import Git from "../../images/git.svg";
import Image from "next/image";
import Link from "next/link";

function About() {
  const about = "----ABOUT ME----".split("");
  const skills = "PERSONAL SKILLS".split("");
  const tech = "TECHNOLOGYS".split("");
  return (
    <main className={styles.container}>
      <section className={styles.navSec}>
        <Link href="https://wa.me/48793094929" legacyBehavior>
          <a target="_blank">
            <Image src={WhatsApp} alt="WhatsApp" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/k_woznicki/" legacyBehavior>
          <a target="_blank">
            <Image src={Instagram} alt="Insagram" />
          </a>
        </Link>
        <section className={styles.mainText}>
          {about.map((char, index) => {
            if (char === " ") {
              return <span key={index}>&nbsp;</span>;
            } else {
              return (
                <span key={index} className={styles.nowrap}>
                  {char}
                </span>
              );
            }
          })}
        </section>
        <Link href="" legacyBehavior>
          <a href="">
            <Image src={Messenger} alt="Messenger" target="_blank" />
          </a>
        </Link>
        <Link href="https://github.com/INFORM4TYK" legacyBehavior>
          <a target="_blank">
            <Image src={Git} alt="Insagram" />
          </a>
        </Link>
      </section>
      <section className={styles.aboutSec}>
        <section className={styles.leftSec}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              nihil voluptatem. Iure alias distinctio, amet dolorem
              reprehenderit, commodi atque ipsam esse fugiat corporis neque
              omnis facilis quos? Voluptatibus temporibus repellendus corporis
              facere, dolorem, corrupti neque veritatis amet illum, laborum
              quasi voluptate! Ipsa quaerat sequi accusantium eligendi et,
              aspernatur dolorum doloremque, voluptas nobis ut id itaque.
              Deserunt obcaecati assumenda architecto eos vel, commodi error
              dicta ipsam. Maxime fugit eveniet in quas quod possimus rem
              voluptate commodi magni voluptatibus. Nemo, harum, laborum in
              eaque magni totam laboriosam reprehenderit animi dignissimos
              commodi voluptatum quasi unde? Dignissimos, reiciendis nulla esse
              obcaecati numquam illum ea?
            </p>
          </div>
        </section>
        <section className={styles.navSec2}>
          <div>
            {skills.map((char, index) => {
              if (char === " ") {
                return <span key={index}>&nbsp;</span>;
              } else {
                return (
                  <span key={index} className={styles.nowrap}>
                    {char}
                  </span>
                );
              }
            })}
          </div>
          <div>
            {tech.map((char, index) => {
              if (char === " ") {
                return <span key={index}>&nbsp;</span>;
              } else {
                return (
                  <span key={index} className={styles.nowrap}>
                    {char}
                  </span>
                );
              }
            })}
          </div>
        </section>
        <section className={styles.rightSec}>
          <div className={styles.skills}>
            <ul>
              <label>
                <li>Komunikacja</li>
              </label>
              <label>
                <li>Kreatywność</li>
              </label>
              <label>
                <li>Organizacja</li>
              </label>
              <label>
                <li>Liderowanie</li>
              </label>
              <label>
                <li>Adaptyjność</li>
              </label>
              <label>
                <li>Empatia</li>
              </label>
            </ul>
          </div>
          <div className={styles.skills}>
            <ul>
              <label>
                <li>Komunikacja</li>
              </label>
              <label>
                <li>Kreatywność</li>
              </label>
              <label>
                <li>Organizacja</li>
              </label>
              <label>
                <li>Liderowanie</li>
              </label>
              <label>
                <li>Adaptyjność</li>
              </label>
              <label>
                <li>Empatia</li>
              </label>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
export default About;
