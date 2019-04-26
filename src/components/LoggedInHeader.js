import React, { Component } from 'react';
import { Header, Image, Segment } from 'semantic-ui-react'


class LoggedInHeader extends Component {



    render () {
        return(
            <div>
            
               <Segment clearing>
                

                    <Header as='h2' name="welcome" id="welcome">
                        <p>Welcome {this.props.user} </p>
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