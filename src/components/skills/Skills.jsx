import { motion, useScroll, useSpring } from "framer-motion";
import "./skills.scss";
import { useRef } from "react";
// import { TiHtml5 } from "react-icons/ti";

const bigSkillsArr = [
  "HTML",
  "CSS",
  "Javascript",
  "TypeScript",
  "Reactjs",
  "NextJs",
];
const smSkillsArr = [
  "Redux",
  "React Query",
  "Supabase",
  "Firebase",
  "React Hook Form",
  "Jest",
  "React testing tool",
  "Vite",
  "Git",
  "Github",
  "ES6",
  "SCSS",
  "Styled components"
];

export const rightSideVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
export const leftSideVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Skills() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="skills" ref={ref}>
      <div className="progress">
        <h1>Skills</h1>
        <div className="progressBar"></div>
      </div>

      <div className="dev">
        <motion.div
          className="bigSkills"
          variants={rightSideVariants}
          initial="initial"
          animate="animate"
        >
          {bigSkillsArr.map((it) => (
            <div key={it} className="bigSkill">
              {it}
            </div>
          ))}
        </motion.div>
        <motion.div
          className="smSkills"
          variants={leftSideVariants}
          initial="initial"
          animate="animate"
        >
          {smSkillsArr.map((it) => (
            <div key={it} className="smSkill">
              {it}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
