import React from 'react';

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
  }

  render = () =>
    <form class="ui form" onSubmit={this.saveTrip}>
      <div class="field">
        <label>Date</label>
        <input type="date" name="date" placeholder="Date"
          onChange={(e) => this.setState({ date: e.target.value })} />
      </div>
      <div class="field">
        <label>Description</label>
        <input type="text" name="description" placeholder="Description"
          onChange={(e) => this.setState({ description: e.target.value })} />
      </div>
      <div class="field">
        <label>Location</label>
        <input type="text" name="location" placeholder="location"
          onChange={(e) => this.setState({ location: e.target.value })} />
      </div>
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
      <button class="ui button" type="submit">Submit</button>

    </form>
}

export default NewTrip;