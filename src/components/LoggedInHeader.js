import React, { Component } from 'react';
import { Header, Image, Segment, Container, Menu } from 'semantic-ui-react'


class LoggedInHeader extends Component {



    render () {
        return(
        <div>
             <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
        Friendly Tripping
        </Menu.Item>
        <Menu.Item as='a'>
        <a href="/profile" >Profile </a> 
        </Menu.Item>
            <Menu.Item>
            <a href="/" className="item" onClick={this.props.logout}>Logout </a> 

            </Menu.Item>
        </Container>
    </Menu>

            {/* <Segment clearing>
            <Header as='h3' floated='left'>
               <Image  /> 
                <Header.Content>
                    <Image  size='medium'/>
                    <a href="/profile" style={{ color: '#f00' }} className="item" >Profile </a> 
                </Header.Content>
            </Header>

            

            <Header as='h3' floated='right'>
                <a href="/" style={{ color: '#f00' }} className="item" onClick={this.props.logout}>Logout </a> 
            </Header>
        </Segment>     */}
        </div>
            
        )
    }



}
export default LoggedInHeader;