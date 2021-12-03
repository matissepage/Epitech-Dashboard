import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  width: var(--sidebar-width);
  height: 100vh;
  background-color: var(--main-bg);
  position: fixed;
  top: 0;
  left: 0;
  transition: 350ms;
`;

export const TitleText = styled.div`
  color: var(--txt-color);
  font-size: 1.3em;
  text-align: center;
  font-weight: bold;
  margin-top: 35px;
  margin-left: 10px;
  float: left;
  justify-content: center;
`

export const Text = styled.div`
  color: var(--txt-color2);
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

export const SidebarWrap = styled.div`
  margin-top: 150px;
`;



export const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  font-size: 1.1rem;
  padding: 2rem;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: var(--second-bg);
    border-left: 4px solid var(--third-bg);
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 1rem;
`;

export const DropdownLink = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
  font-size: 1.125rem;
  padding-left: 3rem;
  text-decoration: none;
  color: var(--txt-color2);

  &:hover {
    background-color: var(--third-bg);
  }
`;