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
    token: localStorage.getItem("token"),
    user_id: localStorage.getItem("user_id"), 
    passports: []
  }

  deleteTrip = (id) => {

    let setTrips = this.state.trips.filter(trip => {
      console.log("trip id",trip.id)
      console.log("id",id)
      return !(trip.id === id.id)})

    console.log(setTrips)
    this.setState({trips:setTrips})
  }

  updateUser = (payload) => {
    this.setState({ user: payload.name,
                    user_id: payload.user_id
                   })
  }

  addTrip = (trip) => {
    let newTrips = this.state.trips.concat(trip)
    this.setState({trips: newTrips})
  }


  addPassport = (passport) => {
    let newPassports = this.state.passports.concat(passport)
    this.setState({passports: newPassports})
  }

  componentDidMount(){
    fetch('http://localhost:3000/trips')
    .then(res => res.json())
    .then(data => {
      this.setState({trips: data})
    })
  }

  logout = () => {
    this.setState({ user: null })
    localStorage.clear()
  }


  
  render() {
    return (
      <div>

      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/signup" render={()=><SignUp user={this.state.user} updateUser={this.updateUser}/> }/>
      <Route exact path="/login" render={()=><LogIn updateUser={this.updateUser} setError={this.setError} errors={this.state.errors} updateUser={this.updateUser}/> }/>
      <Route exact path="/newtrip" render={()=> <NewTrip addTrip={this.addTrip} user_id={this.state.user_id}/>} />
      <Route exact path="/profile" render={ () => localStorage.getItem("token") === null ? < Homepage /> : <ProfileContainer addPassport={this.addPassport} deleteTrip= {this.deleteTrip} user={this.state.user} token={this.state.token} updateUser={this.updateUser} trips={this.state.trips} logout={this.logout} />}/>
      {/* < Route path="/" render={ () => this.state.user === null ? < LogIn setUser={this.setUser} setError={this.setError} errors={this.state.errors}/> : <ProfileContainer user={this.state.user} setUser={this.setUser} logout={this.logout} login={this.state.loggedIn}/>} />  */}
      </Switch>
      
      </div>
    )
  }
}

export default App
