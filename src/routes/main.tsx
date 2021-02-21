import React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, Dimensions, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import HomeRouter from './Home'
import ProfileRouter from './Profile'
const width = Dimensions.get('window').width


//@ts-ignore
import HomeIcon from '../assets/icons/home.png'
//@ts-ignore
import EntregasIcon from '../assets/icons/Entregas.png'
//@ts-ignore
import ProfileIcon from '../assets/icons/profile.png'

import Entregas from '../pages/Entregas';
import EntregasRouter from './Entregas';


const { Navigator, Screen } = createBottomTabNavigator();
const RouterTab: React.FC = () => {

    return (
        <>
            <NavigationContainer>
                <StatusBar backgroundColor='#FF032A' barStyle='light-content' />
                <Navigator
                    tabBarOptions={{
                        style: {
                            elevation: 0,
                            shadowOpacity: 0,
                            height: width * 0.13 + getStatusBarHeight(true),
                        },
                        tabStyle: {
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        iconStyle: {
                            flex: 0,
                            width: width * 0.05,
                            height: width * 0.05,
                        },
                        labelStyle: {
                            fontSize: width * 0.035,
                            // marginLeft: 16,
                        },
                        inactiveBackgroundColor: '#fff',
                        activeBackgroundColor: '#f7f7f7',
                        inactiveTintColor: '#191919',
                        activeTintColor: '#191919',
                    }}>



                    <Screen
                        name="Home"
                        component={HomeRouter}
                        options={{
                            tabBarVisible: true,
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size, focused }) => {
                                return (
                                    <Image source={HomeIcon} style={{ height: size, width: size }} resizeMode='contain' />
                                )
                            }
                        }}
                    />
                    <Screen
                        name="Entregas"
                        component={EntregasRouter}
                        options={{
                            tabBarVisible: true,
                            tabBarLabel: 'Entregas',
                            tabBarIcon: ({ color, size, focused }) => {
                                return (
                                    <Image source={EntregasIcon} style={{ height: size, width: size }} resizeMode='contain' />
                                )
                            }
                        }}
                    />
                    <Screen
                        name="Profile"
                        component={ProfileRouter}
                        options={{
                            tabBarVisible: true,
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size, focused }) => {
                                return (
                                    <Image source={ProfileIcon} style={{ height: size, width: size }} resizeMode='contain' />
                                )
                            }
                        }}
                    />

                </Navigator>
            </NavigationContainer>
        </>
    )
}
export default RouterTab;