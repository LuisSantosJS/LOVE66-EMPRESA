import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import Home from '../../pages/Home'
import AddEntrega from '../../pages/AddEntrega';
import EntregadorEncontrado from '../../pages/EntregadorEncontrado';
const HomeRouter: React.FC = () => {
    return (
        <>
            <NavigationContainer independent>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="Home" component={Home} />
                    <Screen name="AddEntrega" options={{
                        headerShown: true,
                        headerBackTitleStyle: { color: 'white' },
                        headerTintColor: 'white',
                        title: 'Nova Solicitação',
                        headerStyle: { backgroundColor: '#FF032A' }
                    }} component={AddEntrega} />
                    <Screen name="EntregadorEncontrado" options={{
                        headerShown: true,
                        headerBackTitleStyle: { color: 'white' },
                        headerTintColor: 'white',
                        title: 'Sucesso',
                        headerStyle: { backgroundColor: '#FF032A' }
                    }} component={EntregadorEncontrado} />
                </Navigator>
            </NavigationContainer>
        </>
    )
}
export default HomeRouter;