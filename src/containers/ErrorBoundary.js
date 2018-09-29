import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({ hasError: true})
    }

    render(){
        /* if(true){
            throw new Error('Ooooooooooops')
        } */
        const { hasError } = this.state
        if( hasError ){
            return <h2>Something went wrong!!!</h2>
        }
        return this.props.children
    }
}

export default ErrorBoundary