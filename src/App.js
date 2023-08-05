import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    isShown: false,
  }

  toggleHide = () => {
    this.setState(prevState => {
      const {isShown} = prevState
      return {isShown: !isShown}
    })
  }

  render() {
    const {isShown} = this.state
    return (
      <div className="app-container">
        <button
          onClick={this.toggleHide}
          type="button"
          className="toggle-button"
        >
          Hide Clock
        </button>
        {isShown && <Clock />}
      </div>
    )
  }
}

export default App
