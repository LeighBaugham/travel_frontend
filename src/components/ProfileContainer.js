import React, { Component } from 'react'

export default class ProfileContainer extends Component {


    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}