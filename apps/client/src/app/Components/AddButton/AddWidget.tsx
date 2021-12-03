import { sizeWidth } from '@mui/system';
import React, { FC, Props, useState } from 'react';
import { Dropdown } from '../DropDown/DropDown';
import { 
  Container,
  WidgetItem
} from './styled';
import { Link } from 'react-router-dom';
import google_services from './../../../assets/JsonData/google_services.json'

export interface WidgetItem {
  title: string;
  id?: number;
  icon: any;
  display?: boolean,
}

type WidgetLinkProps = {
  item: WidgetItem;
};

const renderUserMenu =(item: any, index:any) => (
  <Link to='/' key={index}>
    <WidgetItem>
      <i>{item.icon}</i>
      <span>{item.content}</span>
    </WidgetItem>
  </Link>
)

export const AddWidget: FC<WidgetLinkProps> = () => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Container>
        <Dropdown
            customToggle={() =>("+")}
            contentData={google_services}
            renderItems={(item:any, index:any) => renderUserMenu(item, index)}
          />
      </Container>
  )
    </>
  );
};