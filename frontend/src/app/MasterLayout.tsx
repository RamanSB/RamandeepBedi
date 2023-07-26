"use client";

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Text from "antd/lib/typography/Text";
import { Layout, Menu, theme } from "antd";
import React from "react";
import masterLayoutStyles from "./MasterLayout.module.css";
import Title from "antd/es/typography/Title";
import { MenuInfo } from "rc-menu/lib/interface";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import Image from "next/image";
import myAvatar from "../../public/me-avatar.jpg";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
].map((icon, index) => {
  let label = "";
  switch (index) {
    case 0:
      label = "About";
      break;
    case 1:
      label = "Experience";
      break;
    case 2:
      label = "Projects";
      break;
    case 3:
      label = "Skills";
      break;
    case 4:
      label = "Blog";
      break;
    case 5:
      label = "Interests";
      break;
  }
  return {
    key: String(index + 1),
    icon: React.createElement(icon),
    label: label,
  };
});

const MasterLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router: AppRouterInstance = useRouter();

  const handleNavigationMenuClick = (event: MenuInfo) => {
    const pageTitle: string = event.domEvent.currentTarget.innerText;
    console.log(`Page Title: ${pageTitle}`);
    router.replace("/" + pageTitle.toLowerCase());
  };

  return (
    <Layout hasSider={true}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className={masterLayoutStyles.navbarIcon}>
          <Text className={masterLayoutStyles.navbarHeaderText}>
            Ramandeep Bedi
          </Text>
          <div>
            <Image
              src={myAvatar}
              alt=""
              width="144"
              height="144"
              style={{
                margin: "24px auto 16px auto",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={handleNavigationMenuClick}
        />
      </Sider>

      <Layout
        className="site-layout"
        style={{ marginLeft: 200, minHeight: "100vh" }}
      >
        <Content style={{ overflow: "auto" }}>{children}</Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "gainsboro",
          }}
        >
          ©2023 Ramandeep Bedi |{" "}
          <a href="mailto:your-email@example.com">Email</a> | Proudly Built from
          Scratch
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MasterLayout;
