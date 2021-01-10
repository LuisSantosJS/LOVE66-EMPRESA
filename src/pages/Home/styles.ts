import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ops: {
        width: '70%',
        minHeight: '40%',
    },
    textT: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#707070',
        textAlign: 'center'
    },
    textD: {
        fontSize: width * 0.045,
        fontWeight: '400',
        color: '#707070',
        width: '70%',
        textAlign: 'center'
    },
    floats: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: (width * 0.15) / 2,
        backgroundColor: '#FF032A',
        left: width - (width * 0.2),
        position: 'absolute',
        top: height - (width * 0.45 - getStatusBarHeight(true)),
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 10, height: 10, },
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOpacity: 4.0,
        elevation: 2
    },
    add: {
        width: width * 0.07,
        height: width * 0.07,

    }
});
export default styles;