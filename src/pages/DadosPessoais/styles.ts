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
    inputs: {
        width: width*0.85,
        height: width*0.13,
        paddingHorizontal: width*0.04,
        borderWidth: 1,
        borderColor:'#707070',
        borderRadius: 5,
        color:'#707070'

    },
    totle: {
        fontSize: width * 0.05,
        width: width*0.85,
        color: '#707070',
        
    }
});
export default styles;