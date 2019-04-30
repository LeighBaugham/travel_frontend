import React, { Component } from 'react'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProfileContainer from './components/ProfileContainer';
// import TravelHeader from './components/TravelHeader'
import Homepage from './Homepage.js'
import NewTrip from './components/NewTrip'


class App extends Component {


  state = {
    user: localStorage.getItem("name"),
    trips: [],
    user_id: localStorage.getItem("user_id")
  }

  updateUser = (payload) => {
    this.setState({ user: payload.name,
                    user_id: payload.user_id
                   })
  }

  // saveTrip = (e)=>{
  //   // console.log(this.state.user_id)
  //   e.preventDefault()
  //   // console.log("target", e.target.name.value)
  //   let newTrip = {
  //   //  "user_id": user_id,
  //     "date": e.target.date.value,
  //     "description": e.target.description.value,
  //     "location": e.target.location.value,
  //     "hotel": e.target.hotel.value,
  //     "schedule": e.target.schedule.value,
  //     "transportation": e.target.transportation.value
  //   }

  //   let newTripArray = this.state.trips.slice()
    
  //   newTripArray.push(newTrip)
    
  //   this.setState({
  //     trips:newTripArray
  //   })
  //   e.target.reset()

  // }

  addTrip = (trip) => {
    let newTrips = this.state.trips.concat(trip)
    this.setState({trips:newTrips})
  }

  logout = () => {
    this.setState({ user: null })
    localStorage.clear()
  }


  setError = (payload) => {
    this.setState({errors: payload})
  }
  
  render() {
    return (
      <div>

      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/signup" render={()=><SignUp user={this.state.user} updateUser={this.updateUser}/> }/>
      <Route exact path="/login" render={()=><LogIn updateUser={this.updateUser} setError={this.setError} errors={this.state.errors} updateUser={this.updateUser}/> }/>
      <Route exact path="/newtrip" render={()=> <NewTrip addTrip={this.addTrip} user_id={this.state.user_id}/>} />
      <Route exact path="/profile" render={ () => this.state.user === null ? < Homepage /> : <ProfileContainer user={this.state.user} updateUser={this.updateUser} logout={this.logout} />}/>
      {/* < Route path="/" render={ () => this.state.user === null ? < LogIn setUser={this.setUser} setError={this.setError} errors={this.state.errors}/> : <ProfileContainer user={this.state.user} setUser={this.setUser} logout={this.logout} login={this.state.loggedIn}/>} />  */}
      </Switch>
      
      </div>
    )
  }
}

export default App
