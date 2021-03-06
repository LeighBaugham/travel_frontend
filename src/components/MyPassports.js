import React, { Component } from 'react'
 import TripCard from './TripCard'
 import { Card, Grid } from 'semantic-ui-react';
 import PassportCard from './PassportCard'



class MyPassports extends Component {
    state = {
        mypassports: []
    }



    componentDidMount(){
        fetch(`http://localhost:3000/mypassports`,{
          method: "GET",
          headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + localStorage.getItem('token') },
        })
        .then(res=>{
          if(res.ok){
            return res.json()
          }
        }).then(data => this.setState({mypassports: data}))      
        
      }




    render() {

        return (
            <div>
                 <Grid padded>
                <Grid.Row columns={1}>
                <Card.Group itemsPerRow={4}>
                
               {this.state.mypassports.map(trip => <PassportCard trip={trip} userid={this.props.userid} user={this.props.user} deletingTrip = {this.props.deletingTrip} joinPassport={this.props.joinPassport}/>)}
               </Card.Group>
                 </Grid.Row>
              </Grid>
            </div>
        
        )
    }



}


export default MyPassports;