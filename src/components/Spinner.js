import React, { Component } from 'react'
import spinloader from '../spinloader.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={spinloader} alt="loading"/>
            </div>
        )
    }
}

export default Spinner

