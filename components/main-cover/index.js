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
            <h1>HELLO</h1>
          </div>
          <div className="FruitList__title--h1">
            <h2>Student Service Center</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default MainCover
