import {getComponentStyle} from '../../Helpers/Stylus'
export const styles = getComponentStyle({
    cardStyle: {
        width: 340,
        height: 140,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'rgba(255, 255, 255,1)',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 0.5,
        borderColor: 'rgba(9,72,178,1)'
    },
    containerGeneral: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 100,
        width: 360
    },
    iconPlane: {
        fontSize: 40,
        marginTop: 40,
        color: 'rgba(0,0,0,1)'
    },
    textGeneral: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'rgba(0,0,0,1)'
    },
    containerFromTo: {
        width: 150,
        height: 100,
        alignItems: 'center'
    },
    containerSelect: {
        width: 340,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(9,72,178,1)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    gradient: {
        width: 300,
        height: 40,
        marginLeft: 30,
        marginRight: 30
    },
    textPrice: {
        marginLeft: 200,
        marginTop: 10,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,1)'
    },
    textDetail: {
        marginLeft: 10,
        marginTop: 10,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,1)'
    },
    breakLine: {
        width: 320,
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: 10,
        marginRight: 10
    },
    textDates: {
        fontSize: 10
    }
})