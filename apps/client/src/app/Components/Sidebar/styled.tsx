import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
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
    background-color: #4F46BA;
    border-left: 4px solid #FF4267;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 1rem;
`;

export const DropdownLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
  font-size: 1.125rem;
  padding-left: 3rem;
  text-decoration: none;
  color: #6c737a;

  &:hover {
    background-color: #FF4267;
  }
`;