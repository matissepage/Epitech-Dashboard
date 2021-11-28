import { AiFillAlipayCircle } from 'react-icons/ai'
import {
  WidgetCard, 
  WidgetCardIcon, 
  WidgetCardInfo,
  WidgetCardContent,
  WidgetCardTop,
} from './styled';
import { IconType } from "react-icons/lib";
import React from 'react';
import Draggable from 'react-draggable';


interface Props {
  icon: IconType,
  count: string,
  title: string,
  child: () => JSX.Element,
}

export const Widget: React.FC<Props> = (props) => {
  return (
    <Draggable>
    <WidgetCard>
      <WidgetCardTop>
        <WidgetCardIcon>
          {React.createElement(props.icon)}
        </WidgetCardIcon>
        <WidgetCardInfo>
          <h4>{props.count}</h4>
          <span>{props.title}</span>
        </WidgetCardInfo>
      </WidgetCardTop>
      <WidgetCardContent>
        {props.child()}
      </WidgetCardContent>
    </WidgetCard>
    </Draggable>
  )
}
