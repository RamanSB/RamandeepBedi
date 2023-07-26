"use client";
import Paragraph from "antd/lib/typography/Paragraph";
import experienceStyles from "./Experience.module.css";
import { Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const Experience = ({
  role,
  company,
  startDate,
  description,
  endDate,
  team,
  logo,
}: {
  role: string;
  company: string;
  startDate: Date;
  description: string;
  endDate?: Date;
  team?: string;
  logo?: StaticImport;
}) => {
  return (
    <div className={experienceStyles.experienceContainer}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title level={3}>{company}</Title>
        <Image src={logo as StaticImport} alt="company" />
      </div>
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
