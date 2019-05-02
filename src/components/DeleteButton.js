import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'



class DeleteButton extends Component {

    render () {
        return(
            <div>
            
            <Button  onClick={() => this.props.deletingTrip(this.props.trip.id)} basic color='red'>
                Delete
            </Button>          
                        
            </div>
            
        )
    }



}


export default DeleteButton