import React, { useState } from "react";
import "antd/dist/antd.css";
import { UserOutlined, CompassOutlined, HomeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, Breadcrumb } from "antd";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

const logo = require("../assets/img/airbnb-logo(white).png");

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items = [
  getItem("Quản lý người dùng", "/admin/users", <UserOutlined />),
  getItem("Quản lý vị trí", "/admin/locations", <CompassOutlined />),
  getItem("Quản lý thông tin phòng", "/admin/rooms", <HomeOutlined />),
];

type Props = {};

export default function AdminTemplate({}: Props) {
  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" style={{ height: "60px" }}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "100px", padding: "15px 0 15px 15px" }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          onClick={({ key }) => navigate(key)}
          selectedKeys={[location.pathname]}
        ></Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
