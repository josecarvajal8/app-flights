import {getComponentStyle} from '../../Helpers/Stylus'
export const styles = getComponentStyle({
    fatherContainer: {
        height: 128,
        width: 360
    },
    tabsContainer: {
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.05)',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        marginTop: 40,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,1)'
    },
    tabsTitle: {
        color: 'rgba(255,255,255,1)',
        fontWeight: 'bold',
        marginTop: 10
    },
    btnTabs: {
        height: 40,
        width: 120,
        alignItems: 'center'
    },
    btnTabsActive: {
        height: 40,
        width: 120,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        position: 'absolute',
        opacity: 0,
        backgroundColor: 'rgba(255, 255, 255,.3)'
    }
})