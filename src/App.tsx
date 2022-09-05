import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <>
      <Layout>
        <Header className='navbar'>
          <Navbar />
        </Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </>
  );
}

export default App;
