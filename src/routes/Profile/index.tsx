import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import Profile from '../../pages/Profile'
const ProfileRouter: React.FC = () => {
    return (
        <>
            <NavigationContainer independent>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="Profile" component={Profile} />
                </Navigator>
            </NavigationContainer>
        </>
    )
}
export default ProfileRouter;