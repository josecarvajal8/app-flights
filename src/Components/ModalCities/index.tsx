import React from 'react'
import { View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './style'
import { Actions } from 'react-native-router-flux'
export const ModalCities = ({ cities, property, setDestinies }) => {
    return (
        <View>
            <LinearGradient style={styles.navBar}
                colors={['rgba(9,72,178,1)', 'rgba(245,254,255,1)']}
                start={{ x: 0.0, y: 0.0 }} end={{ x: 2, y: 1.0 }}>
                <StatusBar backgroundColor='rgba(0,0,0,0.2)' translucent={true} />
                <View style={styles.headNavBar}>
                    <TouchableOpacity onPress={() => Actions.pop()} style={styles.btnClose}>
                    <Icon name={'close'} style = {styles.iconClose}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>{'Pick a city'}</Text>
                </View>
            </LinearGradient>
            <FlatList
                data={cities}
                renderItem={({ item }) => <TouchableOpacity onPress={() => setDestinies(property, item)}
                    style={styles.btnCity}>
                    <Text style={styles.textCity}>{item.city}</Text>
                    <Text style={styles.textAirportName}>{item.name}</Text>
                    <Text style={styles.textIata}>{item.iata}</Text>
                </TouchableOpacity>}
                keyExtractor={(item) => item._id}
                horizontal={false}
            />
        </View>
    )
}