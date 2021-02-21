import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    Linking,
    TextInput
} from 'react-native'
import Modal from 'react-native-modal';
import Header from '../../components/Header'
import produce from "immer"
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import styles from './styles'
import { useUserData } from '../../context/Auth'
//@ts-ignore 
import Add from '../../assets/icons/addM.png'
import { DeliveriesProduct } from '../../types'

import api, { URL } from '../../service/api';
import io from 'socket.io-client'
import NotDeliveries from './NotDeliveries';
import { RectButton } from 'react-native-gesture-handler';
const MotoIcon = require('../../assets/moto.png')

const Home: React.FC = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(true)
    const [isVisibleModalAdd, setIsVisibleModalAdd] = useState<boolean>(false);
    const { userData } = useUserData();
    const [data, setData] = useState<DeliveriesProduct[]>([]);
    const [inRefresh, setinRefresh] = useState<boolean>(false)


    const socket = io(URL)


    const [numberEntregas, setNumberEntregas] = useState<string>('1');
    const handleNavigation = async () => {
        return navigation.navigate('AddEntrega')
    }

    useEffect(() => {
        load()
        socket.on(`DELIVERIES:${userData.id}`, (res: DeliveriesProduct[]) => {
            if (res.length !== 0) {
                const newValue = res.concat(data)
                setData(newValue)
            }
        })
    }, [])

    // useEffect(() => {
    //     loadss()
    // }, [])

    // const loadss = () => {
    //     RNGooglePlaces.openAutocompleteModal()
    //         .then((place) => {
    //             console.log(place);
    //         })
    //         .catch(error => console.log(error.message));
    // }

    const onLoadDeliverMan = (id: string) => {
        socket.on(`DELIVERIESMAN:${id}`, (res: DeliveriesProduct) => {
            const nextState = produce(data, draftState => {
                draftState.map((ress, index) => {
                    if (ress.id === id) {
                        draftState[index] = res;
                    }
                })
            })
            setData(nextState)
        })
    }

    const open = (address: string) => {
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${String(address).replace(' ', '%20')}`);
    }
    const load = async () => {
        try {
            const res = await api.get(`/api/deliveries/company/${userData.id}`);
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
        // if (data.length === 0) {
        //     return (
        //         <View style={styles.container}>
        //             <NotDeliveries />
        //         </View>
        //     );
        // }
        return (
            <>
                <RectButton onPress={() => navigation.navigate('Detalhes', { deliveriesProduct: item })} style={styles.itemView}>
                    <View style={styles.item}>
                        <View style={styles.circleItem}>
                            <FastImage style={styles.moto} source={MotoIcon} />
                        </View>
                        <View style={styles.bodyItem}>
                            <Text style={[styles.text0, { fontSize: 20 }]}>REMESSA: {item.code_deliveries}</Text>
                            {/* <Text style={styles.text0}>Endereço: {item.address_client_product}</Text> */}
                            <Text style={styles.text0}>Pagamento: {item.payment_method_product}</Text>
                            <Text style={styles.text0}>Preço: {item.price_product} Troco:{item.change_product}</Text>
                        </View>
                    </View>
                    <View style={styles.borderItemAlert}>
                        <Text>{String(item.status_product).toUpperCase()}</Text>
                    </View>
                </RectButton>
            </>
        )
    }
    return (
        <>
            <Header title={`LOVE 99 - ${String(userData.name_companies).toUpperCase()}`} navigation={navigation} />

            {loading ?
                <View style={styles.container}>
                    <ActivityIndicator color='#191919' size='large' />
                </View> :

                <FlatList
                    data={data}
                    style={{ flex: 1 }}
                    ListEmptyComponent={()=> <NotDeliveries/>}
                    onRefresh={() => onRefresh()}
                    refreshing={inRefresh}
                    ListFooterComponent={() => <View style={{ padding: 40 }} />}
                    renderItem={({ item, index }) => _renderItem(item, index)}
                    ListHeaderComponent={() => <View style={{ padding: 10 }} />}
                    ItemSeparatorComponent={() => <View style={{ padding: 10 }} />}
                    keyExtractor={(item) => String(item.id)}
                />

            }

            <TouchableOpacity onPress={handleNavigation} style={styles.floats}>
                <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.add} source={Add} />
            </TouchableOpacity>

            <Modal
                swipeDirection="down"

                customBackdrop={<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 0 }} />}
                onSwipeComplete={() => setIsVisibleModalAdd(false)}
                isVisible={isVisibleModalAdd}>
                <View style={styles.modal}>
                    <View style={styles.modalView}>
                        <View style={styles.headerModal}>
                            <Text style={styles.textsmodal}>NOVA SOLICITAÇÃO</Text>
                        </View>
                        <View style={styles.utilView}>
                            <Text style={styles.titleModal}>
                                Antes de começar digite
                                quantas entregas você deseja?
                            </Text>
                            <Text style={styles.titleDesc}>
                                (caso seja apenas uma digite 1)
                            </Text>
                            <View style={{ padding: 10 }} />
                            <TextInput
                                placeholder='Número de entregas'
                                style={styles.input}
                                keyboardType='number-pad'
                                value={String(numberEntregas)}
                                onChangeText={(e) => setNumberEntregas(e)}
                            />
                            <View style={{ padding: 10 }} />
                            <TouchableOpacity onPress={handleNavigation} activeOpacity={0.7} style={styles.submit}>
                                <Text style={styles.textSubmit}>Próximo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}
export default Home;