import Contact from "../components/ContactForm/Contact";
import About from "../components/About/About";
import CustomHelmet from "../components/utils/CustomHelmet";
export default function Home() {
  return (
    <>
     <CustomHelmet/>
      <About />
      <Contact />
    </>
  );
}
