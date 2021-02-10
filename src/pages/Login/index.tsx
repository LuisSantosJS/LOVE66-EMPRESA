import React, { useState } from 'react';
import styles from './styles'
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//@ts-ignore
import BackImageHeader from '../../assets/headerfundo.png'
import FastImage from 'react-native-fast-image'
import Toast from 'react-native-simple-toast'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useUserSaved } from '../../context/Auth';
import api from '../../service/api'
//@ts-ignore
import { mask } from 'remask'
import { UserData, Credentials } from '../../types';
const Login: React.FC = () => {
    const { setUserSaved } = useUserSaved();
    const [loading, setLoading] = useState<boolean>(false);
    const [CNPJ, setCNPJ] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const onCNPJ = (e: string) => {
        const value = mask(e, ['99.999.999/9999-99'])
        setCNPJ(value)
    }

    const onSubmit = () => {
        if (loading) {
            return;
        }
        if (CNPJ.length === 0) {
            return Toast.showWithGravity('Insira um CNPJ válido!', Toast.LONG, Toast.TOP)
        }
        if (password.length < 8) {
            return Toast.showWithGravity('Insira uma senha com no mínimo 8 caracteres!', Toast.LONG, Toast.TOP)
        }
        setLoading(true)
        api.post('/api/companies/auth', {
            CNPJ: CNPJ,
            password: password
        }).then(res => {
            if (res.data.message === 'error') {
                setLoading(false)
                return Toast.showWithGravity(`${res.data.value}`, Toast.LONG, Toast.TOP)
            }
            return onFinish()
        }).catch(err => {
            setLoading(false)
            return Toast.showWithGravity(`${err}`, Toast.LONG, Toast.TOP)
        })
    }


    const onFinish = async () => {
        try {
            const credentials = JSON.stringify({
                CNPJ: CNPJ,
                password: password
            } as Credentials);
            await AsyncStorage.setItem('@credentials', credentials);
            setLoading(false)
            return setUserSaved(true);
        } catch (e) {
            // saving error
            setLoading(false)
            console.log(e)
        }

    }
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
                    <TextInput
                        style={styles.inputs}
                        placeholder='CNPJ'
                        value={CNPJ}
                        onChangeText={(e) => onCNPJ(e)}
                    />
                    <View style={{ padding: 10 }} />
                    <TextInput
                        style={styles.inputs}
                        placeholder='Senha'
                        secureTextEntry
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                    />
                    <View style={{ padding: 10 }} />
                    <TouchableOpacity activeOpacity={0.7} onPress={onSubmit} style={styles.submit}>
                        <Text style={styles.textSubmit}>ACESSAR SISTEMA</Text>
                    </TouchableOpacity>
                    <View style={{ padding: 10 }} />
                </View>
            </ScrollView>
        </>
    )
}
export default Login;