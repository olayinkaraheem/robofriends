import React, { Component } from 'react'

class Header extends Component {

    /* constructor(){
        super(props)
        this.state = {
            count: 0
        }
    } */

    shouldComponentUpdate(nextProps, nextState){
        return false
    }

    render(){
        console.log('Header')

        return (
            <div>
                <h1 className = 'f1' > RoboFriends</h1 >
            </div>
        )
    }
}

export default Header