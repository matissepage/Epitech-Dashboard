import React, { FC, useState } from 'react';
import * as Styled from './../styled';

export interface MenuItem {
  title: string;
  path: string;
  icon: any;
  iconOpened?: any;
  iconClosed?: any;
  subnav?: MenuItem[];
}

type SidebarLinkProps = {
  item: MenuItem;
};

export const Submenu: FC<SidebarLinkProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Styled.SidebarLink to={item.path} onClick={showSubnav}>
        <div>
          {item.icon}
            <Styled.SidebarLabel>{item.title}</Styled.SidebarLabel>
        </div>
        <div>{item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}</div>
          </Styled.SidebarLink>
            {subnav && item?.subnav?.map((subnavItem, index) => {
              return (
                <Styled.DropdownLink to={subnavItem.path} key={index}>
                  {subnavItem.icon}
                  <Styled.SidebarLabel>{subnavItem.title}</Styled.SidebarLabel>
                </Styled.DropdownLink>
              );
          })}
    </>
  );
};