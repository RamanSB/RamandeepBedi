"use client";
import Title from "antd/es/typography/Title";
import skillsStyles from "../components/Skills.module.css";
import nodeJsLogo from "../../../public/nodejs-logo.svg";
import javaLogo from "../../../public/java-icon.svg";
import reactLogo from "../../../public/reactjs-icon.svg";
import nextJsLogo from "../../../public/nextjs-icon-svgrepo-com.svg";
import mongoDbLogo from "../../../public/mongodb-icon.svg";
import solidityLogo from "../../../public/solidity-icon.svg";
import Image from "next/image";
import oracleAssociateCert from "../../../public/java-associate-cert.png";
import oracleProfessionalCert from "../../../public/java-professional-cert.png";
import awsCloudPractitionerCert from "../../../public/cloud-practitioner-cert.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import { Divider } from "antd";

const programmingLanguages = ["Java", "NodeJS", "Solidity"];
const tools = ["React", "NextJS", "MongoDB"];
const technologies = programmingLanguages.concat(tools);
const certifications = [
  "Java - Oracle Associate",
  "Java - Oracle Professional",
  "AWS - Cloud Practitioner",
];

const imageMap: Map<string, StaticImport> = new Map([
  ["NodeJS", nodeJsLogo],
  ["Java", javaLogo],
  ["Solidity", solidityLogo],
  ["React", reactLogo],
  ["NextJS", nextJsLogo],
  ["MongoDB", mongoDbLogo],
  [certifications[0], oracleAssociateCert],
  [certifications[1], oracleProfessionalCert],
  [certifications[2], awsCloudPractitionerCert],
]);

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
        <Divider></Divider>
      </Title>
      <div className={skillsStyles.toolsContainer}>
        <Title level={2} type="secondary" style={{ fontFamily: "Nunito Sans" }}>
          Programming Languages & Tools
        </Title>
        <div>
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            {technologies.map((tech, idx) => {
              return (
                <li
                  style={{ display: "inline", marginRight: "16px" }}
                  key={idx}
                >
                  <Image src={imageMap.get(tech) as StaticImport} alt={tech} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={skillsStyles.certificationContainer}>
        <Title level={2} type="secondary" style={{ fontFamily: "Nunito Sans" }}>
          Certifications
        </Title>
        <div>
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            {certifications.map((cert, idx) => {
              return (
                <li
                  style={{ display: "inline", marginRight: "16px" }}
                  key={idx}
                  onClick={(ignored: React.MouseEvent) => {
                    let link;
                    switch (cert) {
                      case "Java - Oracle Associate":
                        link =
                          "https://www.credly.com/badges/6462b9ab-69a6-4570-9b17-3eaf6c84ec02/linked_in_profile";
                        break;
                      case "Java - Oracle Professional":
                        link =
                          "https://www.credly.com/badges/a365d593-511c-4ca7-a19b-462fd164d773?source=linked_in_profile";
                        break;
                      case "AWS - Cloud Practitioner":
                        link =
                          "https://www.credly.com/badges/6dff2d2f-9a6e-4775-8a07-b3f0856902d5/linked_in_profile";
                        break;
                      default:
                        throw new Error(`Unknown certification: ${cert}`);
                    }

                    window.open(link, "_blank");
                  }}
                >
                  <Image
                    style={{ cursor: "pointer" }}
                    src={imageMap.get(cert) as StaticImport}
                    alt={cert}
                    width="224"
                    height="224"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
