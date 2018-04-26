import React, { Component } from 'react'
import { EspecificFlight } from '../../Components/EspecificFlight'
import { View } from 'react-native'
export default class DetailFlight extends Component {
    constructor(props) {
        super(props)
        console.log('soy det', this.props)
    }
    render() {
        return (
           <EspecificFlight data={this.props}/>
        )
    }
}