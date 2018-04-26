/// <reference path="../../index.d.ts" />
import * as Sugar from 'sugar'
import * as Orientation from 'react-native-orientation'
import { Platform, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const BaseSize: ZeplinSize = { height: (Platform.OS === 'ios' ? 667 : 640), width: (Platform.OS === 'ios' ? 375 : 360) }
const RealWidth = Orientation.getInitialOrientation() === 'PORTRAIT' ? width : height
const RealHeight = Orientation.getInitialOrientation() === 'PORTRAIT' ? height : width
const WResize: any = ['paddingHorizontal', 'marginHorizontal', 'borderWidth', 'borderBottomWidth', 'borderLeftWidth',
    'borderRightWidth', 'borderTopWidth', 'maxLength', 'marginLeft', 'marginRight', 'paddingLeft', 'paddingRight',
    'left', 'right', 'maxWidth', 'minWidth', 'width']
const HResize: any = ['paddingVertical', 'marginVertical', 'letterSpacing', 'lineHeight', 'fontSize', 'marginBottom',
    'marginTop', 'paddingBottom', 'paddingTop', 'bottom', 'top', 'maxHeight', 'minHeight', 'height']
const CrossProperty: any = ['margin', 'padding']
const WFactor: number = Sugar.Number.round((RealWidth / BaseSize.width), 2)
const HFactor: number = Sugar.Number.round((RealHeight / BaseSize.height), 2)

export const getComponentStyle = (component: any) => {
    let styles: any = {}
    Sugar.Object.forEach(component, (val, key) => {
        if (Sugar.Object.isObject(val)) {
            if (key === 'ios' || key === 'android') {
                styles = getComponentStyle(Object.assign(styles, (component[Platform.OS] || {})))
            } else {
                styles[key] = getComponentStyle(val)
            }
        } else {
            if (Sugar.Object.isNumber(val)) {
                if (CrossProperty.includes(key)) {
                    styles[`${key}Horizontal`] = Sugar.Number.ceil(WFactor * val)
                    styles[`${key}Vertical`] = Sugar.Number.ceil(HFactor * val)
                } else {
                    styles[key] = WResize.includes(key) ? Sugar.Number.ceil(WFactor * val) :
                        HResize.includes(key) ? Sugar.Number.ceil(HFactor * val) : val
                }
            } else {
                styles[key] = val
            }
        }
    })
    return styles
}