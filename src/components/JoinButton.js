import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'



class JoinButton extends Component {

    render () {
        return(
            <div>
            
            <Button onClick={() => this.props.joinPassport(this.props.trip.id)} basic color='green'>
                Join
            </Button>         
                        
            </div>
            
        )
    }



}


export default JoinButton