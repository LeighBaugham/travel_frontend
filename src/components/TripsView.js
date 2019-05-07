import React, { Component } from 'react'
import TripCard from './TripCard'
import { Card, Grid, Container } from 'semantic-ui-react';
import LoggedInHeader from './LoggedInHeader'


class TripsView extends Component {

    // deletingTrip = (id) => {
    //   // console.log(id)
    //   fetch(`http://localhost:3000/trips/${id}`, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Token": localStorage.getItem("token")
    //     },
    //     body: JSON.stringify({
    //       id: id
    //     })
    //   }).then(res => res.json())
    //   .then(trip => this.props.deleteTrip(trip))
    // }

      
    // joinPassport = (id) => {
    //     fetch("http://localhost:3000/passports", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Access-Token": localStorage.getItem("token")
    //       },
    //       body: JSON.stringify({
    //         user_id: this.props.user.id,
    //         trip_id: id,
    //       })
    //     }).then(res => res.json())
    //     .then(passport => this.props.addPassport(passport))
    //   }

    render () {
        return(
            <div>
               < LoggedInHeader logout={this.props.logout}/>

              <Container text style={{ marginTop: '7em' }}>
              <Grid >
                <Grid.Row>
                <Card.Group >
                  {this.props.trips.map(trip => <TripCard trip={trip} user={this.props.user} userid = {this.props.userid} deletingTrip = {this.props.deletingTrip} joinPassport={this.props.joinPassport}/>)}
                  </Card.Group>
                 </Grid.Row>
              </Grid>
              </Container>
            </div>
        )}
}

export default TripsView