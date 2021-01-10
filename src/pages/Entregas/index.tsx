import React from 'react';
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native';
import styles from './styles' 
const Entregas: React.FC = () => {
    const navigation = useNavigation()
    return (
        <>
            <Header title='LOVE 99 - SERRANO SUSHI' navigation={navigation} />
            <View style={styles.container}>

            </View>

        </>
    )
}

export default Entregas;