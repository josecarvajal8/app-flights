import React from 'react'
import { View, TouchableOpacity, Text, DatePickerAndroid, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './style'
import { Card } from '../Card'
import { Convert } from '../../Helpers/Transform'
export const SearchMulti = (props) => {
    const { cleanRoutes, getAirports, departCity, arriveCity, departDate, routes, setRoutes, multyTrip } = props
    async function datePicker() {
        const { setDateDepart } = props
        try {
            const { action, year, month, day } = await DatePickerAndroid.
            open({ date: new Date(), minDate: new Date() })
            if (action !== DatePickerAndroid.dismissedAction) {
                setDateDepart('depart', Convert.convertDateDash(new Date(year, month, day)))
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message)
        }
    }
    return (
        <View>
            <LinearGradient style={styles.destinyTrip}
                colors={['rgba(9,72,178,1)', 'rgba(0,0,0,0.5)']}
                start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 2.0 }}>
                <View style={styles.viewSelects}>
                    <TouchableOpacity onPress={() => getAirports('depart')} style={styles.btnFrom}>
                        <Card styleCard={styles.cardStyle}>
                            <Text style={styles.textDestiny}>{departCity.iata}</Text>
                            <Text style={styles.cityNameText}>{departCity.city}</Text>
                        </Card>
                    </TouchableOpacity>
                    <Icon name={'airplane-takeoff'} style={styles.iconRoundTrip} />
                    <TouchableOpacity onPress={() => getAirports('arrive')} style={styles.btnTo}>
                        <Card styleCard={styles.cardStyle}>
                            <Text style={styles.textDestiny}>{arriveCity.iata}</Text>
                            <Text style={styles.cityNameText}>{arriveCity.city}</Text>
                        </Card>
                    </TouchableOpacity>
                    <Icon name={'calendar'} style={styles.iconRoundTrip} />
                    <TouchableOpacity onPress={() => datePicker()} style={styles.btnTo}>
                        <Card styleCard={styles.cardStyle}>
                            <Text style={styles.datesText}>{departDate}</Text>
                            <Text style={styles.cityNameText}>{'Depart'}<Icon name={'airplane-takeoff'} /></Text>
                        </Card>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewOptionsTrip}>
                    <TouchableOpacity onPress=
                        {() => setRoutes({ origin: departCity.iata, destiny: arriveCity.iata, date: departDate })}
                        style={styles.BtnAddFlight}>
                        <Text style={styles.textBtnAdd}>{'ADD'}
                            <Icon style={styles.iconBtnOption} name={'plus-circle'} /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => cleanRoutes()} style={styles.cleanBtn}>
                        <Text style={styles.textBtnAdd}>{'CLEAN'}
                            <Icon style={styles.iconBtnOption} name={'close-circle-outline'} /></Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <View style={styles.viewRoutes}>
                <Text style={styles.textTripsPanel}>TRIPS PANEL</Text>
                <FlatList
                    data={routes}
                    renderItem={({ item }) => <Card styleCard={styles.cardTripsPanel}>
                        <Text style={styles.textTripsStyle}> {item.origin}</Text>
                        <Icon name={'airplane-takeoff'} style={styles.iconCardTrips} />
                        <Text style={styles.textTripsStyle}> {item.destiny}</Text>
                        <Text style={styles.textTripsStyle}> {item.date}</Text>
                    </Card>}
                    extraData={props}
                    horizontal={false} />
            </View>
            <LinearGradient style={styles.btnSearch} colors={['rgba(9,72,178,1)', 'rgba(0,0,0,0.5)']}
                start={{ x: 0.0, y: 0.0 }} end={{ x: 2.0, y: 0.0 }}>
                <TouchableOpacity onPress={() => multyTrip()}
                    style={styles.btnSearch}>
                    <Text style={styles.textSearch}>{'Search Flight'}</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}
  }
