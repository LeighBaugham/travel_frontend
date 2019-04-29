import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'




 class LogIn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            password: ""
        }
    }
    
    handleSubmit=(event) => {
        event.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => {
            return res.json()})
        .then( user => {
            if (user.error)
                this.props.setError(user)
            else {
                 this.props.history.push("/profile")
                this.props.setUser(user)}
        })
    }        

     

     render = () => {

        return(

     <div className='login-form'>
     <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
       <Grid.Column style={{ maxWidth: 450 }}>
         <Header as='h2' color='blue' textAlign='center'>
         
            Log-in to your account
         </Header>
         <p> {this.props.errors ? this.props.errors.error : null} </p>
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