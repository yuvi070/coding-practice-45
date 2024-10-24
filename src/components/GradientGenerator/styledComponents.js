// Style your elements here
import styled from 'styled-components'

export const Home = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
`
export const MainHeading = styled.h1`
  color: white;
`
export const MainPara = styled.p`
  color: white;
  font-size: 18px;
`
export const MiniDiv = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
  width: 40%;
  display: flex;
  justify-content: space-between;
`

export const CustomButton = styled.button`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 0px;
  outline: none;
  background-color: #00c9b7;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
`

export const CustomInput = styled.input`
  padding: 0px;
  border: 0px;
  outline: none;
`
// export const Div1 = styled.div`

// `
