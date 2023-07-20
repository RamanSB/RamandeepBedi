"use client";
import Paragraph from "antd/lib/typography/Paragraph";
import experienceStyles from "./Experience.module.css";
import { Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";

const Experience = ({
  role,
  company,
  startDate,
  description,
  endDate,
  team,
}: {
  role: string;
  company: string;
  startDate: Date;
  description: string;
  endDate?: Date;
  team?: string;
}) => {
  return (
    <div className={experienceStyles.experienceContainer}>
      <Title level={3}>{company}</Title>
      <div className={experienceStyles.roleAndTenureContainer}>
        <Text style={{ fontFamily: "Nunito Sans", fontSize: "1.4em" }}>
          {role}
        </Text>
        <Text
          style={{
            fontFamily: "Nunito Sans",
            letterSpacing: "0.1ch",
            fontSize: "1.3em",
          }}
        >
          {startDate.toLocaleDateString("default", {
            year: "2-digit",
            month: "short",
          })}{" "}
          -{" "}
          {endDate
            ? endDate.toLocaleDateString("default", {
                year: "2-digit",
                month: "short",
              })
            : "Present"}
        </Text>
      </div>
      <Space />
      <Paragraph
        italic
        type="secondary"
        style={{ marginTop: "12px", fontSize: "1.2em" }}
      >
        {description}
      </Paragraph>
      <Paragraph type="secondary" style={{ fontSize: "1.2em" }}>
        {team}
      </Paragraph>
    </div>
  );
};

export default Experience;
