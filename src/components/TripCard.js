import React, { Component } from 'react'
import { Card , Header, Modal, CardContent } from 'semantic-ui-react'
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
                 <Modal trigger={
                        <Card.Content>
                            <Card.Meta floated='right'> {this.props.trip.date} </Card.Meta>
                            <Card.Header>{this.props.trip.location}</Card.Header>
                        </Card.Content>
                    }>
                    <Modal.Header>{this.props.trip.location}</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                          <Header>{this.props.trip.date}</Header>
                            <p>{this.props.trip.transport}</p>
                            <p>{this.props.trip.hotel}</p>
                            <p>{this.props.trip.schedule}</p>
                            <p>{this.props.trip.description}</p>

                        </Modal.Description>
                    </Modal.Content>
                </Modal>
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