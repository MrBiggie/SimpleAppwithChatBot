import Header from '../components/common/header';
import Footer from '../components/common/footer';
import Head from 'next/head';
import {Layout} from 'antd';
import stylesheet from '../static/styles/main.scss';
import Nav from '../components/common/nav'

const {Content} = Layout;
const BaseLayout = (props) => (
  <div>
    <Head>
      <meta name="theme-color" content="#0000ff"/>
      <title>{props.title}</title>
      <meta charSet='utf-8'/>
      <meta name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
      <link href="//fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet"/>
      <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
    </Head>
    <Content className="container-fluid">
      <Header/>
      <div className="content-r home-page">
        {props.children}
      </div>
    </Content>
  </div>
);

export default BaseLayout
