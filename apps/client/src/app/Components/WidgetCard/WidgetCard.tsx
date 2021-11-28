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
import { Rnd } from 'react-rnd';


interface Props {
  icon: IconType,
  count: string,
  title: string,
  child: () => JSX.Element,
}

const style = {
  padding: "30px",
  height: "fit-content",
  width: "300px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "var(--main-bg)",
  boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
  position: "relative",
  overflow: "hidden",
  zIndex: 1,
  transition: "color 0.5s ease 0s",
  marginBottom: "30px",
  marginLeft: "250px",
  color: "var(--txt-color)"
} as const

export const Widget: React.FC<Props> = (props) => {
  return (
    <Rnd
    style={style}>
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
    </Rnd>
  )
}
