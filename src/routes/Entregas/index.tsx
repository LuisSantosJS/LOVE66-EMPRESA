import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import Entregas from '../../pages/Entregas'
const EntregasRouter: React.FC = () => {
    return (
        <>
            <NavigationContainer independent>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="Entregas" component={Entregas} />
                </Navigator>
            </NavigationContainer>
        </>
    )
}
export default EntregasRouter;