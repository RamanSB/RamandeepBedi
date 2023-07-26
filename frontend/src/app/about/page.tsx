"use client";
import { Divider } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import aboutStyles from "./About.module.css";
import Script from "next/script";
import linkedInTile from "../../../public/linkedin-tile.svg";
import githubTile from "../../../public/github-tile.svg";
import stackoverflowTile from "../../../public/stackoverflow-tile.svg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <Script src="https://unpkg.com/@codersrank/activity@0.9.14/codersrank-activity.min.js" />
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
          style={{ fontFamily: "Nunito Sans", marginBottom: "32px" }}
        >
          About<Divider></Divider>
        </Title>
        <Paragraph
          style={{
            minWidth: "60%",
            width: "70%",
            fontFamily: "Nunito Sans",
            fontSize: "1.1em",
          }}
        >
          <AboutText />
        </Paragraph>
        <div>
          <Title
            style={{ fontFamily: "Nunito Sans", marginTop: "48px" }}
            level={2}
          >
            Developer Activity
          </Title>
          <codersrank-activity
            username="RamanSB"
            weeks="38"
            tooltip
            labels
            style={{ width: "1000px", marginTop: "36px" }}
          ></codersrank-activity>
          <div className={aboutStyles.platformIconsContainer}>
            <Image
              src={linkedInTile}
              alt=""
              width="64"
              height="64"
              onClick={(ignored: React.MouseEvent<HTMLImageElement>) =>
                window.open(
                  "https://www.linkedin.com/in/ramandeep-singh-bedi-043957a5/",
                  "_blank"
                )
              }
            />
            <Image
              src={stackoverflowTile}
              alt=""
              width="64"
              height="64"
              onClick={(ignored: React.MouseEvent<HTMLImageElement>) =>
                window.open(
                  "https://stackoverflow.com/users/5062825/ramansb",
                  "_blank"
                )
              }
            />
            <Image
              src={githubTile}
              alt=""
              width="64"
              height="64"
              onClick={(ignored: React.MouseEvent<HTMLImageElement>) =>
                window.open("https://github.com/RamanSB", "_blank")
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

const AboutText = () => {
  return (
    <>
      Hi I&apos;m Raman.
      <br />
      <br />
      Welcome to my corner of the internet where I share my journey of
      continuous learning, growth, and the occasional blog post about what
      I&apos;ve been up to.
      <br />
      <br />
      I began my career studying Physics at Imperial College London, where I
      discovered my passion for programming. This led me to the finance sector,
      working in regulatory tech at Goldman Sachs, specialising in trade
      reporting. Eager to explore the startup world, I joined OpenGamma, a
      company specialising in margin SaaS solutions. This gave me an invaluable
      insight into the dynamic environment of later-stage startups and their
      unique challenges.
      <br />
      <br />
      In November 2022, I decided to venture into entrepreneurship, exploring
      the world of Lean Learning and Minimum Viable Products. Alongside my
      co-founder Darrell Adjei, I received an offer from South Park Commons
      (SPC) and joined them as a founder fellow.
      <br />
      <br />
      This site is a repository of my insights, learnings, and reflections, and
      I hope it brings value to your journey, whether you&apos;re a budding
      entrepreneur or an experienced professional.
      <br />
      <br />
      Feel free to reach out to me at ramansb100@gmail.com if you&apos;re
      interested in discussing startups, innovation, or just want to bounce
      ideas around. I&apos;m always eager to learn, collaborate, and explore new
      perspectives.
      <br />
      <br />
      -Raman
    </>
  );
};

export default AboutPage;
