import React from 'react'
import Layout from '../components/Layout'
import NavOptions from '../components/common/nav-options'

let data = [
  {
    id: '0',
    name: 'Nuevo',
    description: 'info nuevas'
  },
  {
    id: '1',
    name: 'Favoritos',
    description: 'info Favoritos'
  },
  {
    id: '2',
    name: 'Antiguos',
    description: 'info Antiguos'
  }
]

const AboutUs = () => {
  return (
    <Layout title="About Us">
      <div>
      <h2>/about</h2>
      <NavOptions options={data} />
      </div>
    </Layout>
  )
}

export default AboutUs
