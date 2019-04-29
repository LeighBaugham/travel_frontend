import React, { Component } from 'react'

export default class ProfileContainer extends Component {



    componentDidMount(){
        fetch(`http://localhost:3000/profile`,{
          method: "GET",
          headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + localStorage.getItem('token') },
        })
        .then(res=>{
          if(res.ok){
            return res.json()
          }
        })
        .then(data=>console.log(data))
        
      }

    render() {
        // console.log("this is the user", user)
        return (
            <div>
                Hello {this.data}
            </div>
        )
    }
}