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
    headrIIamge:{
        width: width,
        height: width- width*0.008,
    },
    text:{
        color:'#707070',
        fontSize: width*0.05,
        fontWeight:'500',
        width:'90%',
        textAlign:'center',
        padding: width*0.08
    },
    inputs:{
        width: width*0.9,
        height: width*0.16,
        paddingHorizontal: width*0.04,
        borderRadius: width*0.04,
        backgroundColor:'#EBEBEB'
    },
    submit:{
        width: width*0.9,
        height: width*0.16,
        borderRadius: width*0.07,
        backgroundColor:'#FF032A',
        alignItems:'center',
        justifyContent:'center'
    },
    textSubmit:{
        color:'white',
        fontSize: width*0.045
    }
});
export default styles;