import React, {useRef} from 'react'
import {
  Button,
  Container,
  Badge,
  Content,
  Footer,
  Icon
} from './styled';

const clickOutsideRef = (content_ref: any, toggle_ref: any) => {
  document.addEventListener('mousedown', (e) => {
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle('active')
    } else {
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove('active')
      }
    }
  })
}

export const Dropdown = (props:any) => {

  const dropdown_toggle_el = useRef(null)
  const dropdown_content_el = useRef(null)

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el)
    
  return (
    <Container>
      <Button>
        {
          props.icon ? <Icon>{props.icon}</Icon> : ''
        }
        {
          props.badge ? <Badge >{props.badge}</Badge> : ''
        }
        {
          props.customToggle ? props.customToggle() : ''
        }
      </Button>
      <Content ref={dropdown_content_el}>
        {
          props.contentData && props.renderItems ? props.contentData.map((item:any, index:any) => props.renderItems(item, index)) : ''
        }
        {
          props.renderFooter ? (
            <Footer>
              {props.renderFooter()}
            </Footer>
          ) : ''
        }
      </Content>
    </Container>
  )
}

export const ProfileInfo = (props:any) => {

  return (
    <Container>
      {
        props.icon ? <Icon>{props.icon}</Icon> : ''
      }
      {
        props.badge ? <Badge >{props.badge}</Badge> : ''
      }
      {
        props.customToggle ? props.customToggle() : ''
      }
    </Container>
  )
}