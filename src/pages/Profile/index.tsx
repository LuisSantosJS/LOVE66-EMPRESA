import React from 'react';
import Header from '../../components/Header'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles';
//@ts-ignore
import Poli from '../../assets/poli.png'
//@ts-ignore
import Agenda from '../../assets/agenda.png'
//@ts-ignore
import Suporte from '../../assets/supp.png'
//@ts-ignore
import Sair from '../../assets/sair.png'
import FastImage from 'react-native-fast-image'
import {useUserData} from '../../context/Auth'

const Profile: React.FC = () => {
    const navigation = useNavigation();
    const {userData} = useUserData()
    return (
        <>
            <Header title={`LOVE 99 - ${String(userData.name_companies).toUpperCase()}`} navigation={navigation} />
            <View style={styles.container}>
                <View style={{ padding: 10 }} />
                <Text style={styles.text}>Olá, {userData.name_companies}</Text>
                <View style={{ padding: 10 }} />
                <TouchableOpacity activeOpacity={0.7} style={[styles.rows0, { width: '90%' }]}>
                    <FastImage style={styles.agenda} source={Agenda} />
                    <Text style={styles.rowTex}>Dados pessoais</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={[styles.rows0, { width: '90%' }]}>
                    <FastImage style={styles.agenda} source={Poli} />
                    <Text style={styles.rowTex}>Politica de privacidade</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={[styles.rows0, { width: '90%' }]}>
                    <FastImage style={styles.agenda} source={Suporte} />
                    <Text style={styles.rowTex}>Suporte</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={[styles.rows0, { width: '90%' }]}>
                    <FastImage style={styles.agenda} source={Sair} />
                    <Text style={styles.rowTex}>Sair</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}
export default Profile;