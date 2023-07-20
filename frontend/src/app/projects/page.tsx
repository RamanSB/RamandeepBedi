"use client";
import Text from "antd/lib/typography/Text";
import Title from "antd/es/typography/Title";
import { Space } from "antd";
import Experience from "../components/Experience";
import canalisLogo from "../../../public/canalis-logo-with-text.jpg";
import fourCornersLogo from "../../../public/four-corners.jpeg";
import projectStyles from "../components/Project.module.css";
import Project from "../components/Project";
import { Pagination } from "antd";
import queryAiLogo from "../../../public/query-ai-logo-with-text.jpg";

const ProjectPage = () => {
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
        Projects
      </Title>

      <div className={projectStyles.projectsContainer}>
        <Project
          title="Canalis"
          srcImg={canalisLogo}
          technologies={[
            "GCP",
            "NodeJS",
            "Express",
            "React",
            "NextJS",
            "Docker",
          ]}
          url="https://www.canalis.ai"
          loomLink="https://www.loom.com/embed/40b0355874194f428bf23eef836be864?sid=1eba1802-0c15-4c5b-9458-f593bb1fdb76"
        >
          Data Ingestion platform for LLMs.
        </Project>

        <Project
          title="QueryAI"
          technologies={[
            "GCP",
            "NodeJS",
            "Express",
            "React",
            "NextJS",
            "Docker",
          ]}
          srcImg={queryAiLogo}
          url="https://www.usequery.ai"
          loomLink="https://www.loom.com/embed/31935e4c85e049eb8216bfdc38240e56?sid=6247cb25-6f92-48a4-b36a-087abbd3024f"
        >
          Automated customer service assistant.
        </Project>

        <Project
          title="Four Corners"
          technologies={["Java", "XML", "App Development", "Android"]}
          url="https://play.google.com/store/apps/details?id=ramansb.fourcorners"
          srcImg={fourCornersLogo}
        >
          Android Gaming App on the Google Playstore.
          <br />
          Received over 1000+ Installs.{" "}
        </Project>
      </div>
      <Pagination
        defaultCurrent={1}
        pageSize={9}
        style={{ textAlign: "center" }}
      />
    </div>
  );
};

export default ProjectPage;
