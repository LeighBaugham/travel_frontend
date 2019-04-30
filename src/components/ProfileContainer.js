import React, { Component } from 'react'

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
                <p>{this.state.profile.name}</p>
                <p>{this.state.profile.image_url}</p>
            </div>
        )
    }
}