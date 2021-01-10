import React from 'react';
import { View, Text } from 'react-native'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import styles from './styles'
//@ts-ignore
import OPs from '../../assets/ops.png'
//@ts-ignore 
import Add from '../../assets/icons/addM.png'
const Home: React.FC = () => {
    const navigation = useNavigation();
    return (
        <>
            <Header navigation={navigation} title='LOVE 99 - SERRANO SUSHI' />
            <View style={styles.container}>
                <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.ops} source={OPs} />
                <Text style={styles.textT}>Opps... Nada por aqui</Text>
                <Text style={styles.textD}>
                    você ainda não solicitou nenhum entregador
                    para solicitar clique no <Text style={{ color: 'red' }}>botão vermelho</Text> abaixo
                </Text>
            </View>
            <View style={styles.floats}>
                <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.add} source={Add} />
            </View>
        </>
    )
}
export default Home;