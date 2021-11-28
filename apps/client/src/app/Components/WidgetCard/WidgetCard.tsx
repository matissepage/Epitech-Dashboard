import { AiFillAlipayCircle } from 'react-icons/ai'
import {
  WidgetCard, 
  WidgetCardIcon, 
  WidgetCardInfo, 
} from './styled'
import { Rnd } from 'react-rnd';

const style = {
  left: "150px",
  // marginLeft: "var(--sidebar-width)",
  // paddingLeft: "var(--sidebar-width)",
  height: "200px",
  width: "1000px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "var(--main-bg)",
  boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
  color: "var(--txt-color)",
}

export const Widget = (props: any) => {
  return (
      <Rnd
      style={style}
      minHeight={"150px"}
      minWidth={"300px"}>
        <WidgetCardIcon>
          <i>{props.icon}</i>
        </WidgetCardIcon>
        <WidgetCardInfo>
          <h4>{props.count}</h4>
          <span>{props.title}</span>
        </WidgetCardInfo>
      </Rnd>
  )
}
