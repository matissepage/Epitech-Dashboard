import styled from "styled-components";

export const WidgetCard = styled.div`
  padding: 30px;
  height: 50px;
  width: 300px;
  display: flex;
  align-items: center;
  background-color: var(--second-bg);
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s ease 0s;
  margin-bottom: 30px;
  margin-left: 250px;
  &:before {
    content: "";
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;
    background-image: linear-gradient(
      to top right,
      #4F46BA,
      #222338
    );
    position: absolute;
    left: -50%;
    top: 0;
    transform: scale(0);
    transition: transform 0.8s ease 0s;
  }

  &:hover:before {
    transform: scale(3);
  }

  &:hover {
    color: var(--txt-color);
  }
`;

export const WidgetCardIcon = styled.div`
  width: 30%;
  height: 100%;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const WidgetCardInfo = styled.div`
  flex-grow: 1;
  text-align: center;
  z-index: 1;
  text-transform: capitalize;
`