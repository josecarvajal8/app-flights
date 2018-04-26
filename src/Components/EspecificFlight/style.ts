import {getComponentStyle} from '../../Helpers/Stylus'
export const styles = getComponentStyle({
    navBar: {
        height: 88,
        width: 360
    },
    headNavBar: {
        height: 50,
        width: 360,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 30,
        alignItems: 'center'
    },
    btnBack: {
        width: 30,
        height: 30,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconBack: {
        fontSize: 29,
        color: 'rgba(255,255,255,1)'
    },
    title: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,1)'
    },
    image: {
        height: 200,
        width: 360
    },
    styleCard: {
        height: 130,
        width: 340,
        backgroundColor: 'rgba(255,255,255,1)',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    mainTextDetail: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,1)'
    },
    iconPlaneDatail: {
        fontSize: 15,
        color: 'rgba(0,0,0,1)'
    },
    regularTextDetail: {
        fontSize: 10,
        color: 'rgba(0,0,0,1)'
    },
    containerDetail: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    containerTextDetail: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        height: 70
    },
    containerOtherDetail: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    iconOtherDetail: {
        fontSize: 15,
        color: 'rgba(0,0,0,1)'
    },
    textOtherDetail: {
        fontSize: 15,
        color: 'rgba(0,0,0,1)',
        marginTop: 10,
        marginLeft: 45
    },
    textAirport: {
        fontSize: 10,
        color: 'rgba(0,0,0,1)',
        marginLeft: 10
    },
    cardStopOver: {
        width: 340,
        height: 130,
        backgroundColor: 'rgba(9,72,178,1)',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    cardSegment: {
        height: 30,
        width: 320,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'rgba(255,255,255,1)'
    },
    textOrign: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,1)',
        marginTop: 5
    },
    iconCardSegment: {
        fontSize: 15,
        color: 'rgba(0,0,0,1)',
        marginLeft: 10,
        marginTop: 10
    },
    textTitleSegment: {
        fontSize: 15,
        color: 'rgba(255,255,255,1)',
        fontWeight: 'bold',
        marginLeft: 10
    }
})