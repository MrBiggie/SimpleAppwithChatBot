import React from 'react'
import Layout from '../components/Layout'
import FruitDetail from '../components/fruit-detail'

class Fruiit extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render() {
    return (
      <Layout title="Fruit Details">
        <div>
          <h2>Fruit Detail</h2>
          <FruitDetail id={this.props.id}/>
        </div>
      </Layout>
    )
  }
}

export default Fruiit
