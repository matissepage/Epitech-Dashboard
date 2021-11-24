import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--topbar-height);
`

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
`

export const TopBarItem = styled.div`
  padding-right: 30px;
`
export const ProfileImg = styled.img`
  width: 10%;
`

export const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  &:hover {
    background-color: var(--second-bg);
  }
  &:i {
    margin-right: 20px;
    font-size: 1.5rem;
  }
`

export const TB_RightUser = styled.div`
  display: flex;
  align-items: center;
`

export const TB_RightUserImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  &:img {
    width: 100%;
  }
`

export const TB_RightUserName = styled.div`
  font-size: 1rem;
  font-weight: 600;
`
