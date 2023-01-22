import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { UiContext } from "../../context/ui-context";

const { Sider, Content } = Layout;

export function MainLayout({ children }) {
  const navigate = useNavigate();
  const { isSiderCollapsed } = React.useContext(UiContext);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider trigger={null} collapsible hidden={isSiderCollapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Access",
              onClick: () => navigate("/access"),
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Queue",
              onClick: () => navigate("/queue"),
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Create Ticket",
              onClick: () => navigate("/create-ticket"),
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
