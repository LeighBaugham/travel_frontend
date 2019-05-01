import React, { Component } from 'react'
import TripCard from './TripCard'


class TripsView extends Component {


    render () {
        return(
            <div>
                 {this.props.trips.map(trip => <TripCard trip={trip} />)}
            </div>
        )}
}

export default TripsView