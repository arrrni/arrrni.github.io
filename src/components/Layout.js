import React from 'react'
import MainNavbar from './MainNavbar';
import '../../static/index.css';
import { Container } from 'bloomer';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <>
      <MainNavbar/>
      <Container style={{paddingTop: '1.5rem'}}>
        {children}
      </Container>  
      </>
    )
  }
}

export default Layout
