import styled from "styled-components";


export const Container = styled.div `
  position: relative;
  z-index: 99;
`

export const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  position: relative;
`

export const Icon = styled.i`
  font-size: 2.5rem;
  color: var(--txt-color2);
`

export const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -12px;
  right: -10px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: var(--main-bg);
  color: var(--txt-color);
  font-size: 0.8rem;
`

export const Content = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  width: max-content;
  max-width: 400px;
  background-color: vaR(--main-bg);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  overflow: hidden;
  transform-origin: top right;
  transform: scale(0);
  transition: transform 0.3s ease 0s;
  &:active {
    transform: scale(1);
    transition: transform 0.5s var(--transition-cubic);
  }
`

export const Footer = styled.div`
  padding: 20px;
  text-align: center;
`