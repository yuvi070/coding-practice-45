// Write your code here
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
      data-testid="gradientGenerator"
    >
      <button type="button" data-testid="gradientGenerator">
        {each.displayText}
      </button>
    </ListItem>
  )
}

export default GradientDirectionItem
