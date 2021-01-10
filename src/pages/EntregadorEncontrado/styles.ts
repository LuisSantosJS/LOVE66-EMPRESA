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
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: width * 0.05,
        color: '#707070',
        padding: width * 0.04,
        textAlign: 'center'

    },
    title0: {
        fontSize: width * 0.04,
        color: '#707070',
        textAlign: 'center'
    },
    title1: {
        fontSize: width * 0.04,
        color: '#707070',
        textAlign: 'justify',
        width: '80%',


    },
    titleB: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: width * 0.03,
        color: '#707070',
        fontSize: width * 0.05
    },
    view: {
        width: width * 0.9,
        height: width * 0.5,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    testyd: {
        color: '#707070',
        fontWeight: '400',
        textAlign: 'center',
        fontSize: width * 0.045
    },
    moto:{
        width: width*0.1,
        height: width*0.1
    }

});
export default styles;