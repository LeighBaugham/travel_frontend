import React, { Component } from 'react'
import LoggedInHeader from './LoggedInHeader'
import { Grid, Button } from 'semantic-ui-react'

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
                <Grid celled='internally'>
                  <Grid.Row>
                  <Grid.Column width={3}>
                     {this.state.profile.image_url} 
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
                  </Grid.Column>
                  <Grid.Column width={3}>                  
                   <p> <Button size='large' color='violet'icon='play' content='Add Trip' /></p>
                    <Button content='Delete User' />
                  </Grid.Column>
                  </Grid.Row>
                </Grid>
            </div>
        )
    }
}