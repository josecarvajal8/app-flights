import React from 'react'
import { FlatList, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Convert } from '../../Helpers/Transform'
import { Flight } from '../Flight'
import { Card } from '../Card'
import { styles } from './style'
export const ListFlights = (props) => {
    const { flights, arrayKeys, moreThanOne } = props
    function flight(data) {
        return (
            <FlatList
                data={flights[data]}
                renderItem={({ item }) => <Flight flights={item} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false} />
        )
    }
    function noResult() {
        return (
            <Text style={styles.noResulText}>{'Sorry! We did not find flights'}</Text>
        )
    }
    function oneWayFlight() {
        if (Convert.checkArray(flights)) {
            return (
                <FlatList
                    data={flights}
                    renderItem={({ item }) => <Flight flights={item} />}
                    keyExtractor={(item) => item._id}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}/>
            )
        } else {
            return (
                noResult()
            )
        }
    }
    return (
        <View>
            <LinearGradient style={styles.navBar}
                colors={['rgba(9,72,178,1)', 'rgba(245,254,255,1)']}
                start={{ x: 0.0, y: 0.0 }} end={{ x: 2, y: 1.0 }}>
                <StatusBar backgroundColor='rgba(0,0,0,0.2)' translucent={true} />
                <View style={styles.headNavBar}>
                    <TouchableOpacity onPress={() => Actions.home()} style={styles.btnBack}>
                        <Icon name={'arrow-left'} style={styles.iconBack} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{'Flights'}</Text>
                </View>
            </LinearGradient>
            <View style={styles.listContainer}>
            {moreThanOne && <FlatList
                data={arrayKeys}
                renderItem={({ item }) => <Card styleCard={styles.cardStyle}>
                    <Text style={styles.textCardContainer}>{Convert.converTextCap(item)}</Text>
                    {Convert.checkArray(flights[item]) ? flight(item) : noResult()}
                </Card>}
                horizontal={false}
                showsVerticalScrollIndicator={false}/>}
            {!moreThanOne && oneWayFlight()}
            </View>
        </View>
    )
}