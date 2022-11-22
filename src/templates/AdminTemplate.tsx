import React, { useState } from "react";
import "antd/dist/antd.css";
import { UserOutlined, CompassOutlined, HomeOutlined, ProfileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

const logo = require("../assets/img/airbnb-logo(white).png");

const { Header, Content, Sider } = Layout;

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
  getItem("Users Management", "/admin/users", <UserOutlined />),
  getItem("Positions Management", "/admin/locations", <CompassOutlined />),
  getItem("Room Information Management", "/admin/rooms", <HomeOutlined />),
  getItem("Order Room Management", "/admin/bookings", <ProfileOutlined />),
];

type Props = {};

export default function AdminTemplate({}: Props) {
  const [collapsed, setCollapsed] = useState(true);

  const location = useLocation();

  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh", position: "relative" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ position: "absolute", minHeight: "100%", zIndex: "150" }}
      >
        <NavLink to="/"
          className="logo"
          style={{ height: "60px" }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: "100px",
              padding: "15px 0 15px 15px",
              cursor: "pointer",
            }}
          />
        </NavLink>
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          onClick={({ key }) => {
            navigate(key);
            setCollapsed(true);
          }}
          selectedKeys={[location.pathname]}
        ></Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Menu
            mode="inline"
            theme="dark"
            className="d-flex justify-content-end"
          >
            <button className="btn admin-toggles">
              <img
                src="https://i.pravatar.cc/200"
                alt="adminname"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </button>
            <button className="btn text-light">
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </Menu>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <div style={{ padding: "0 80px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Outlet />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
