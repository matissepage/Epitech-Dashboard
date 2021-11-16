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
`

export const Text = styled.div`
  color: #6e747d;
  font-size: 1.1em;
  text-align: center;
  top: 45;
`


const SidebarWrap = styled.div``;