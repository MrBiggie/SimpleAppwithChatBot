import React from 'react'
import Layout from '../components/Layout'
import MainCover from '../components/main-cover'
import ServiceReference from '../components/service-reference'
import SampleProduct from '../components/sample-product'

const Index = () => {
  return (
    <Layout title="Hello">
    	<MainCover/>
    	<ServiceReference/>
    	<SampleProduct/>
    </Layout>
  )
}

export default Index
