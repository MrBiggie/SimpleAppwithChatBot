import React from 'react'
import FruitItem from '../fruit-item'
import stylesheet from './style.scss'

class FruitList extends React.Component {
  getData() {
    let data = [
      {
        id: '1',
        name: 'apple',
        color: 'red',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReg7jdJDItUiZuHJjaixMQi4Bu9WQTuGP6spwUnomc4lPMf0ug'
      },
      {
        id: '2',
        name: 'orange',
        color: 'orange',
        image: 'https://t3.ftcdn.net/jpg/00/99/56/26/240_F_99562611_EIZ4AssrFTz1UNyOmM8KAChSeQNu5nMA.jpg'
      },
      {
        id: '3',
        name: 'banana',
        color: 'yellow',
        image: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3-1020x765.jpg'
      }
    ]

    let response = data.map((element) => {
      return <FruitItem id={element.id} key={element.id} name={element.name} color={element.color} image={element.image}/>
    })

    return response
  }

  render() {
    return (
      <div className="FruitList">
        <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
        <h2>Fruit List</h2>
        { this.getData() }
      </div>
    )
  }
}

export default FruitList
