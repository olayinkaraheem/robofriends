import React, { Component } from 'react'

class CounterButton extends Component {

     constructor(){
        super()
        this.state = {
            count: 0
        }
    } 

    /* 
    * Alternative to using shouldComponentUpdate()
    * is making our presentational component extend PureComponent from react
    * but it does shallow comparison. i.e if we have  a deeply nested object,
    * it might not work as desired
    * 
    * A tool that helps us with this re-rendering issue is called
    * why-did-you-update
    * and i should only be used in dev env like so
    * 
    * import React from 'react'
    * if(process.env.NODE_ENV !== 'production'){
    *   const {whyDidYouUpdate} = require('why-did-you-update')
    *   whyDidYouUpdate('React')
    * }
    * 
    * 
    * ** We should always put performance issue into consideration
    * before using shouldComponentUpdate especially when we are performing
    * some checks within it **
    * 
    */

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        if(this.state.count !== nextState.count){
            return true
        }
        return false
    }

    updateCount = () => {
        this.setState( state => {
            return { count: state.count + 1 }
        })
        // this.setState( { count: this.state.count + 1 } )
    }
    render() {
        // const { color } = this.props
        return(
            <button color={this.props.color} onClick = {this.updateCount}>Count is { this.state.count }</button>
        )
    }
}

export default CounterButton