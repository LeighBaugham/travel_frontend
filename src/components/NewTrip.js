import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Container, Button } from 'semantic-ui-react';
import LoggedInHeader from './LoggedInHeader'

class NewTrip extends React.Component {
  state = {
    user_id: this.props.user_id,
    date: null,
    description: "",
    location: "",
    hotel: "",
    schedule: "",
    transportation: "false"
  }

  saveTrip = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": localStorage.getItem("token")
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(trip => this.props.addTrip(trip))
    this.props.history.push("/profile")
  }

  render () {
    return (

   
  <div>
   < LoggedInHeader logout={this.props.logout}/>
    <Container text style={{ marginTop: '7em' }}>
    <Form  onSubmit={this.saveTrip}>
      <Form.Group widths='equal'>
      <Form.Field>
        <label>Date</label>
        <input type="date" name="date" placeholder="Date"
          onChange={(e) => this.setState({ date: e.target.value })} />
          </Form.Field>
          <Form.Field>
          <label>Location</label>
        <input type="text" name="location" placeholder="location"
          onChange={(e) => this.setState({ location: e.target.value })} />
          </Form.Field>
      </Form.Group>
      <Form.Field >
        <label>Description</label>
        <input name="description" placeholder="Tell us more about your trip..."
          onChange={(e) => this.setState({ description: e.target.value })} />
      </Form.Field>
      <Form.Group widths='equal'>
     
      <div class="field">
        <label>Hotel</label>
        <input type="text" name="hotel" placeholder="Hotel"
          onChange={(e) => this.setState({ hotel: e.target.value })} />
      </div>
      <div class="field">
        <label>Schedule</label>
        <input type="text" name="schedule" placeholder="Schedule"
          onChange={(e) => this.setState({ schedule: e.target.value })} />
      </div>
      <div class="field">
        <label>Transportation</label>
        <input type="text" name="transportation" placeholder="Transportation"
          onChange={(e) => this.setState({ transportation: e.target.value })} />
      </div>
      </Form.Group>
      <Button  className="ui button" type="submit">Submit</Button>

    </Form>
    </Container>
    </div>
    
     )
    }
}

const NewTripWithRouter = withRouter(NewTrip)

export default NewTripWithRouter;