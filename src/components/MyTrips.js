import React, { Component } from 'react'
 import TripCard from './TripCard'
 import { Card, Grid } from 'semantic-ui-react';



class MyTrips extends Component {
    state = {
        mytrips: []
    }



    componentDidMount(){
        fetch(`http://localhost:3000/mytrips`,{
          method: "GET",
          headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + localStorage.getItem('token') },
        })
        .then(res=>{
          if(res.ok){
            return res.json()
          }
        }).then(data => this.setState({mytrips: data}))      
        
      }




    render() {

        return (
            <div>
                 <Grid padded>
                <Grid.Row columns={1}>
                <Card.Group itemsPerRow={4}>
                
               {this.state.mytrips.map(trip => <TripCard trip={trip} userid={this.props.userid} user={this.props.user} deletingTrip = {this.props.deletingTrip} joinPassport={this.props.joinPassport}/>)}
               </Card.Group>
                 </Grid.Row>
              </Grid>
            </div>
        
        )
    }



}


export default MyTrips;