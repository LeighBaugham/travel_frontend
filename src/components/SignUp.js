import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'



class SignUp extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: "",
      image_url: "",
      password: "",
      email: "",
      phone: "",
      location: ""
    }
  }
  

  

  saveUser = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
   .then(user =>{ 
     this.props.history.push("/profile")
     this.props.setUser(user)
    })
    event.target.reset()
  }

  render = () =>

  <div className='login-form'>
  <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      
      <Header as='h2' color='blue' textAlign='center'>
        Create New Account
      </Header>
      {/* <p><p> {this.props.errors ? this.props.errors.error : null} </p></p> */}
      <Form size='large' onSubmit={this.saveUser}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' className="name" placeholder='Username' onChange={(e) => this.setState({ name: e.target.value })}/>
          <Form.Input fluid icon='picture' iconPosition='left' className="image" placeholder='Picture' onChange={(e) => this.setState({ image_url: e.target.value })}/>

          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name="password"
            onChange={(e) => this.setState({ password: e.target.value })} />
          <Form.Input fluid icon='envelope square' iconPosition='left' className="email" placeholder='Email' onChange={(e) => this.setState({ email: e.target.value })}/>
          <Form.Input fluid icon='phone' iconPosition='left' className="phone" placeholder='Phone Number' onChange={(e) => this.setState({ phone: e.target.value })}/>
          <Form.Input fluid icon='location arrow' iconPosition='left' className="location" placeholder='Location' onChange={(e) => this.setState({ location: e.target.value })}/>

          <Button color='blue' fluid size='large'>
            Submit
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
</div>
}

const SignUpWithRouter = withRouter(SignUp)

export default SignUpWithRouter;