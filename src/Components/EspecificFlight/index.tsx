import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Text, TouchableOpacity, StatusBar, Image, FlatList } from 'react-native'
import { styles } from './style'
import { Convert } from '../../Helpers/Transform'
import { Card } from '../Card'
export const EspecificFlight =
    (props) => {
        const { capacity, company, departureTime, destination,
            duration, image, landingTime, origin, segments } = props.data
        function stopsOver() {
            return (
                <Card styleCard={styles.cardStopOver}>
                    <Text style={styles.textTitleSegment}>{'STOP OVER'}</Text>
                    <FlatList data={segments}
                        renderItem={({ item }) => <Card styleCard={styles.cardSegment}>
                            <Text style={styles.textOrign}> {item.origin}</Text>
                            <Icon name={'airplane-takeoff'} style={styles.iconCardSegment} />
                            <Text style={styles.textOrign}> {item.destination}</Text>
                        </Card>}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false} />
                </Card>
            )
        }
        return (
            <View>
                <LinearGradient style={styles.navBar}
                    colors={['rgba(9,72,178,1)', 'rgba(245,254,255,1)']}
                    start={{ x: 0.0, y: 0.0 }} end={{ x: 2, y: 1.0 }}>
                    <StatusBar backgroundColor='rgba(0,0,0,0.2)' translucent={true} />
                    <View style={styles.headNavBar}>
                        <TouchableOpacity onPress={() => Actions.pop()} style={styles.btnBack}>
                            <Icon name={'arrow-left'} style={styles.iconBack} />
                        </TouchableOpacity>
                        <Text style={styles.title}>{Convert.converTextCap('detail flight')}</Text>
                    </View>
                </LinearGradient>
                <Image style={styles.image}
                    source={{ uri: image }} />
                <Card styleCard={styles.styleCard}>
                    <View style={styles.containerDetail}>
                        <View style={styles.containerTextDetail}>
                            <Text style={styles.mainTextDetail}>{origin.iata}</Text>
                            <Text style={styles.regularTextDetail} ellipsizeMode='tail' numberOfLines={1}>
                                {origin.name}</Text>
                            <Text style={styles.mainTextDetail}>{origin.city}</Text>
                            <Text style={styles.regularTextDetail}>{Convert.converDateWeekDay(departureTime)}</Text>
                        </View>
                        <View style={styles.containerTextDetail}>
                            <Text style={styles.mainTextDetail}>{destination.iata}</Text>
                            <Text style={styles.regularTextDetail} ellipsizeMode='tail' numberOfLines={1}>
                                {destination.name}</Text>
                            <Text style={styles.mainTextDetail}>{destination.city}</Text>
                            <Text style={styles.regularTextDetail}>{Convert.converDateWeekDay(landingTime)}</Text>
                        </View>
                    </View>
                    <View style={styles.containerOtherDetail}>
                        <Text style={styles.textOtherDetail}>
                            <Icon name={'airplane'} style={styles.iconOtherDetail} />{company.toUpperCase()}</Text>
                        <Text style={styles.textOtherDetail}>
                            <Icon name={'clock'} style={styles.iconOtherDetail} />
                            {Convert.minToH(parseInt(duration))}</Text>
                        <Text style={styles.textOtherDetail}>
                            <Icon name={'seat-recline-normal'} style={styles.iconOtherDetail} />{capacity}</Text>
                    </View>
                </Card>
                {Convert.checkArray(segments) && segments.length > 0 ? stopsOver() : null}
            </View>
        )
    }