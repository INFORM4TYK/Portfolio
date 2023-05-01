import styles from "./About.module.scss";
import WhatsApp from "../../public/whats.svg";
import Instagram from "../../public/insta.svg";
import Messenger from "../../public/messenger.svg";
import Git from "../../public/git.svg";
import TechImg from "../../public/tech.svg"
import LangImg from "../../public/lang.svg"
import SkillsImg from "../../public/skills.svg"
import Image from "next/image";
import Link from "next/link";

function About() {
  const about = "----ABOUT ME----".split("");
  const skills = "PERSONAL SKILLS".split("");
  const tech = "TECHNOLOGYS".split("");
  const lang = "LANGUAGES".split("");
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
          <a>
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
          <div >
            <h1>Hi!</h1>
            <p>
              My name is Kacper and this is my portfolio where you will find the
              work I have done, information about the technologies I use and you
              will be able to contact me using the contact form.My adventure
              with programming and website design started a year ago and since
              then I've been improving my skills in this industry all the time
              if you made the best browsing website you could to dream. If you
              are only interested or have more questions, you can contact me via
              the contact form or other contact forms provided. I am also open
              to cooperation and other job offers to which I respond as soon as
              possible.
            </p>
          </div>
        </section>
        <section className={styles.rightSec}>
          
          <div className={styles.skllsLeftSec}>
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
            <Image src={SkillsImg} alt="skills" />
            </div>
          </div>
          <div className={styles.skills}>
            <ul>
              <section>
                <label>
                  <li>Communication</li>
                </label>
                <label>
                  <li>Leadership</li>
                </label>
                <label>
                  <li>Problem-solving</li>
                </label>
              </section>
              <section>
                <label>
                  <li>Teamwork</li>
                </label>
                <label>
                  <li>Creativity</li>
                </label>
                <label>
                  <li>Multitasking</li>
                </label>
              </section>
            </ul>
          </div>
          <div className={styles.skllsLeftSec}>
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
            <div>
            <Image src={TechImg} alt="tech" />
            </div>
          </div>
          <div className={styles.skills}>
            <ul>
              <section>
                <label>
                  <li>HTML</li>
                </label>
                <label>
                  <li>CSS</li>
                </label>
                <label>
                  <li>SASS</li>
                </label>
                <label>
                  <li>JAVASCRIPT</li>
                </label>
              </section>
              <section>
                <label>
                  <li>REACT</li>
                </label>
                <label>
                  <li>NEXT JS</li>
                </label>
                <label>
                  <li>CONTENTFUL</li>
                </label>
              </section>
            </ul>
          </div>
          <div className={styles.skllsLeftSec}>
            <div>
            {lang.map((char, index) => {
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
             <Image src={LangImg} alt="lang" />
            </div>
          </div>
          <div className={styles.skills}>
            <ul>
              <section>
                <label>
                  <p>Polish</p>
                </label>
                <label>
                  <li>Native</li>
                </label>
              </section>
              <section>
                <label>
                  <p>English</p>
                </label>
                <label>
                  <li>Basic&nbsp;B2</li>
                </label>
              </section>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
export default About;
