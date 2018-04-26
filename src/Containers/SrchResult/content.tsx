import React, { Component } from 'react'
import { View } from 'react-native'
import { ListFlights } from '../../Components/ListFlights'

export default class SrchResult extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {arrayKeys, flights, moreThanOne} = this.props
        return (
            <View>
                <ListFlights flights ={flights} arrayKeys={arrayKeys} moreThanOne={moreThanOne}/>
            </View>
        )
    }
}