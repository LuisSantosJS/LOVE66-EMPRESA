import React from 'react';
import { View } from 'react-native'
import styles from './styles'
import { useUserData } from '../../context/Auth'
const DadosPessoais: React.FC = () => {
    const { userData } = useUserData()
    return (
        <>
            <View style={styles.container}>


            </View>
        </>
    )
}
export default DadosPessoais;