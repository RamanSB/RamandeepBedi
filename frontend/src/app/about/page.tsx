"use client";
import { Divider } from "antd";
import Title from "antd/es/typography/Title";

const AboutPage = () => {
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
        About<Divider></Divider>
      </Title>
    </div>
  );
};

export default AboutPage;
