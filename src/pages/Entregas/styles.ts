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
        backgroundColor: '#e5e5e5',
        justifyContent: 'flex-start'
    },
    item: {
        width: '95%',
        flexDirection:'row',
        height: width * 0.27 ,
        backgroundColor: 'white',
        borderRadius: width*0.01
    },
    item33:{
        width:'33%',
        height:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    item20:{
        width:'20%',
        height:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    circle:{
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        borderWidth: 1, 
        borderColor:'#FF032A',
        borderRadius: width*0.1,
    },
    item47:{
        width:'47%',
        height:'100%',
        flexDirection:'column',
        alignItems:'flex-start',

        justifyContent:'space-around'
    },
    icons:{
        width: width*0.1,
        height: width*0.1,
    },
    entregeVerde:{
        width:'100%',
        height: width*0.07,
        backgroundColor:'#0BAA75',
        alignItems:'center',
        justifyContent:'center'
    },
    textentrege:{
        color:'white',
        fontSize: width*0.04,
    },
    solittile:{
        color:'#707070',
        fontSize: width*0.04,
        padding: width*0.03
    },
    testDec:{
        color:'#707070',
        fontSize: width*0.04,
        padding: width*0.01
    }

});
export default styles;