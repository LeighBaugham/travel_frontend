import React, { Component } from 'react'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProfileContainer from './components/ProfileContainer';
// import TravelHeader from './components/TravelHeader'
import Homepage from './Homepage.js'
import NewTrip from './components/NewTrip'
import TripsView from './components/TripsView'
import Promise from 'bluebird'


class App extends Component {


  state = {
    user: localStorage.getItem("name"),
    trips: [],
    token: localStorage.getItem("token"),
    user_id: localStorage.getItem("user_id"), 
    passports: [],
    mytrips: []
  }

  deleteTrip = (id) => {

    let setTrips = this.state.trips.filter(trip => {
      console.log("trip id",trip.id)
      console.log("id",id)
      return !(trip.id === id.id)})

    console.log(setTrips)
    this.setState({trips: setTrips})
    this.fetch()

  }

  updateUser = (payload) => {
    this.setState({ user: payload.name,
                    user_id: payload.user_id
                   })
  }

  addTrip = (trip) => {
    let newTrips = this.state.trips.concat(trip)
    this.setState({trips: newTrips})
    this.componentDidMount()
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
    // this.fetch()
  }

  fetch = () => {
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


  // Promise(this.fetch()) =>  {
  //   console.log("did this work?")
 

  logout = () => {
    this.setState({ user: null })
    localStorage.clear()
  }

  deletingTrip = (id) => {
    // console.log(id)
    fetch(`http://localhost:3000/trips/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": localStorage.getItem("token")
      },
      body: JSON.stringify({
        id: id
      })
    }).then(res => res.json())
    .then(trip => this.deleteTrip(trip))
  }

  joinPassport = (id) => {
    fetch("http://localhost:3000/passports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": localStorage.getItem("token")
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
        trip_id: id,
      })
    }).then(res => res.json())
    .then(passport => this.addPassport(passport))
  }

 
  
  render() {
    return (
      <div>

      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/signup" render={()=><SignUp user={this.state.user} updateUser={this.updateUser}/> }/>
      <Route exact path="/login" render={()=><LogIn finishLogin={this.finishLogin} mytrips={this.state.mytrips} fetch={this.fetch} updateUser={this.updateUser} setError={this.setError} errors={this.state.errors} updateUser={this.updateUser}/> }/>
      <Route exact path="/newtrip" render={()=> <NewTrip logout={this.logout} addTrip={this.addTrip} user_id={this.state.user_id}/>} />
      <Route exact path="/tripsview" render={()=> <TripsView addPassport={this.addPassport} joinPassport={this.joinPassport} deletingTrip= {this.deletingTrip} user={this.state.user} userid={this.state.user_id} token={this.state.token} updateUser={this.updateUser} trips={this.state.trips} logout={this.logout}/>} />
      <Route exact path="/profile" render={ () => localStorage.getItem("token") === null ? < Homepage /> : <ProfileContainer fetch={this.fetch} joinPassport={this.joinPassport} mytrips= {this.state.mytrips} addPassport={this.addPassport} userid={this.state.user_id} deletingTrip= {this.deletingTrip} user={this.state.user} token={this.state.token} updateUser={this.updateUser} trips={this.state.trips} logout={this.logout} />}/>
      {/* < Route path="/" render={ () => this.state.user === null ? < LogIn setUser={this.setUser} setError={this.setError} errors={this.state.errors}/> : <ProfileContainer user={this.state.user} setUser={this.setUser} logout={this.logout} login={this.state.loggedIn}/>} />  */}
      </Switch>
      
      </div>
    )
  }
}

export default App
