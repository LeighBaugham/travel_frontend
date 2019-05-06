import React, { Component } from 'react'
import { Card , Header, Modal, Button } from 'semantic-ui-react'



class PassportCard extends Component {


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
                {/* <Button  onClick={() => this.props.deletingPassport(this.props.trip.id)} basic color='red'>
                Delete
                </Button>  */}
                </Card.Content>
            </Card>
        </div>
    )}
}

export default PassportCard