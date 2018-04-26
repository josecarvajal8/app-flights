import React from 'react'
import { Scene, Router, Lightbox } from 'react-native-router-flux'
import Home from '../Containers/Home/content'
import SrchResult from '../Containers/SrchResult/content'
import { ModalCities } from '../Components/ModalCities'
import DetailFlight from '../Containers/DetailFlight/content'
export const Routes = () => {
    return (
        <Router>
                <Scene key={'root'}>
                    <Scene key={'home'} component={Home} hideNavBar />
                    <Scene key={'result'} component={SrchResult} hideNavBar/>
                    <Scene key={'flightDetail'} component={DetailFlight} hideNavBar/>
                    <Scene key={'modal'} component={ModalCities} hideNavBar/>
                </Scene>
        </Router>
    )
}