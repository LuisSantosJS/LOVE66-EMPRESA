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
        justifyContent: 'flex-start'
    },
    rows: {
        width: width * 0.9,
        height: width * 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    viewStstusItems: {
        width: '100%',
        height: width * 0.14,
        borderRadius: width * 0.02,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    statusText: {
        color: 'white',
        fontSize: width * 0.05,
        fontWeight: '700',
        padding: 5
    },
    endVier: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: width * 0.02,
        borderBottomLeftRadius: width * 0.02,
        backgroundColor: 'white'
    },
    texto: {
        color: '#707070',
        fontSize: width * 0.05
    },
    titelss: {
        width: '90%',
        color: '#707070',
        fontSize: width * 0.05

    },
    titelsss: {
        width: '90%',
        color: '#707070',
        fontSize: width * 0.045,
        padding: 5
    },
    view: {
        width: width * 0.9,
        borderRadius: width * 0.02,
        height: width * 0.5,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#707070',
        fontSize: width*0.045,
        padding: 5
    }
});
export default styles;