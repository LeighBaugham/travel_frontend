import React, { Component } from 'react';
import { Header, Image, Segment, Container, Menu } from 'semantic-ui-react'
import Logo from "../images/logo.png"


class LoggedInHeader extends Component {



    render () {
        return(
        <div >
            <Header>
                <Menu fixed='top' >
                    <Menu.Item  header>
                        <Image src={Logo} size='small' float='left' />
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <a href="/profile" >Profile </a> 
                    </Menu.Item>
                    <Menu.Item align='right'>
                        <a href="/" className="item" onClick={this.props.logout}>Logout </a> 

                    </Menu.Item>
        
                </Menu>
            </Header>

        </div>
            
        )
    }



}
export default LoggedInHeader;