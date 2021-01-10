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
        minHeight: width,
        justifyContent: 'flex-start'
    },
    text: {
        color: '#707070',
        fontSize: width * 0.05,
        fontWeight: '600',

    },
    row: {
        width: '90%',
        height: width * 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: width * 0.0014,
        borderColor: '#707070'
    },
    icon: {
        width: width * 0.09,
        height: width * 0.09
    },
    txt: {
        fontSize: width * 0.05,
        color: '#707070',
        fontWeight: '700',
        paddingHorizontal: 5,


    }
});
export default styles;