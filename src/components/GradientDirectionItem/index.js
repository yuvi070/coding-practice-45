// Write your code here
import {ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {each, changeActiveDirection, activeDirection} = props
  const onClickDirection = () => {
    changeActiveDirection(each.value)
  }

  return (
    <ListItem
      onClick={onClickDirection}
      opacity={each.value === activeDirection}
    >
      {each.displayText}
    </ListItem>
  )
}

export default GradientDirectionItem
