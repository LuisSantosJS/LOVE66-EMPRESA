import React from 'react';
import {
    View,
    Text,
} from 'react-native'
import styles from './styles'
import FastImage from 'react-native-fast-image'
//@ts-ignore
import OPs from '../../../assets/ops.png'
const NotDeliveries: React.FC = () => {
    return (
        <>
            <View style={styles.container}>
                <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.ops} source={OPs} />
                <Text style={styles.textT}>Opps... Nada por aqui</Text>
                <Text style={styles.textD}>
                    Nenhuma entrega foi realizada no momento!
                </Text>
            </View>
        </>
    )
}
export default NotDeliveries;