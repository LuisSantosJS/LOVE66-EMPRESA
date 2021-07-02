import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white',
        width: width,
        minHeight: height,
        justifyContent: 'flex-start'
    },
    headrIIamge: {

        width: width * 0.6,
        height: width * 0.6,
    },
    text: {
        color: '#707070',
        fontSize: width * 0.05,
        fontWeight: '500',
        width: '90%',
        textAlign: 'center',
        padding: width * 0.08
    },
    inputs:{
        width:'85%',
        height: width*0.15,
        padding: 14,
        borderWidth: 0.7,
        borderColor:'#e5e5e5',
        borderRadius: width*0.03,
        fontSize: width*0.04
    },
    submit: {
        width: width * 0.7,
        height: width * 0.14,
        borderRadius: width * 0.07,
        backgroundColor: '#FF032A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSubmit: {
        color: 'white',
        fontSize: width * 0.045
    },
    tex: {
        fontWeight: 'bold',
        color: '#FF032A',
        fontSize: width * 0.055
    },
    textt:{
        fontSize: width*0.035,
        textAlign:'center',
        padding:7,
        color:'#707070',
        width:'70%'

    }
});
export default styles;