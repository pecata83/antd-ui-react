import React from "react";
import { Menu, Icon, Layout, Affix } from "antd";

export default function SideBar({ theme, setTheme, isSideNavCollapsed }) {
  return (
    <Affix offsetTop={49}>
      <Layout.Sider
        trigger={null}
        collapsible
        collapsed={isSideNavCollapsed}
        width={230}
        collapsedWidth={86}
        theme={theme}
        style={{ paddingBottom: 0, height: `100%` }}
      >
        <Menu
          theme={theme}
          // onClick={this.handleClick}
          defaultOpenKeys={["sub1"]}
          // selectedKeys={[this.state.current]}
          style={{ width: isSideNavCollapsed ? 86 : 230, height: `100%` }}
          mode="inline"
        >
          <Menu.SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.SubMenu key="sub3" title="Menu.SubMenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Sider>
    </Affix>
  );
}
