import React, { Component } from 'react'
import { View, ToastAndroid } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable'
import { NavBar } from '../../Components/NavBar'
import { SearchRound } from '../../Components/SearchRound'
import { SearchOneW } from '../../Components/SearchOneWay'
import { SearchMulti } from '../../Components/SearchMultiTrip'
import { Services } from '../../Helpers/services'
import { Convert } from '../../Helpers/Transform'
import { buttonAnimation } from '../../Helpers/Animated'
const depart = 'depart'
const arrive = 'arrive'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roundTrip: true,
            oneWay: false,
            multiTrip: false,
            flights: null,
            cities: null,
            departCity: { iata: 'MDE', city: 'MEDELLIN' },
            arriveCity: { iata: 'BOG', city: 'BOGOTA' },
            departDate: Convert.convertDateDash(new Date()),
            returningDate: Convert.convertDateDash(new Date()),
            routes: []
        }
        this.changeTabs = this.changeTabs.bind(this)
        this.oneWayTrip = this.oneWayTrip.bind(this)
        this.getAirports = this.getAirports.bind(this)
        this.setDestinies = this.setDestinies.bind(this)
        this.setDateDepart = this.setDateDepart.bind(this)
        this.roudTrip = this.roudTrip.bind(this)
        this.setRoutes = this.setRoutes.bind(this)
        this.multyTrip = this.multyTrip.bind(this)
        this.cleanRoutes = this.cleanRoutes.bind(this)
        buttonAnimation()
    }
    oneWayView: any
    handlerViewOne = ref => this.oneWayView = ref
    oneWayViewA() {
        this.oneWayView.fadeIn()
    }
    roundView: any
    handlerViewRound = ref => this.roundView = ref
    roundViewA() {
        this.roundView.fadeIn()
    }
    multyView: any
    handlerViewMulty = ref => this.multyView = ref
    multyViewA() {
        this.multyView.fadeIn()
    }
    render() {
        const { roundTrip, multiTrip, oneWay, departCity, arriveCity, departDate, returningDate, routes } = this.state
        return (
            <View>
                <NavBar changeTabs={this.changeTabs} roundTrip={roundTrip} multiTrip={multiTrip} oneWay={oneWay} />
                <Animatable.View
                    ref={this.handlerViewRound}
                    duration={500}>
                    {roundTrip && <SearchRound roudTrip={this.roudTrip} getAirports={this.getAirports}
                        departCity={departCity} arriveCity={arriveCity} departDate={departDate}
                        setDateDepart={this.setDateDepart} returningDate={returningDate} />}
                </Animatable.View>
                <Animatable.View
                    ref={this.handlerViewOne}
                    duration={500}>
                    {oneWay && <SearchOneW oneWayTrip={this.oneWayTrip} getAirports={this.getAirports}
                        departCity={departCity} arriveCity={arriveCity} departDate={departDate}
                        setDateDepart={this.setDateDepart} />}
                </Animatable.View>
                <Animatable.View
                    ref={this.handlerViewMulty}
                    duration={500}>
                    {multiTrip && <SearchMulti getAirports={this.getAirports}
                        departCity={departCity} arriveCity={arriveCity}
                        departDate={departDate} multyTrip={this.multyTrip}
                        setDateDepart={this.setDateDepart} routes={routes} setRoutes={this.setRoutes}
                        cleanRoutes={this.cleanRoutes} />}
                </Animatable.View>
            </View>
        )
    }
    oneWayTrip(origin, destiny, date) {
        Services.oneWayTrip(origin, destiny, date).then(res => {
            this.setState({ flights: res })
            const more = false
            const data = {
                moreThanOne: more,
                flights: this.state.flights
            }
            Actions.result(data)
        })
    }
    multyTrip() {
        if (this.state.routes.length > 0) {
            Services.multyTrip({ trips: this.state.routes }).then(res => {
                this.setState({ flights: res, routes: [] })
                const arrayKeys = Object.keys(res)
                const more = true
                const data = {
                    arrayKeys: arrayKeys,
                    moreThanOne: more,
                    flights: this.state.flights
                }
                Actions.result(data)
            })
        } else {
            ToastAndroid.show('You should add at least one flight', ToastAndroid.SHORT)
        }
    }
    roudTrip(origin, destiny, date, returningDate) {
        Services.roudTrip(origin, destiny, date, returningDate).then(res => {
            this.setState({ flights: res })
            const arrayKeys = Object.keys(res)
            const more = true
            const data = {
                arrayKeys: arrayKeys,
                moreThanOne: more,
                flights: this.state.flights
            }
            Actions.result(data)
        })
    }
    setDateDepart(property, date) {
        switch (property) {
            case depart:
                this.setState({ departDate: date })
                break
            case arrive:
                this.setState({ returningDate: date })
                break
            default:
                break
        }
    }
    setRoutes(data) {
        let array = this.state.routes
        array.push(data)
        this.setState({ routes: array })
        ToastAndroid.show('Trip added', ToastAndroid.SHORT)
    }
    cleanRoutes() {
        let array = []
        this.setState({ routes: array })
        ToastAndroid.show('Trips Panel clean', ToastAndroid.SHORT)
    }
    getAirports(property) {
        Services.getAirports().then(res => {
            this.setState({ cities: res })
            Actions.modal({ cities: this.state.cities, property: property, setDestinies: this.setDestinies })
        })
    }
    setDestinies(property, data) {
        switch (property) {
            case depart:
                this.setState({ departCity: data })
                Actions.pop()
                break
            case arrive:
                this.setState({ arriveCity: data })
                Actions.pop()
                break
            default:
                break
        }
    }
    changeTabs(active) {
        switch (active) {
            case 1:
                this.setState({ oneWay: false, roundTrip: true, multiTrip: false })
                this.roundViewA()
                break
            case 2:
                this.setState({ oneWay: true, roundTrip: false, multiTrip: false })
                this.oneWayViewA()
                break
            case 3:
                this.setState({ oneWay: false, roundTrip: false, multiTrip: true })
                this.multyViewA()
                break
            default:
                this.setState({ oneWay: false, roundTrip: true })
        }
    }
}