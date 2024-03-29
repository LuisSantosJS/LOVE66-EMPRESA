import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: width,
        minHeight: height,
        backgroundColor: '#e5e5e5',
        justifyContent: 'flex-start'
    },
    title: {
        color: '#707070',
        fontSize: width * 0.05,
        padding: width * 0.04
    },
    rowheaderitem: {
        width: width * 0.95,
        height: width * 0.1,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headeritemrowincon: {
        width: '40%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    icons: {
        width: width * 0.07,
        height: width * 0.07
    },
    entregatitle: {
        color: '#707070',
        fontSize: width * 0.04,
        fontWeight: '700',
        paddingHorizontal: width * 0.03
    },
    iconseta: {
        width: width * 0.07,
        height: width * 0.07,
        paddingHorizontal: width * 0.01
    },
    viewBody: {
        width: width * 0.95,
        padding: width * 0.06,
        minHeight: width,
        backgroundColor: 'white'
    },
    text: {
        color: '#707070',
        fontSize: width * 0.045
    },
    inptusd: {
        width: '100%',
        height: width * 0.13,
        paddingHorizontal: width * 0.03,
        backgroundColor: '#e5e5e5'
    },
    rowsds: {
        width: '100%',
        height: width * 0.13,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    medate: {
        height: '100%',
        width: '45%'
    },
    submit: {
        width: width * 0.9,
        height: width * 0.14,
        backgroundColor: '#FF032A',
        borderRadius: width * 0.08,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submit0: {
        width: width * 0.7,
        height: width * 0.14,
        backgroundColor: '#FF032A',
        borderRadius: width * 0.08,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textsubmit: {
        color: 'white',
        fontSize: width * 0.045
    },
    textsubmit0: {
        color: 'white',
        fontSize: width * 0.04
    },
    textTerm: {
        color: '#707070',
        fontSize: width * 0.04,
        width: '70%',
        textAlign: 'center',
        padding: 5
    },
    center: {
        width: width,
        alignItems: 'center'
    },
    floats: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: (width * 0.15) / 2,
        backgroundColor: '#FF032A',
        left: width - (width * 0.2),
        position: 'absolute',
        top: height - (width * 0.5 - getStatusBarHeight(true)),
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 10, height: 10, },
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOpacity: 4.0,
        elevation: 200
    },
    add: {
        width: width * 0.07,
        height: width * 0.07,

    },
    searchView: {

        width: width * 0.95,
        height: width * 0.16,
        backgroundColor: 'white',
        elevation: 4000,
        borderRadius: width * 0.04,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    searcIcon: {
        width: width * 0.08,
        height: width * 0.08,
    },
    seartText: {
        width: '80%',
        height: '100%'
    },
    viewItemSe: {
        width: width*0.9,
        fontSize: width * 0.045,
        color: '#707070'
    },
    viewUF: {
        width: width,
        height: height*3,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    viewUFItem: {
        width: width * 0.9,
        height: width * 0.14,
        alignItems:'flex-start',
        justifyContent:'center',
        paddingHorizontal: width*0.04,
        backgroundColor: '#e5e5e5'
    },
    textSigla:{
        color:'#707070',
        fontSize: width*0.05
    },
    modalss:{
        width: width,
        height: '100%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    itemms:{
        width: width*0.7,
        height: width*0.14,
        backgroundColor:'#f7f7f7',
        alignItems:'center',
        justifyContent:'center'
    },
    tsxtdtg:{
        color:'#707070',
        fontSize: width*0.05
    }

});
export default styles;