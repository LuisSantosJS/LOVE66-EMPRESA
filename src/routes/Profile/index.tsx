import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import Profile from '../../pages/Profile'
import Politica from '../../pages/Politica';
import Suporte from '../../pages/Suporte';
import DadosPessoais from '../../pages/DadosPessoais';
const ProfileRouter: React.FC = () => {
    return (
        <>
            <NavigationContainer independent>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="Profile" options={{
                        title:'Perfil'
                    }} component={Profile} />
                    
                    <Screen name="Politica" options={{
                        headerShown: true,
                        headerBackTitleStyle: { color: 'white' },
                        headerTintColor: 'white',
                        headerStyle: { backgroundColor: '#FF032A' },
                        title: 'Politica de Privacidade'
                    }} component={Politica} />

                    <Screen name="Suporte" options={{
                        headerShown: true,
                        headerBackTitleStyle: { color: 'white' },
                        headerTintColor: 'white',
                        headerStyle: { backgroundColor: '#FF032A' },
                        title: 'Suporte'
                    }} component={Suporte} />

                    <Screen name="DadosPessoais" options={{
                        headerShown: true,
                        headerBackTitleStyle: { color: 'white' },
                        headerTintColor: 'white',
                        headerStyle: { backgroundColor: '#FF032A' },
                        title: 'Meus Dados'
                    }} component={DadosPessoais} />

                </Navigator>
            </NavigationContainer>
        </>
    )
}
export default ProfileRouter;