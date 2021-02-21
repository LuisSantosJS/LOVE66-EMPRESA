import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ops: {
        width: '80%',
        minHeight: '50%',
    },
    textT: {
        fontSize: width * 0.055,
        fontWeight: 'bold',
        color: '#707070',
        textAlign: 'center'
    },
    textD: {
        fontSize: width * 0.045,
        fontWeight: '400',
        color: '#707070',
        width: '80%',
        textAlign: 'center'
    },
});
export default styles;