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

    },
    itemView: {
        width: width,
        height: width * 0.44,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        width: width - (width * 0.05),
        height: width * 0.5 - width * 0.06,
        backgroundColor: '#e5e5e5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    moto: {
        width: width * 0.14,
        height: width * 0.14,
    },
    circleItem: {
        width: width * 0.2,
        height: width * 0.2,
        borderRadius: (width * 0.2) / 2,
        borderWidth: 1,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyItem: {
        width: width * 0.7,
        height: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: width * 0.04,
        justifyContent: 'space-around'
    },
    borderItemAlert: {
        width: '95%',
        height: width * 0.06,
        backgroundColor: '#0BAA75',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text0: {
        color: '#707070',
        fontSize: width * 0.04,

    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView: {
        width: '100%',
        height: width - (width * 0.1),
        backgroundColor: 'white'
    },
    headerModal: {
        width: '100%',
        height: '20%',
        backgroundColor: '#FF032A',
        alignItems: 'center',
        justifyContent: 'center'

    },
    utilView: {
        width: '100%',
        height: '80%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textsmodal: {
        color: 'white',
        fontSize: width * 0.045,
        fontWeight: '400'
    },
    titleModal: {
        color: '#707070',
        fontSize: width * 0.045,
        textAlign: 'center',
        padding: width * 0.04
    },
    titleDesc: {
        color: '#707070',
        fontSize: width * 0.035,
        textAlign: 'center',
    },
    input: {
        width: '90%',
        height: width * 0.15,
        backgroundColor: '#EBEBEB',
        paddingHorizontal: width * 0.03
    },
    submit: {
        width: width * 0.5,
        height: width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF032A',
        borderRadius: width * 0.05
    },
    textSubmit: {
        color: 'white',
        fontSize: width * 0.045,
        fontWeight: '400'
    }

});
export default styles;