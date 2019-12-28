import React, { useState } from "react";
import "antd/dist/antd.css";
import NavBar from "./components/NavBar";
import SideNav from "./components/SideBar";
import { createGlobalStyle } from "styled-components";
import { Layout } from "antd";
import Dashboard from "./containers/Dashboard";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.theme === "dark" ? "#07223c" : "#f6f6f6")};
  }
  .ant-layout{
    background: transparent
  }
  .ant-col > div {
    background: ${props => (props.theme === "dark" ? "#4473a2" : "#fff")};
  }
  h1, h2, h3, h4, h5, h6, p, .ant-form-item-label > label, .ant-form-text, .ant-checkbox-group, .ant-slider-mark-text-active, .ant-checkbox-wrapper, .ant-radio-wrapper {
    color: ${props => (props.theme === "dark" ? "#fff" : "#000")};
  }
`;

function App() {
  const [theme, setTheme] = useState("dark");
  const [isSideNavCollapsed, setIsSideNavCollapsed] = useState(false);

  const handleIsSideNavCollapsed = function() {
    setIsSideNavCollapsed(!isSideNavCollapsed);
    window.dispatchEvent(new Event("resize"));
  };

  return (
    <Layout>
      <GlobalStyle theme={theme} />
      <NavBar
        theme={theme}
        setTheme={setTheme}
        handleIsSideNavCollapsed={handleIsSideNavCollapsed}
        isSideNavCollapsed={isSideNavCollapsed}
      />
      <Layout>
        <SideNav
          isSideNavCollapsed={isSideNavCollapsed}
          theme={theme}
          setTheme={setTheme}
        />
        <Dashboard theme={theme} />
      </Layout>
    </Layout>
  );
}

export default App;
