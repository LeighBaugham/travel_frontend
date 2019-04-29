import React, { Component } from 'react'

export default class ProfileContainer extends Component {



    // componentDidMount(){
    //     fetch(`http://localhost:3000/users${this.props.id}`,{
    //       method: "GET",
    //       headers: {"Content-Type": "application/json"},
    //     //   body: JSON.stringify({token: token})
    //     })
    //     .then(res=>{
    //       if(res.ok){
    //         return res.json()
    //       }
    //     })
    //     .then(data=>console.log(data))
        
    //   }

    render() {
        const { user } = this.props
        console.log("this is the user", user)
        return (
            <div>
                hello
            {user === null || user === {} ? "Yikes" : user}
            </div>
        )
    }
}