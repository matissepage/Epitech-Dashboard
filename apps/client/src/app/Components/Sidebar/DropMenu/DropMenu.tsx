import { sizeWidth } from '@mui/system';
import React, { FC, Props, useState } from 'react';
import * as Styled from './../styled';

export interface MenuItem {
  title: string;
  path: string;
  id?: number;
  icon: any;
  iconOpened?: any;
  iconClosed?: any;
  subnav?: MenuItem[];
  display?: boolean,
}

type SidebarLinkProps = {
  item: MenuItem;
};

function handleClick() {
  return true
}

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
                <Styled.DropdownLink onClick={handleClick} key={index}>
                  {subnavItem.display = handleClick()}
                  {subnavItem.icon}
                  <Styled.SidebarLabel>{subnavItem.title}</Styled.SidebarLabel>
                </Styled.DropdownLink>
              );
          })}
    </>
  );
};
