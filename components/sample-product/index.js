import React from 'react'
import FruitItem from '../fruit-item'
import stylesheet from './style.scss'

class SampleProduct extends React.Component {

  render() {
    return (
      <div className="SampleProduct">
        <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
        <div className="SampleProduct__title">
          <div className="SampleProduct__title--h1">
            <h2>TRY OUR</h2>
            <h3><p className="SampleProduct__part1">PRODUCT</p><p className="SampleProduct__part2">NOW</p></h3>
          </div>
          <div className="SampleProduct__title--dash">
          </div>
          <div className="SampleProduct__title--button">
            <div>
              <p>
                iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The smartest, most powerful chip ever in a smartphone.
              </p>
            </div>
            <div className="action">TRY</div>
          </div>
        </div>
        <div className="SampleProduct__image">
          <img src="./static/images/design_sizes_large.jpg"></img>
        </div>
      </div>
    )
  }
}

export default SampleProduct
