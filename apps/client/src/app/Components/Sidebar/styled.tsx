import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: #222338;
`;

export const SidebarNav = styled.div`
    width: 250px;
    height: 100vh;
    background-color: #222338;
    position: fixed;
    top: 0;
    left: 0;
    transition: 350ms;
`;

export const TitleText = styled.div`
  color: white;
  font-size: 1.3em;
  text-align: center;
  font-weight: bold;
  margin-top: 35px;
  margin-left: 10px;
  float: left;
  justify-content: center;
`

export const Text = styled.div`
  color: #6e747d;
  font-size: 1.1em;
  text-align: center;
  top: 45;
`

export const ProfileImg = styled.img`
  width: 20%;
  display: inline;
  margin-top: 27px;
  margin-left: 34px;
  align-items: middle;
  float: left;
`


const SidebarWrap = styled.div``;