import React from 'react';
import Header from '../../components/Header'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles';
//@ts-ignore
import TermsIcon from '../../assets/icons/termos.png'
//@ts-ignore
import PoliIcon from '../../assets/icons/poli.png'
//@ts-ignore
import SobreSuppor from '../../assets/icons/sobre.png'
//@ts-ignore
import ExiIcon from '../../assets/icons/exit.png'
import FastImage from 'react-native-fast-image'

const Profile: React.FC = () => {
    const navigation = useNavigation();
    return (
        <>
            <Header title='LOVE 99 - SERRANO SUSHI' navigation={navigation} />
            <View style={styles.container}>
                <View style={{ padding: 10 }} />
                <Text style={styles.text}>Olá, SERRANO SUSHI</Text>
                <View style={{ padding: 10 }} />
                <View style={styles.row}>
                    <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.icon} source={TermsIcon} />
                    <Text style={styles.txt}>Termos de uso</Text>
                </View>
                <View style={styles.row}>
                    <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.icon} source={PoliIcon} />
                    <Text style={styles.txt}>Politica de privacidade</Text>
                </View>
                <View style={styles.row}>
                    <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.icon} source={SobreSuppor} />
                    <Text style={styles.txt}>Suporte</Text>
                </View>
                <View style={styles.row}>
                    <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.icon} source={ExiIcon} />
                    <Text style={styles.txt}>Sair</Text>
                </View>

            </View>
        </>
    )
}
export default Profile;