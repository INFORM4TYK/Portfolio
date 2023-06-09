import { motion } from "framer-motion";
function TextSpan({ children }) {
  const rubberBand = () => {
    return {
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.10,1)",
        "scale3d(1,1,1)",
      ],
    };
  };
  return <motion.span className='notranslate' whileHover={() => rubberBand()}>{children}</motion.span>;
}

export default TextSpan;
