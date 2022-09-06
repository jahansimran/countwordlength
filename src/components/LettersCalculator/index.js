import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  searchBar = event => {
    const {value} = event.target

    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="green-container">
        <div className="things-container">
          <div className="text-container">
            <h1 className="heading">
              Calculate the
              <br />
              Letters you
              <br />
              enter
            </h1>
            <label htmlFor="search" className="label">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              id="search"
              className="search-bar"
              onChange={this.searchBar}
              value={this.searchInput}
            />
            <p className="para">No.of letters: {searchInput.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="cal-image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
