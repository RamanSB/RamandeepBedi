"use client";
import Title from "antd/es/typography/Title";
import skillsStyles from "../components/Skills.module.css";

const SkillsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        minHeight: "100%",
        padding: "16px",
        margin: "5% auto auto 24px",
        maxWidth: "1600px",
        width: "1400px",
      }}
    >
      <Title
        level={1}
        style={{ fontFamily: "Nunito Sans", marginBottom: "64px" }}
      >
        Skills
      </Title>
      <div className={skillsStyles.toolsContainer}></div>
      <div className={skillsStyles.certificationContainer}></div>
    </div>
  );
};

export default SkillsPage;
