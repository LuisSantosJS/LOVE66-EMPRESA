import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    header: {
        width: width,
        height: width * 0.14,
        backgroundColor: '#FF032A',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal: width*0.05
    },
    info:{
        width: width*0.07,
        height: width*0.07,
    },
    text:{
        color:'white',
        fontSize: width*0.05,
        fontWeight:'400'
    }
})
export default styles;