import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'




 class LogIn extends React.Component {


  state = {
    name: "",
    password: "",
    id: null,
    
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(payload => {
      if (payload.errors){  
        this.setError(payload.errors)
        }      
        else {
      localStorage.setItem("token", payload.token)
      localStorage.setItem("name", payload.name)
      localStorage.setItem("user_id", payload.user_id)
      this.props.updateUser(payload)
      this.props.history.push("/profile")
    }
    })
  }
        
  setError = (payload) => {
    this.setState({errors: payload})
  }

     render = () => {

        return(

     <div className='login-form'>
         <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}
          </style>
     <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
       <Grid.Column style={{ maxWidth: 450 }}>
         <Header as='h2' color='blue' textAlign='center'>
         
             
         </Header>
         <p> {this.state.errors ? this.state.errors : null} </p>
         <Form size='large' onSubmit={this.handleSubmit}>
           <Segment stacked>
             <Form.Input fluid icon='user' iconPosition='left' className="name" placeholder='Username' onChange={(e) => this.setState({ name: e.target.value })}/>
             <Form.Input
               fluid
               icon='lock'
               iconPosition='left'
               placeholder='Password'
               type='password'
               name="password"
               onChange={(e) => this.setState({ password: e.target.value })} />
 
             <Button color='blue' fluid size='large'>
               Login
             </Button>
           </Segment>
         </Form>
         <Message>
           New to us? <a href='/signup'>Sign Up</a>
         </Message>
       </Grid.Column>
     </Grid>
   </div>
        )}
    }

const LogInWithRouter = withRouter(LogIn)

export default LogInWithRouter;