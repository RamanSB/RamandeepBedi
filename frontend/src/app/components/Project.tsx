"use client";
import Paragraph from "antd/lib/typography/Paragraph";
import projectStyles from "./Project.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import { Card, Divider, Tag } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import fourCornersBanner from "../../../public/four-corners-banner.jpg";

const Project = ({
  children,
  title,
  technologies,
  url,
  srcImg,
  loomLink,
}: {
  children: React.ReactNode;
  title: string;
  technologies: string[];
  url: string;
  srcImg?: StaticImport;
  loomLink?: string;
}) => {
  const handleNavigateToProject = (
    ignored: React.MouseEvent<HTMLButtonElement>
  ) => {
    window.open(url, "_blank");
  };

  return (
    <Card className={projectStyles.projectContainer}>
      <Title
        level={2}
        style={{
          cursor: "pointer",
          width: "fit-content",
        }}
        onClick={handleNavigateToProject}
      >
        {title}
        <LinkOutlined style={{ marginLeft: "8px", color: "cornflowerblue" }} />
      </Title>
      <Paragraph>
        <Text type="secondary">{children}</Text>
      </Paragraph>
      {loomLink && (
        <iframe
          style={{ marginBottom: "8px" }}
          src={loomLink}
          allowFullScreen
        />
      )}
      {title === "Four Corners" && (
        <Image
          src={fourCornersBanner}
          alt=""
          width="300"
          height="150"
          style={{ marginBottom: "8px" }}
        />
      )}

      <Divider
        type="horizontal"
        style={{ margin: "2px auto 6px auto" }}
      ></Divider>
      <ul
        style={{
          paddingInline: "none",
          listStyleType: "none",
          lineHeight: "2.25em",
          width: "300px",
          marginBottom: "16px",
        }}
      >
        {technologies.map((item: string, idx: number) => (
          <li key={idx} style={{ display: "inline" }}>
            <Tag key={idx}>{item}</Tag>
          </li>
        ))}
      </ul>

      {srcImg && (
        <Image
          style={{ borderRadius: "2.5%" }}
          src={srcImg}
          alt={title}
          width={title === "Four Corners" ? 210 / 2.8 : 210}
          height={title === "Four Corners" ? 210 / 2.8 : 75}
        />
      )}
    </Card>
  );
};

export default Project;
