import React from "react";
import { Avatar, Menu, Icon, Switch, Button, Affix } from "antd";

export default function NavBar({
  theme,
  setTheme,
  handleIsSideNavCollapsed,
  isSideNavCollapsed
}) {
  const state = {
    current: "mail"
  };

  function changeTheme(value) {
    setTheme(value ? "dark" : "light");
  }

  return (
    <Affix>
      <Menu selectedKeys={[state.current]} theme={theme} mode="horizontal">
        <Menu.Item className="no-hover" key="navBarCollapse">
          <Button
            type="primary"
            onClick={handleIsSideNavCollapsed}
            // style={{ padding: `.75rem` }}
          >
            <Icon
              style={{ margin: 0 }}
              type={isSideNavCollapsed ? "menu-unfold" : "menu-fold"}
            />
          </Button>
        </Menu.Item>
        <Menu.Item className="no-hover">
          <h2 style={{ margin: 0 }}>Dashboard</h2>
        </Menu.Item>

        <Menu.Item key="mail">
          <Icon type="mail" />
          Navigation One
        </Menu.Item>

        <Menu.Item key="app" disabled>
          <Icon type="appstore" />
          Navigation Two
        </Menu.Item>
        <Menu.SubMenu
          title={
            <span className={`submenu-title-wrapper`}>
              <Icon type="setting" />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        </Menu.Item>

        <Menu.Item key="avatar" style={{ float: "right" }}>
          <Avatar icon="user" style={{ margin: 0 }} />
        </Menu.Item>
        <Menu.Item key="theme" style={{ float: "right" }}>
          <Switch
            checked={theme === "dark"}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </Menu.Item>
      </Menu>
    </Affix>
  );
}
