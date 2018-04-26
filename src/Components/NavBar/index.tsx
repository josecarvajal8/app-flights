import React from 'react'
import { View, Text, StatusBar, TouchableOpacity, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable'
import { styles } from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { buttonAnimation } from '../../Helpers/Animated'

export const NavBar = ({ changeTabs, roundTrip, multiTrip, oneWay }) => {
    buttonAnimation()
    let btnRound: any
    let btnOneWay: any
    let btnMulty: any
    const handlerBtnRound = ref => btnRound = ref
    const handlerBtnOneWay = ref => btnOneWay = ref
    const handlerBtnMulty = ref => btnMulty = ref
    function round() {
        btnRound.zoomOut()
    }
    function oneWayA() {
        btnOneWay.zoomOut()
    }
    function multy() {
        btnMulty.zoomOut()
    }
    return (
        <LinearGradient style={styles.fatherContainer}
            colors={['rgba(9,72,178,1)', 'rgba(245,254,255,1)']}
            start={{ x: 0.0, y: 0.0 }} end={{ x: 2, y: 1.0 }}>
            <StatusBar backgroundColor='rgba(0,0,0,0.2)' translucent={true} />
            <Text style={styles.title}>{'Around'}</Text>
            <View style={styles.tabsContainer}>
                <TouchableOpacity onPress={() => {
                    changeTabs(1)
                    round()
                }}
                    style={[roundTrip ? styles.btnTabsActive : styles.btnTabs]} >
                    <Animatable.View
                        ref={handlerBtnRound}
                        duration={1000}
                        style={styles.circle as ViewStyle}
                    >
                    </Animatable.View>
                    <Text style={styles.tabsTitle}>{'Round Trip '} <Icon name={'autorenew'}/></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    changeTabs(2)
                    oneWayA()
                }}
                    style={[oneWay ? styles.btnTabsActive : styles.btnTabs]} >
                    <Animatable.View
                        ref={handlerBtnOneWay}
                        duration={1000}
                        style={styles.circle as ViewStyle}
                    >
                    </Animatable.View>
                    <Text style={styles.tabsTitle}>{'One way '}<Icon name={'airplane-takeoff'}/></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    changeTabs(3)
                    multy()
                }}
                    style={[multiTrip ? styles.btnTabsActive : styles.btnTabs]}>
                    <Animatable.View
                        ref={handlerBtnMulty}
                        duration={1000}
                        style={styles.circle as ViewStyle}
                    >
                    </Animatable.View>
                    <Text style={styles.tabsTitle}>{'Multi Destiny '}<Icon name={'ray-start-end'}/></Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}