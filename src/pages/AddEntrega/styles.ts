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
        borderRadius: width*0.08,
        alignItems:'center',
        justifyContent:'center'
    },
    textsubmit:{
        color:'white',
        fontSize: width*0.045
    },
    textTerm:{
        color:'#707070',
        fontSize: width*0.04,
        width:'70%',
        textAlign:'center',
        padding: 5
    }
});
export default styles;