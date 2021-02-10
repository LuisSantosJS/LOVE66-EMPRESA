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
});
export default styles;