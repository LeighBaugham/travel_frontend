import React, { Component } from 'react'
import LoggedInHeader from './LoggedInHeader'
import { Grid, Button } from 'semantic-ui-react'
import TripsView from './TripsView'
import MyTrips from './MyTrips'
import MyPassports from './MyPassports'


export default class ProfileContainer extends Component {

        constructor(props) {
            super(props);

            this.state = {
                profile: []
            }
        }


    componentDidMount(){
        fetch(`http://localhost:3000/profile`,{
          method: "GET",
          headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + localStorage.getItem('token') },
        })
        .then(res=>{
          if(res.ok){
            return res.json()
          }
        }).then(data => this.setState({profile: data}))      
        
      }

    render() {
        return (
            <div>
                < LoggedInHeader logout={this.props.logout}/>
                <Grid celled='vertically'>
                  <Grid.Row>
                  <Grid.Column width={3}>
                  <img className="avatar" id="img" src={this.state.profile.image_url} alt="YOU"/> 
                  </Grid.Column>
                  <Grid.Column width={10}>
                      <Grid.Row>
                        {this.state.profile.name}
                      </Grid.Row>
                      <Grid.Row>
                        {this.state.profile.email}
                      </Grid.Row>
                      <Grid.Row>
                        {this.state.profile.phone}
                      </Grid.Row>
                      <Grid.Row>
                        {this.state.profile.location}
                      </Grid.Row>
                      {/* <Grid.Row>
                        <Button content='Delete User' />
                      </Grid.Row> */}
                  </Grid.Column>
                  <Grid.Column width={3}>                  
                   <p> <Button size='large' color='violet'icon='plus' href='/newtrip' content='Trip' /></p>
                   <p> <Button size='large' color='violet'icon='plus' href='/tripsview' content='All Trips' /></p>

                  </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                  <Grid.Column width={8}>
                    <MyTrips trips={this.props.trips} userid={this.props.userid} deleteTrip= {this.props.deleteTrip} token={this.props.token} user={this.state.profile} joinPassport={this.props.joinPassport} addPassport={this.props.addPassport}/>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <MyPassports trips={this.props.trips} userid={this.props.userid} deleteTrip= {this.props.deleteTrip} token={this.props.token} user={this.state.profile} joinPassport={this.props.joinPassport} addPassport={this.props.addPassport}/>
                  </Grid.Column>
                  </Grid.Row>
                </Grid>
            </div>
        )
    }
}