import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    FlatList
} from 'react-native'

import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import styles from './styles'
import { useUserData } from '../../context/Auth'
//@ts-ignore 
import { DeliveriesProduct } from '../../types'

import api from '../../service/api';
import NotDeliveries from './NotDeliveries';
const MotoIcon = require('../../assets/moto.png')

const Entregas: React.FC = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(true)
    const { userData } = useUserData();
    const [data, setData] = useState<DeliveriesProduct[]>([]);
    const [inRefresh, setinRefresh] = useState<boolean>(false)

    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        try {
            const res = await api.get(`/api/deliveries/company/complete/${userData.id}`);
            setData(res.data.value)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }


    const onRefresh = () => {
        setLoading(true)
        load().then(() => setinRefresh(false))

    }
    const _renderItem = (item: DeliveriesProduct, index: number) => {
        return (
            <>
                <View style={styles.itemView}>
                    <View style={styles.item}>
                        <View style={styles.circleItem}>
                            <FastImage style={styles.moto} source={MotoIcon} />
                        </View>
                        <View style={styles.bodyItem}>
                            <Text style={[styles.text0, { fontSize: 20 }]}>REMESSA: {item.code_deliveries}</Text>
                            <Text style={styles.text0}>Endereço: {item.address_client_product}</Text>
                            <Text style={styles.text0}>Pagamento: {item.payment_method_product}</Text>
                            <Text style={styles.text0}>Preço: {item.price_product} Troco:{item.change_product}</Text>
                        </View>
                    </View>
                    <View style={styles.borderItemAlert}>
                        <Text>{String(item.status_product).toUpperCase()}</Text>
                    </View>
                </View>
            </>
        )
    }
    return (
        <>
            <Header title={`LOVE 99 - ${String(userData.name_companies).toUpperCase()}`} navigation={navigation} />

            {loading ?
                <View style={styles.container}>
                    <ActivityIndicator color='#191919' size='large' />
                </View> : <>
                    {
                        data.length === 0 ?
                            <NotDeliveries /> :
                            <FlatList
                                data={data}
                                style={{ flex: 1 }}
                                onRefresh={() => onRefresh()}
                                refreshing={inRefresh}
                                ListFooterComponent={() => <View style={{ padding: 40 }} />}
                                renderItem={({ item, index }) => _renderItem(item, index)}
                                ListHeaderComponent={() => <View style={{ padding: 10 }} />}
                                ItemSeparatorComponent={() => <View style={{ padding: 10 }} />}
                                keyExtractor={(item) => String(item.id)}
                            />
                    }
                </>}
        </>
    )
}
export default Entregas;