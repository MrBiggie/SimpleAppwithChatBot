import React from 'react'
import FruitItem from '../fruit-item'
import stylesheet from './style.scss'

class MainCover extends React.Component {

  render() {
    return (
      <div className="FruitList">
        <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
        <div className="FruitList__title">
          <div className="FruitList__title--h1">
            <h1>HELLO.</h1>
          </div>
          <div className="FruitList__title--button">
            <div className="action">TRY</div>
          </div>
        </div>
        <div className="FruitList__image">
          <img src="./static/images/Apple-iPhone-8.png"></img>
        </div>
      </div>
    )
  }
}

export default MainCover
