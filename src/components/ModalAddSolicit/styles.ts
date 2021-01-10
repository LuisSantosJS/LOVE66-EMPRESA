import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
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
    textSubmit:{
        color:'white',
        fontSize: width*0.045,
        fontWeight: '400'
    }


});
export default styles;