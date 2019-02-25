import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Segment } from 'semantic-ui-react'

class App extends Component {
  btnIn_clickfn(){
    this.setState({frmIn_visible: true})
  }
  render() {
    return (
      <Container textAlign='center' style={{width: '500px'}}>
        <br /><br />
        <Segment placeholder>
          <Header as='h1'>Parking System</Header>
          <p>
            <button className='ui big green button' id="btnIn" onClick={()=>this.btnIn_clickfn()} >Check In</button>
          </p>
        </Segment>
      </Container>
    );
  }
}

export default App;
