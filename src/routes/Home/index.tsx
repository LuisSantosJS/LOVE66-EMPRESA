import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import Home from '../../pages/Home'
const HomeRouter: React.FC = () => {
    return (
        <>
            <NavigationContainer independent>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="Home" component={Home} />
                </Navigator>
            </NavigationContainer>
        </>
    )
}
export default HomeRouter;