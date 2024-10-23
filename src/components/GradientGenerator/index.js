import {Component} from 'react'

import {
  Home,
  ListContainer,
  MainHeading,
  MiniDiv,
  MainPara,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    color11: '#8ae323',
    color22: '#014f7b',
    activeDirection: 'top',
    activeDirection1: 'top',
  }

  changeActiveDirection = id => {
    this.setState({activeDirection: id})
  }

  onchangeColorInput1 = event => {
    this.setState({color1: event.target.value})
  }

  onchangeColorInput2 = event => {
    this.setState({color2: event.target.value})
  }

  onClickGenerate = () => {
    const {color1, color2, activeDirection} = this.state
    this.setState({
      color11: color1,
      color22: color2,
      activeDirection1: activeDirection,
    })
  }

  render() {
    const {
      color1,
      color2,
      activeDirection1,
      color11,
      color22,
      activeDirection,
    } = this.state
    return (
      <Home
        direction={`to ${activeDirection1}`}
        color1={color11}
        color2={color22}
        activeDirection
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        {/* choseDirection Component */}
        <ListContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              changeActiveDirection={this.changeActiveDirection}
              each={each}
              activeDirection={activeDirection}
            />
          ))}
        </ListContainer>

        <p>Pick the colors</p>
        <MiniDiv>
          <div>
            <p>{color1}</p>
            <input
              value={color1}
              type="color"
              onChange={this.onchangeColorInput1}
            />
          </div>
          <div>
            <p>{color2}</p>
            <input
              value={color2}
              type="color"
              onChange={this.onchangeColorInput2}
            />
          </div>
        </MiniDiv>
        <button type="button" onClick={this.onClickGenerate}>
          Generate
        </button>
      </Home>
    )
  }
}

export default GradientGenerator
