import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react'

const timeoutLength = 2500


class JoinButton extends Component {


    state = { isOpen: false }

    handleOpen = () => {
      this.setState({ isOpen: true })
  
      this.timeout = setTimeout(() => {
        this.setState({ isOpen: false })
      }, timeoutLength)
    }
  
    handleClose = () => {
      this.setState({ isOpen: false })
      clearTimeout(this.timeout)
    }

    render () {
        return(
            <div>
                <Popup
                    trigger={<Button onClick={() => this.props.joinPassport(this.props.trip.id)} basic color='green'>
                                Join
                            </Button>  }
                    content={"Buckle Up!"}
                    on='click'
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    position='top right'
                />
                        
            </div>
            
        )
    }



}


export default JoinButton