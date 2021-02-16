import React from 'react';
import {
    Text,
    View,
    TextInput,
    ScrollViewComponent
} from 'react-native'
import styles from './styles'
import { useUserData } from '../../context/Auth'
import { ScrollView } from 'react-native-gesture-handler';

const DadosPessoais: React.FC = () => {
    const { userData } = useUserData()
    return (
        <>
            <ScrollView>
                <View style={styles.container}>

                    <View style={{ padding: 10 }} />
                    <Text style={styles.totle}>Nome da Empresa</Text>
                    <View style={{ padding: 5 }} />
                    <TextInput
                        value={userData.name_companies}
                        style={styles.inputs}
                        placeholderTextColor='#707070'
                        editable={false}
                    />
                    <View style={{ padding: 15 }} />
                    <Text style={styles.totle}>CNPJ</Text>
                    <View style={{ padding: 5 }} />
                    <TextInput
                        value={userData.CNPJ_companies}
                        style={styles.inputs}
                        placeholderTextColor='#707070'
                        editable={false}
                    />
                    <View style={{ padding: 15 }} />
                    <Text style={styles.totle}>Telefone</Text>
                    <View style={{ padding: 5 }} />
                    <TextInput
                        value={userData.phone_companies}
                        style={styles.inputs}
                        placeholderTextColor='#707070'
                        editable={false}
                    />
                    <View style={{ padding: 15 }} />
                    <Text style={styles.totle}>Email</Text>
                    <View style={{ padding: 5 }} />
                    <TextInput
                        value={userData.email_companies}
                        style={styles.inputs}
                        placeholderTextColor='#707070'
                        editable={false}
                    />
                    <View style={{ padding: 15 }} />
                    <Text style={styles.totle}>Endereço</Text>
                    <View style={{ padding: 5 }} />
                    <TextInput
                        value={userData.address_companies}
                        style={styles.inputs}
                        placeholderTextColor='#707070'
                        editable={false}
                    />
                    <View style={{ padding: 30 }} />

                </View>
            </ScrollView>
        </>
    )
}
export default DadosPessoais;