import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: false,
  }

  onSubscribed = () => {
    this.setState(prevState => ({isSubscribe: false}))
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: true}))
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="welcome-container">
        <h1 className="title">Welcome</h1>
        <p className="description">Thank you!Happy Learning</p>
        {isSubscribe ? (
          <button type="button" className="btn" onClick={this.onSubscribed}>
            Subscribed
          </button>
        ) : (
          <button type="button" className="btn" onClick={this.onSubscribe}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
