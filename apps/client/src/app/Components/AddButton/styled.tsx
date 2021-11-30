import styled from "styled-components";

export const Container = styled.div`
width: 40px;
height: 40px;
background-color: var(--main-bg);
color: var(--txt-color);
border-radius: 50px;
font-size: 1.5rem;
font-style: bold;
margin-top: 30px;
margin-left: 1170px;
top: 300px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

export const WidgetItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  color: var(--main-bg);
  &:hover {
    background-color: var(--second-bg);
  }
  &:i {
    margin-right: 20px;
    font-size: 1.5rem;
  }
`