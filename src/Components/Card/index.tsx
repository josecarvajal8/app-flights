import React from 'react'
import { View } from 'react-native'
export const Card = (props) => {
    const { styleCard, children } = props
    return (
        <View style={styleCard}>
            {children}
        </View>
    )
}