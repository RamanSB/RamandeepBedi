"use client";
import Text from "antd/lib/typography/Text";
import Title from "antd/es/typography/Title";
import { Space } from "antd";
import Experience from "../components/Experience";
import experienceStyles from "../components/Experience.module.css";

const ExperiencePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        minHeight: "100%",
        padding: "16px",
        margin: "5% auto auto 24px",
      }}
    >
      <Title
        level={1}
        style={{ fontFamily: "Nunito Sans", marginBottom: "64px" }}
      >
        Experience
      </Title>

      {/* TODO: Add company Logos & Links} */}
      <div className={experienceStyles.experienceItemContainer}>
        <Experience
          company="South Park Commons"
          role="Founder Fellow"
          startDate={new Date("April 2023")}
          description="Building something great..."
          team="Founder"
        />

        <Experience
          company="OpenGamma"
          role="Java - Software Engineer"
          startDate={new Date("March 2021")}
          endDate={new Date("January 2023")}
          description="Software Engineer worked on the development of Margin Features & Client Onboarding."
          team="Margin Analytics, SaaS"
        />

        <Experience
          company="Goldman Sachs"
          role="Java - Software Engineer"
          startDate={new Date("July 2018")}
          endDate={new Date("February 2021")}
          description="Backend software engineer in the Securities division, Trade reporting."
          team="Regulatory Engineering, Technology"
        />
      </div>
    </div>
  );
};

export default ExperiencePage;
