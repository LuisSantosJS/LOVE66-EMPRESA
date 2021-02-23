import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import Entregas from '../../pages/Entregas';
import Suporte from '../../pages/Suporte';
import Detalhes from '../../pages/Detalhes';
const EntregasRouter: React.FC = () => {
    return (
        <>
            <NavigationContainer independent>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="Entregas" component={Entregas} />

                    <Screen name="Suporte" options={{
                        headerShown: true,
                        headerBackTitleStyle: { color: 'white' },
                        headerTintColor: 'white',
                        headerStyle: { backgroundColor: '#FF032A' },
                        title: 'Suporte'
                    }} component={Suporte} />

                    <Screen name="Detalhes" options={{
                        headerShown: true,
                        headerBackTitleStyle: { color: 'white' },
                        headerTintColor: 'white',
                        headerStyle: { backgroundColor: '#FF032A' },
                        title: 'Detalhes'
                    }} component={Detalhes} />
                </Navigator>
            </NavigationContainer>
        </>
    )
}
export default EntregasRouter;