import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'


class TripCard extends Component {


    render () {
        return(
            <div>
                <Card.Group>
                    <Card>
                    <Card.Content>
                        <Card.Meta floated='right'> {this.props.trip.date} </Card.Meta>
                        <Card.Header>{this.props.trip.location}</Card.Header>
                        <Card.Meta>{this.props.trip.description}</Card.Meta>
                        <Card.Meta>{this.props.trip.hotel}</Card.Meta>
                        <Card.Meta>{this.props.trip.transport}</Card.Meta>
                        <Card.Description>
                        {this.props.trip.schedule}                      
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Join
                        </Button>
                        <Button basic color='red'>
                            Delete
                        </Button>
                        </div>
                    </Card.Content>
                    </Card>
                </Card.Group>

            </div>
        )}
}

export default TripCard