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
        width: width * 0.08,
        height: width * 0.08
    },
    txt: {
        fontSize: width * 0.045,
        color: '#707070',
        fontWeight: '700',
        paddingHorizontal: 5,

    },
    rows0: {
        width: '80%',
        height: width * 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    money: {
        width: width * 0.1,
        height: width * 0.1
    },
    agenda: {
        width: width * 0.09,
        height: width * 0.09
    },
    dataAc: {
        fontSize: width * 0.045,
        fontWeight: '700',
        color: '#191919'
    },
    dataDesc: {
        fontSize: width * 0.045,
        fontWeight: '700',
        color: '#707070'
    },
    rowTex:{
        color:'#707070',
        fontSize: width*0.045,
        fontWeight: '700',
        paddingHorizontal: width*0.03
    }
});
export default styles;