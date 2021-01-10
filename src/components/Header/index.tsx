import React from 'react';
import { Text, View, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import styles from './styles'
import FastImage from 'react-native-fast-image'
//@ts-ignore
import IconInfo from '../../assets/icons/info.png'
interface Props {
    title: string;
    navigation: any;
}
const Header: React.FC<Props> = ({ title }) => {
    return (
        <>
            <View style={{ height: getStatusBarHeight(true), width: '100%', backgroundColor: '#FF032A' }} />
            <View style={styles.header}>
                <Text style={styles.text}>{title}</Text>
                <FastImage resizeMode={FastImage.resizeMode.contain} source={IconInfo} style={styles.info} />
            </View>
        </>
    )
}
export default Header;