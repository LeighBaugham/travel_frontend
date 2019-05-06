import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'
import DeleteButton from './DeleteButton';
import JoinButton from './JoinButton'


class TripCard extends Component {
    

    displayButton = () => {
        if (this.props.userid == this.props.trip.user_id){
            return  <DeleteButton deletingTrip={this.props.deletingTrip} trip={this.props.trip}/>
        }
        else {
        return <JoinButton joinPassport={this.props.joinPassport} trip={this.props.trip} />
        }
    }


    render () {
        return(
            <div>
               
                    <Card>
                    <Card.Content>
                        <Card.Meta floated='right'> {this.props.trip.date} </Card.Meta>
                        <Card.Header>{this.props.trip.location}</Card.Header>
                        {/* <Card.Meta>{this.props.user.name}</Card.Meta> */}
                       
    
                        <Card.Meta>{this.props.trip.description}</Card.Meta>
                        <Card.Meta>{this.props.trip.hotel}</Card.Meta>
                        <Card.Meta>{this.props.trip.transport}</Card.Meta>
                        <Card.Description>
                        {this.props.trip.schedule}                      
                        </Card.Description>
                        
                    </Card.Content>
                    <Card.Content>
                        <div>
                        {this.displayButton()}
                    </div>
                    </Card.Content>
                    </Card>
                

            </div>
        )}
}

export default TripCard