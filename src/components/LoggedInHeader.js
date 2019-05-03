import React, { Component } from 'react';
import { Header, Image, Segment } from 'semantic-ui-react'


class LoggedInHeader extends Component {



    render () {
        return(
        <div>
            <Segment clearing>
            <Header as='h2' floated='left'>
               <Image  /> 
                <Header.Content>
                    <Image  size='medium'/>
                    <a href="/profile" style={{ color: '#f00' }} className="item" >Profile </a> 
                </Header.Content>
            </Header>

            

            <Header as='h3' floated='right'>
                <a href="/" style={{ color: '#f00' }} className="item" onClick={this.props.logout}>Logout </a> 
            </Header>
        </Segment>    
        </div>
            
        )
    }



}
export default LoggedInHeader;