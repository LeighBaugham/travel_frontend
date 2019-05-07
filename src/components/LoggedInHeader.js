import React, { Component } from 'react';
import { Header, Image, Segment, Container, Menu } from 'semantic-ui-react'
import Logo from "../images/logo.png"


class LoggedInHeader extends Component {



    render () {
        return(
        <div >
            <Header>
             <Menu fixed='top' inverted>
      <Container >
        <Menu.Item as='a' header>
          <Image src={Logo} size='small'  />
        {/* Friendly Tripping */}
        </Menu.Item>
        <Menu.Item as='a'>
        <a href="/profile" >Profile </a> 
        </Menu.Item>
            <Menu.Item>
            <a href="/" className="item" onClick={this.props.logout}>Logout </a> 

            </Menu.Item>
        </Container>
    </Menu>
    </Header>

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