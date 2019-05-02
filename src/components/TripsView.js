import React, { Component } from 'react'
import TripCard from './TripCard'
import { Card, Grid } from 'semantic-ui-react';


class TripsView extends Component {

    deletingTrip = (id) => {
      // console.log(id)
      fetch(`http://localhost:3000/trips/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Token": localStorage.getItem("token")
        },
        body: JSON.stringify({
          id: id
        })
      }).then(res => res.json())
      .then(trip => this.props.deleteTrip(trip))
    }

      
    joinPassport = (id) => {
        fetch("http://localhost:3000/passports", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Token": localStorage.getItem("token")
          },
          body: JSON.stringify({
            user_id: this.props.user.id,
            trip_id: id,
          })
        }).then(res => res.json())
        .then(passport => this.props.addPassport(passport))
      }

    render () {
        return(
            <div>
              <Grid padded>
                <Grid.Row columns={1}>
                <Card.Group itemsPerRow={4}>
                  {this.props.trips.map(trip => <TripCard trip={trip} user={this.props.user} deletingTrip = {this.deletingTrip} joinPassport={this.joinPassport}/>)}
                  </Card.Group>
                 </Grid.Row>
              </Grid>
            </div>
        )}
}

export default TripsView