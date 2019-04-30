import React, { Component } from 'react'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { Route, Switch } from 'react-router-dom';
import ProfileContainer from './components/ProfileContainer';
// import TravelHeader from './components/TravelHeader'
import Homepage from './Homepage.js'


class App extends Component {


  state = {
    user: localStorage.getItem("name")
  }

  updateUser = (user) => {
    this.setState({ user: user })
  }

  logout = () => {
    this.setState({ user: null })
    localStorage.clear()
  }
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //     loggedIn: false,
  //     user: null,
  //     errors: null
  //   }
  // }
  
  // setUser = (payload) => {
  //   console.log('user login: ', payload.user)
  //   localStorage.setItem('token', payload.token)
  //   localStorage.setItem('user', payload.user)
  //   this.setState({
  //     user: payload.user, 
  //     errors: null, 
  //     loggedIn: true
  //   })
  //   //this.forceUpdate()
  // }

  // setError = (payload) => {
  //   this.setState({errors: payload})
  // }

  // logout = () => {
  //   this.setState({ user: null })
  //   localStorage.clear()
  // }
  
  render() {
    return (
      <div>

      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/signup" render={()=><SignUp user={this.state.user} updateUser={this.updateUser}/> }/>
      <Route exact path="/login" render={()=><LogIn updateUser={this.updateUser} setError={this.setError} errors={this.state.errors}/> }/>

      <Route exact path="/profile" render={ () => this.state.user === null ? < Homepage /> : <ProfileContainer user={this.state.user} updateUser={this.updateUser} logout={this.logout} />}/>
      {/* < Route path="/" render={ () => this.state.user === null ? < LogIn setUser={this.setUser} setError={this.setError} errors={this.state.errors}/> : <ProfileContainer user={this.state.user} setUser={this.setUser} logout={this.logout} login={this.state.loggedIn}/>} />  */}
      </Switch>
      
      </div>
    )
  }
}

export default App
