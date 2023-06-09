import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timerElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timerElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timerElapsedInSeconds: prevState.timerElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timerElapsedInSeconds} = this.state
    const seconds = Math.floor(timerElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timerElapsedInSeconds} = this.state
    const minutes = Math.floor(timerElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <>
        <div className="bgContainer">
          <div className="stopwatchContainer">
            <h1 className="stopwatch">Stopwatch</h1>
            <div className="timerContainer">
              <div className="timer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  className="timerImage"
                  alt="stopwatch"
                />
                <p className="heading">Timer</p>
              </div>
              <h1 className="stopwatchTimer">{time}</h1>
              <div className="timerButtons">
                <button
                  type="button"
                  className="startButton button"
                  onClick={this.onStartTimer}
                  disabled={isTimerRunning}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="stopButton button"
                  onClick={this.onStopTimer}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="resetButton button"
                  onClick={this.onResetTimer}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Stopwatch
