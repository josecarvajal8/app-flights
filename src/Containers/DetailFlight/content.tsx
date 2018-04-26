import React, { Component } from 'react'
import { EspecificFlight } from '../../Components/EspecificFlight'
export default class DetailFlight extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
           <EspecificFlight data={this.props}/>
        )
    }
}