import { AiFillAlipayCircle } from 'react-icons/ai'
import {
  WidgetCard, 
  WidgetCardIcon, 
  WidgetCardInfo, 
} from './styled'
import Draggable from 'react-draggable';


export const Widget = (props: any) => {
  return (
    <Draggable>
    <WidgetCard>
          <WidgetCardIcon>
            <i>{props.icon}</i>
          </WidgetCardIcon>
          <WidgetCardInfo>
            <h4>{props.count}</h4>
            <span>{props.title}</span>
          </WidgetCardInfo>
    </WidgetCard>
    </Draggable>
  )
}
