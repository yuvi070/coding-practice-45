// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  width: 90px;
  background-color: ${props => (props.opacity ? '#ededed' : '#ededed')};
  color: white;
  opacity: ${props => (props.opacity ? '1' : ' 0.5')};
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  color: #1e293b;
  cursor: pointer;
`
