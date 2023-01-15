import React from 'react'
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

import { PUBLIC_ROUTERS } from '../../routers';

import Styles from './styles.module.scss';

const { Sider, Content } = Layout;

type Props = {}

const convertRouterToMenuItem = () => {
  return PUBLIC_ROUTERS.map((item) => {
    return {
      key: item.path,
      icon: null,
      label: item.label
    }
  })
}

const LayoutComponent = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  }
  return (
    <div>
      <Layout>
        <Layout>
          <Sider className={Styles.sider}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[location.pathname]}
              items={convertRouterToMenuItem()}
              onClick={handleClick}
            />
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default LayoutComponent;