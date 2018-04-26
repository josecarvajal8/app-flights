import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import { DatePickerAndroid } from 'react-native'
import { styles } from './style'
import { Card } from '../Card'
import { Convert } from '../../Helpers/Transform'
export const SearchRound = (props) => {
    const { roudTrip, getAirports, departCity, arriveCity, departDate, returningDate, setDateDepart } = props
    async function datePicker(property) {
        try {
            const { action, year, month, day } = await DatePickerAndroid.
            open({ date: new Date(), minDate: new Date(departDate) })
            if (action === DatePickerAndroid.dismissedAction) {
                return
            }
            setDateDepart(property, Convert.convertDateDash(new Date(year, month, day)))
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message)
        }
    }
    return (
        <View>
            <LinearGradient style={styles.destinyTrip}
                colors={['rgba(9,72,178,1)', 'rgba(0,0,0,0.5)']}
                start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 2.0 }}>
                <TouchableOpacity onPress={() => getAirports('depart')} style={styles.btnFrom}>
                    <Card styleCard={styles.cardStyle}>
                        <Text style={styles.textDestiny}>{departCity.iata}</Text>
                        <Text style={styles.cityNameText}>{departCity.city}</Text>
                    </Card>
                </TouchableOpacity>
                <Icon name={'repeat-once'} style={styles.iconPlane} />
                <TouchableOpacity onPress={() => getAirports('arrive')} style={styles.btnTo}>
                    <Card styleCard={styles.cardStyle}>
                        <Text style={styles.textDestiny}>{arriveCity.iata}</Text>
                        <Text style={styles.cityNameText}>{arriveCity.city}</Text>
                    </Card>
                </TouchableOpacity>
            </LinearGradient>
            <View style={styles.viewDates}>
                <TouchableOpacity onPress={() => datePicker('depart')} style={styles.btnDepartDate}>
                    <Card styleCard={styles.cadrDateStyle}>
                        <Text style={styles.datesText}>{departDate}</Text>
                        <Text style={styles.cityNameText}>{'Depart '}<Icon name={'calendar'} /></Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => datePicker('arrive')} style={styles.btnReturnDate}>
                    <Card styleCard={styles.cadrDateStyle}>
                        <Text style={styles.datesText}>{returningDate}</Text>
                        <Text style={styles.cityNameText}>{'Return '}<Icon name={'calendar'} /></Text>
                    </Card>
                </TouchableOpacity>
            </View>
            <View style={styles.viewPassanger}>
            <Icon name={'airport'} style={styles.iconAirport}/>
            </View>

            <LinearGradient style={styles.btnSearch} colors={['rgba(9,72,178,1)', 'rgba(0,0,0,0.5)']}
                start={{ x: 0.0, y: 0.0 }} end={{ x: 2.0, y: 0.0 }}>
                <TouchableOpacity onPress={() => roudTrip(departCity.iata, arriveCity.iata, departDate, returningDate)}
                    style={styles.btnSearch}>
                    <Text style={styles.textSearch}>{'Search Flight'}</Text>
                </TouchableOpacity>
            </LinearGradient>

        </View>
    )
}