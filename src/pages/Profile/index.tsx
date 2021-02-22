import React, { useState } from 'react';
import Header from '../../components/Header'
import { View, Text, TouchableOpacity } from 'react-native'
import { useUserSaved } from '../../context/Auth'
import { useNavigation } from '@react-navigation/native'
import Dialog from "react-native-dialog";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import { useUserData } from '../../context/Auth'

const Profile: React.FC = () => {
    const navigation = useNavigation();
    const { userData } = useUserData();
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const { setUserSaved } = useUserSaved()

    const deslogAccount = async () => {
        await AsyncStorage.removeItem('@credentials');
        setOpenDialog(false)
        return setUserSaved(false)
    }
    return (
        <>
            <Header title={`LOVE 99 - ${String(userData.name_companies).toUpperCase()}`} navigation={navigation} />
            <View style={styles.container}>
                <View style={{ padding: 10 }} />
                <Text style={styles.text}>Olá, <Text style={{ color: '#707070', fontWeight: '700' }}>{String(userData.name_companies).toUpperCase()}</Text></Text>
                <View style={{ padding: 10 }} />
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('DadosPessoais')} style={[styles.rows0, { width: '90%' }]}>
                    <FastImage style={styles.agenda} source={Agenda} />
                    <Text style={styles.rowTex}>Dados pessoais</Text>
                </TouchableOpacity>
{/* 
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Politica')} style={[styles.rows0, { width: '90%' }]}>
                    <FastImage style={styles.agenda} source={Poli} />
                    <Text style={styles.rowTex}>Politica de privacidade</Text>
                </TouchableOpacity> */}
{/* 
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Suporte')} style={[styles.rows0, { width: '90%' }]}>
                    <FastImage style={styles.agenda} source={Suporte} />
                    <Text style={styles.rowTex}>Suporte</Text>
                </TouchableOpacity> */}

                <TouchableOpacity activeOpacity={0.7} onPress={() => setOpenDialog(true)} style={[styles.rows0, { width: '90%' }]}>
                    <FastImage style={styles.agenda} source={Sair} />
                    <Text style={styles.rowTex}>Sair</Text>
                </TouchableOpacity>

            </View>

            <Dialog.Container visible={openDialog}>
                <Dialog.Title style={{ color: '#707070' }}>Deseja deslogar?</Dialog.Title>
                <Dialog.Button onPress={() => setOpenDialog(false)} label="Não" />
                <Dialog.Button onPress={deslogAccount} label="Sim" />
            </Dialog.Container>
        </>
    )
}
export default Profile;