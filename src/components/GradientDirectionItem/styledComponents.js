// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  width: 90px;
  background-color: ${props => (props.opacity ? 'red' : 'black')};
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
`
