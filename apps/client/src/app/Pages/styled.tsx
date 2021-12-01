import styled from 'styled-components'


export const Container = styled.div`
    padding-left: var(--sidebar-width);
`

export const Add = styled.div`
width: 30px;
height: 30px;
background-color: var(--second-bg);
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
`