import styles from "./About.module.scss";
import WhatsApp from "../../images/whats.svg";
import Instagram from "../../images/insta.svg";
import Messenger from "../../images/Messenger.svg";
import Git from "../../images/git.svg";
import Image from "next/image";

function About() {
  const about = "----ABOUT ME----".split("");
  return (
    <main className={styles.container}>
      <section className={styles.navSec}>
        <a href="https://wa.me/48793094929" target="_blank">
          <Image src={WhatsApp} alt="WhatsApp" />
        </a>
        <a href="https://www.instagram.com/k_woznicki/" target="_blank">
          <Image src={Instagram} alt="Insagram" />
        </a>
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
        <a href="">
          <Image src={Messenger} alt="Messenger" target="_blank"/>
        </a>
        <a href="https://github.com/INFORM4TYK" target="_blank">
          <Image src={Git} alt="Insagram" />
        </a>
      </section>
      <section className={styles.aboutSec}>
        <div className={styles.aboutText}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae enim fugit nam facere sunt, sit provident. Suscipit, maxime minima. Iste impedit molestias dicta mollitia optio, excepturi ut voluptates aut iure amet quae ab debitis eaque reiciendis maiores officia, accusamus tempora facere corrupti ad in. Rem nostrum illo ipsam molestiae consequuntur doloribus nihil officia aliquam</p>
        </div>
        <div className={styles.skills}>
          <p>Personal skills</p>
          <ul>
            <li>Komunikacja</li>
            <li>Kreatywność</li>
            <li>Organizacja</li>
            <li>Liderowanie</li>
            <li>Adaptyjność</li>
            <li>Empatia</li>
          </ul>
        </div>
      </section>
      

    </main>
  );
}
export default About;
