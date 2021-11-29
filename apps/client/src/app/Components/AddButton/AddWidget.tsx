import { sizeWidth } from '@mui/system';
import React, { FC, Props, useState } from 'react';
import { 
  Container 
} from './styled'

export interface WidgetItem {
  title: string;
  id?: number;
  icon: any;
  display?: boolean,
}

type WidgetLinkProps = {
  item: WidgetItem;
};

export const AddWidget: FC<WidgetLinkProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Container onClick={showSubnav}>
        +
      </Container>
  )
    </>
  );
};