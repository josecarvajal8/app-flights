import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Card } from '../Card'
import { styles } from './style'
import { Convert } from '../../Helpers/Transform'
import { Actions } from 'react-native-router-flux'
export const Flight = (props) => {
    const { origin, destination, departureTime, landingTime, price } = props.flights
    return (
        <Card styleCard={styles.cardStyle}>
            <View style={styles.containerGeneral}>
                <View style={styles.containerFromTo}>
                    <Text style={styles.textGeneral}>{origin.iata}</Text>
                    <Text>{origin.city}</Text>
                    <Text style={styles.textDates}>{Convert.converDateWeekDay(departureTime)}</Text>
                </View>
                <Icon name={'airplane-takeoff'} style={styles.iconPlane} />
                <View style={styles.containerFromTo}>
                    <Text style={styles.textGeneral}>{destination.iata}</Text>
                    <Text>{destination.city}</Text>
                    <Text style={styles.textDates}>{Convert.converDateWeekDay(landingTime)}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => Actions.flightDetail(props.flights)} style={styles.containerSelect}>
                <Text style={styles.textDetail}>{'>>> View Detail'}</Text>
                <Text style={styles.textPrice}>{`$${price}`}</Text>
            </TouchableOpacity>
        </Card>
    )
}