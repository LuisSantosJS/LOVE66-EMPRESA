import React, { useState } from 'react';
import styles from './styles'
import { View, ScrollView, Text, TextInput, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//@ts-ignore
import BackImageHeader from '../../assets/headerfundo.png'
import FastImage from 'react-native-fast-image'
import Toast from 'react-native-simple-toast'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useUserSaved, useUserData, useTokenMapBox } from '../../context/Auth';
import api from '../../service/api'
//@ts-ignore
import { mask } from 'remask'
import { UserData, Credentials } from '../../types';
const Login: React.FC = () => {
    const { setUserData } = useUserData()
    const { setUserSaved } = useUserSaved();
    const { setTokenMapBox } = useTokenMapBox()
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
                console.log(res.data)
                return Toast.showWithGravity(`${res.data.value}`, Toast.LONG, Toast.TOP)
            }
            setUserData(res.data.value)
            setTokenMapBox(res.data.tokenMapBox)
            return onFinish()
        }).catch(err => {
            setLoading(false)
            console.log('error', err)
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
            <StatusBar barStyle='dark-content' backgroundColor='white' />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: 'white' }} />

                <View style={styles.container}>
                    <View style={{ padding: 10 }} />
                    <FastImage resizeMode={FastImage.resizeMode.contain} source={BackImageHeader} style={styles.headrIIamge} />

                    <Text style={styles.tex}>Realize seu login =D</Text>

                    <View style={{ padding: 30 }} />
                    <TextInput
                        style={styles.inputs}
                        placeholder='Digite seu CNPJ'
                        keyboardType='number-pad'
                        value={CNPJ}
                        onChangeText={(e) => onCNPJ(e)}
                    />
                    <View style={{ padding: 10 }} />
                    <TextInput
                        style={styles.inputs}
                        placeholder='Digite sua Senha'
                        secureTextEntry
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                    />
                    <View style={{ padding: 30 }} />
                    <TouchableOpacity activeOpacity={0.7} onPress={onSubmit} style={styles.submit}>
                        {loading ? <ActivityIndicator size='large' color='white' /> :
                            <Text style={styles.textSubmit}>FAZER LOGIN</Text>}
                    </TouchableOpacity>
                    <View style={{ padding: 5 }} />
                    <Text style={styles.textt}>
                        Ao confirmar seu login você confirma
                        nossos <Text style={{color:'#FF032A'}}>politica de privacidade</Text>
                    </Text>
                    <View style={{ padding: 10 }} />
                </View>
            </ScrollView>
        </>
    )
}
export default Login;