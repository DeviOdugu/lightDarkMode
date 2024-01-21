// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: false}

  onClickButton = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  render() {
    const {mode} = this.state

    const bgColor = mode ? 'light-bg' : 'dark-bg'
    const headingTextColor = mode ? 'light-heading' : 'dark-heading'
    const buttonText = mode ? 'Dark Mode' : 'Light Mode'
    const buttonColors = mode ? 'light-button' : 'dark-button'
    return (
      <div className={bgColor}>
        <h1 className={headingTextColor}>Click To Change Mode</h1>
        <button
          type="button"
          className={buttonColors}
          onClick={this.onClickButton}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
