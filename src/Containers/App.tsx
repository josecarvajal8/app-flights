import React, { Component } from 'react'
import {Routes} from '../Config/Router'

export default class App extends Component {
    constructor(props) {
        super(props)
        console.disableYellowBox = true
    }
    render() {
        return (<Routes/>)
    }
}