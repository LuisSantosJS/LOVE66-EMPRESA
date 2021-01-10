import React from 'react';
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native';
import styles from './styles'
import FastImage from 'react-native-fast-image';

//@ts-ignore

import Moto from '../../assets/moto.png'
const Entregas: React.FC = () => {
    const navigation = useNavigation()
    return (
        <>
            <Header title='LOVE 99 - SERRANO SUSHI' navigation={navigation} />
            <View style={styles.container}>
                <View style={{ padding: 7 }} />
                <View style={styles.item}>
                    <View style={styles.item20}>
                        <View style={styles.circle}>
                            <FastImage source={Moto} style={styles.icons} />
                        </View>
                    </View>

                    <View style={styles.item47}>
                        <Text style={styles.solittile}>SOLICITAÇÃO #2304</Text>
                        <View style={{ padding: 5 }} />

                        <Text style={styles.testDec}>Entregas: 3</Text>
                        <Text style={styles.testDec}>Pagamento: Cartão</Text>
                        <Text style={styles.testDec}>Entregador: Seu zé</Text>

                    </View>

                    <View style={styles.item33}>
                        <View style={styles.entregeVerde}>
                            <Text style={styles.textentrege}>Entregue</Text>
                        </View>
                    </View>
                </View>
            </View>

        </>
    )
}

export default Entregas;