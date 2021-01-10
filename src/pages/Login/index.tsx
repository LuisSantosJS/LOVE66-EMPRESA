import React from 'react';
import styles from './styles'
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
//@ts-ignore
import BackImageHeader from '../../assets/headerfundo.png'
import FastImage from 'react-native-fast-image'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useUserSaved } from '../../context/Auth'
const Login: React.FC = () => {
    const { setUserSaved } = useUserSaved();
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: '#FF032A' }} />
                <FastImage resizeMode={FastImage.resizeMode.contain} source={BackImageHeader} style={styles.headrIIamge} />
                <View style={styles.container}>
                    <Text style={styles.text}>
                        <Text style={{ fontWeight: 'bold' }}>Olá</Text>, seja bem vindo a maior
                        plataforma de entregas do brasil
                    </Text>
                    <View style={{ padding: 10 }} />
                    <TextInput style={styles.inputs} placeholder='Usuário' />
                    <View style={{ padding: 10 }} />
                    <TextInput style={styles.inputs} placeholder='Senha' />
                    <View style={{ padding: 10 }} />
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setUserSaved(true)} style={styles.submit}>
                        <Text style={styles.textSubmit}>ACESSAR SISTEMA</Text>
                    </TouchableOpacity>
                    <View style={{ padding: 10 }} />
                </View>
            </ScrollView>
        </>
    )
}
export default Login;