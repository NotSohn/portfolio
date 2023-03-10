import React from "react";
import { motion } from "framer-motion";
import pageTransition from "../../styles/pageVariant";
import pageVariant from "../../styles/pageVariant";
import {
  MobileFirstIntroduction,
  StyleSelfShot,
  MobileSkillList,
  DesktopSkillList,
  BulletPoint,
  DesktopHobbies,
  MobileFirstPrompt,
  MobileFirstSkills,
} from "../../styles/RouteStyle/Home.style";
import {
  Background,
  HomeContainer,
} from "../../styles/RouteStyle/GlobalBackground.style";
import "../../resources/resume.json";
import { Typography } from "@mui/material";
import SelfShot1 from "../../resources/selfshot1.jpg";
import SelfShot from "../../resources/selfshot.png";

function Home() {
  return (
    <motion.div
      className="home"
      initial="in"
      animate="ani"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <Background />
      <HomeContainer>
        <StyleSelfShot src={SelfShot1} />
        <MobileFirstIntroduction />
        <MobileFirstPrompt />
        <MobileFirstSkills>Programming Languages</MobileFirstSkills>
        <MobileFirstSkills>Skills</MobileFirstSkills>
        <BulletPoint>
          <DesktopSkillList>JavaScript</DesktopSkillList>
          <DesktopSkillList>TypeScript</DesktopSkillList>
          <DesktopSkillList>C</DesktopSkillList>
          <DesktopSkillList>C++</DesktopSkillList>
          <DesktopSkillList>Java</DesktopSkillList>
          <DesktopSkillList>Python</DesktopSkillList>
          <DesktopSkillList>Intel x86_64 YASM Assembly</DesktopSkillList>
        </BulletPoint>
        <BulletPoint>
          <DesktopSkillList>ReactJS</DesktopSkillList>
          <DesktopSkillList>Shellscript</DesktopSkillList>
          <DesktopSkillList>HTML</DesktopSkillList>
          <DesktopSkillList>CSS</DesktopSkillList>
          <DesktopSkillList>MaterialUI</DesktopSkillList>
          <DesktopSkillList>Styled Components</DesktopSkillList>
          <DesktopSkillList>PyQT/QTDesigner</DesktopSkillList>
          <DesktopSkillList>PySide6</DesktopSkillList>
          <DesktopSkillList>Github</DesktopSkillList>
        </BulletPoint>
        <MobileSkillList>Hobbies</MobileSkillList>
        <MobileSkillList>
          Current hobbies I like to do is playing video games, video editing,
          and Coding!
        </MobileSkillList>
      </HomeContainer>
    </motion.div>
  );
}

export default Home;
