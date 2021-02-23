import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native';
import styles from './styles'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import BottomSheet from 'reanimated-bottom-sheet';

//@ts-ignore
import Add from '../../assets/add.png'
import { UF, UFDATA } from './UF'
//@ts-ignore
import CarrinhoIcon from '../../assets/carrinho.png'
import FastImage from 'react-native-fast-image';
import Toast from 'react-native-simple-toast'
//@ts-ignore
import { mask } from 'remask'
//@ts-ignore
import BaixoSeta from '../../assets/icons/baixo.png'
//@ts-ignore
import CimaSeta from '../../assets/icons/cima.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import produce from "immer"
import api from '../../service/api';
import axios from 'axios';
import { useUserData, useUserSaved } from '../../context/Auth';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

interface Props {
    route: {
        params: {
            numberEntregas: string;
        }
    }
}

interface EntregasFinal {
    name_client: string;
    address_client: string;
    change: string;
    lat: string;
    long: string;
    payment_method: string;
    price: string;
    product: string;
}

interface Entregas {
    name_client: string | undefined;
    change: string | undefined;
    number: string | undefined;
    street: string | undefined;
    address_client: string | undefined;
    payment_method: string | undefined;
    lat: string | undefined;
    long: string | undefined;
    price: string | undefined;
    product: string | undefined;
}

interface Features {
    id: string;
    place_name: string;
    center: number[]
}
interface OpenEntregas {
    isOpen: boolean | undefined;
}
const AddEntrega: React.FC<Props> = () => {
    const navigation = useNavigation()
    const [indexDeleteItem, setIndexDeleteItem] = useState<number>(0)
    const [indexUFItem, setIndexUFItem] = useState<number>(0)
    const [indexLocationItem, setIndexLocationItem] = useState<number | null>(null)
    const { userData } = useUserData();
    const [indexPayment, setIndexPayment] = useState<number>(0);

    const sheetRef = React.useRef<any>(null);
    const API = axios.create({
        timeout: 5000,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })

    const [entregas, setEntregas] = useState<Entregas[]>([{
        name_client: '',
        change: '',
        number: '',
        street: '',
        address_client: '',
        lat: '',
        long: '',
        payment_method: '',
        price: '',
        product: '',
    }])
    const [openEntregas, setOpenEntregas] = useState<OpenEntregas[]>([{
        isOpen: true
    }]);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    const [features, setFeatures] = useState<Features[]>([])



    // const renderUF = () => (
    //     <View style={styles.viewUF}>
    //         <FlatList
    //             style={{ flex: 1 }}
    //             data={UFDATA}
    //             showsVerticalScrollIndicator={false}
    //             ListHeaderComponent={() => <View style={{ padding: 15 }} />}
    //             ListFooterComponent={() => <View style={{ padding: 20 }} />}
    //             ItemSeparatorComponent={() => <View style={{ padding: 7 }} />}
    //             keyExtractor={(item) => String(item.nome)}
    //             renderItem={({ item, index }) => RenderItemUF(item, index)}
    //         />
    //     </View>
    // );


    // const RenderItemUF = (item: UF, index: number) => {
    //     return (
    //         <>
    //             <TouchableOpacity onPress={() => onUF(item.sigla)} style={styles.viewUFItem}>
    //                 <Text style={styles.textSigla}>{item.nome} / {item.sigla}</Text>
    //             </TouchableOpacity>
    //         </>
    //     )
    // }
    // const load = () => {
    //     const initEntregas = produce(entregas, draftState => {
    //         var i = 0;
    //         for (i; i < Number(numberEntregas); i = i + 1) {
    //             draftState.push({
    //                 address_client: '',
    //                 change: '',
    //                 lat: 0,
    //                 long: 0,
    //                 name_client: '',
    //                 payment_method: '',
    //                 price: '',
    //                 product: ''
    //             })
    //         }
    //     })
    //     setEntregas(initEntregas)

    // }

    const openClose = (index: number) => {
        const newOpenEntregas = produce(openEntregas, draftState => {
            draftState[index].isOpen = !Boolean(draftState[index].isOpen);
        })
        setOpenEntregas(newOpenEntregas)
    }

    const onNameEntregas = (value: string, index: number) => {
        const newName = produce(entregas, draftState => {
            draftState[index].name_client = value;
        })
        setEntregas(newName)
    }

    // const onUF = (value: string) => {
    //     const newUF = produce(entregas, draftState => {
    //         draftState[indexUFItem].UF = value;
    //     })
    //     setEntregas(newUF)
    //     sheetRef.current.snapTo(0)
    // }

    const onNumberEntregas = (value: string, index: number) => {
        const newNumber = produce(entregas, draftState => {
            draftState[index].number = value;
        })

        setEntregas(newNumber)
    }

    const onStreetEntregas = (value: string, index: number) => {
        const newStreet = produce(entregas, draftState => {
            draftState[index].street = value;
        })
        setEntregas(newStreet)
    }

    const onProdutoEntregas = (value: string, index: number) => {
        const newName = produce(entregas, draftState => {
            draftState[index].product = value;
        })
        setEntregas(newName)
    }

    const onMetodoEntregas = (value: string, index: number) => {
        const newName = produce(entregas, draftState => {
            draftState[index].payment_method = value;
        })
        setEntregas(newName)
    }

    const onTrocoEntregas = (value: string, index: number) => {
        const newName = produce(entregas, draftState => {
            draftState[index].change = mask(value, ['99,999', '999,999', '9999,99']);
        })
        setEntregas(newName)
    }

    const onPriceEntregas = (value: string, index: number) => {
        const newName = produce(entregas, draftState => {
            draftState[index].price = mask(value, ['99,999', '999,999', '9999,99']);
        })
        setEntregas(newName)
    }

    // const onStreetEntregas = (value: string, index: number) => {
    //     const newstreet = produce(entregas, draftState => {
    //         draftState[index].street = value;
    //     })
    //     setEntregas(newstreet)
    // }
    // const onCityEntregas = (value: string, index: number) => {
    //     const newCity = produce(entregas, draftState => {
    //         draftState[index].city = value;
    //     })
    //     setEntregas(newCity)
    // }
    const addEntrega = () => {
        if (entregas.length >= 10) {
            return Toast.showWithGravity('Limite Excedido!', Toast.LONG, Toast.TOP)
        }
        const newOpenEntregas = produce(openEntregas, draftState => {
            draftState.map((res, index) => {
                draftState[index].isOpen = false;
            })
            draftState.push({
                isOpen: true
            })
        })
        setOpenEntregas(newOpenEntregas)
        const NewEntregas = produce(entregas, draftState => {
            draftState.push({
                name_client: '',
                change: '',
                number: '',
                street: '',
                address_client: '',
                lat: '',
                long: '',
                payment_method: '',
                price: '',
                product: '',
            })
        })
        setEntregas(NewEntregas)
    }


    const onOpenModalDelete = (index: number) => {
        setIndexDeleteItem(index)
        setIsOpenModal(true)
    }
    const onDelele = () => {

        const en: any = entregas.map((res, index) => {
            if (index !== indexDeleteItem) {
                return res;
            }
        })
        const NewEntregas: Entregas[] = en;
        setEntregas(NewEntregas)

        const an: any = openEntregas.map((res, index) => {
            if (index !== indexDeleteItem) {
                return res;
            }
        })
        const newOpenEntregas: OpenEntregas[] = an;
        setOpenEntregas(newOpenEntregas)
        setIsOpenModal(false)

    }


    const submit = () => {
        console.log(entregas)
        if (loading) {
            return;
        }


        const val: any = entregas.map(res => {
            return {
                address_client: `${res.number}, ${res.address_client}, ${res.street}`,
                change: res.change,
                lat: res.lat,
                long: res.long,
                name_client: res.name_client,
                payment_method: res.payment_method,
                price: res.price,
                product: res.product
            }
        })

        const value: EntregasFinal[] = val;
        var isNotFailt = false;
        value.map(ess => {
            if ((String(ess.address_client).length === 0) || (String(ess.change).length === 0) || (String(ess.lat).length === 0) || (String(ess.long).length === 0) || (String(ess.name_client).length === 0) || (String(ess.payment_method).length === 0) || (String(ess.price).length === 0) || (String(ess.product).length === 0)) {
                return isNotFailt = true

            }
        })
        if (isNotFailt) {
            return Toast.showWithGravity('Preencha todos os campos!', Toast.LONG, Toast.TOP)
        }
        setLoading(true)
        api.post('/api/deliveries', {
            delivermanID: "",
            companiesID: userData.id,
            products: value
        }).then(res => {
            if (res.data.message === 'success') {
                Toast.showWithGravity('success', Toast.LONG, Toast.TOP)
                navigation.goBack()
            } else {
                Toast.showWithGravity(res.data.value, Toast.LONG, Toast.TOP)

            }

        }).catch(err => {
            console.log(err)
            Toast.showWithGravity(err, Toast.LONG, Toast.TOP)
      
        }).finally(()=>{
            setLoading(false)
        })

    }
    const _RenderSearch = (item: Features, index: number) => {
        return (
            <>
                <View style={styles.center}>
                    <View style={{ padding: 5 }} />
                    <TouchableOpacity onPress={() => {
                        const newValue = produce(entregas, draftState => {
                            var lat: string = String(item.center[0]);
                            var long: string = String(item.center[1]);
                            draftState[Number(indexLocationItem)].lat = lat
                            draftState[Number(indexLocationItem)].long = long
                            draftState[Number(indexLocationItem)].address_client = item.place_name

                        })
                        setEntregas(newValue)
                        setIndexLocationItem(null)
                    }}>
                        <Text style={styles.viewItemSe}>{item.place_name}</Text>
                    </TouchableOpacity>
                    <View style={{ padding: 5 }} />
                </View>
            </>
        )
    }

    const renderContent = () => {
        return (
            <>
                <View style={styles.modalss}>
                    <View style={{ padding: 20 }} />

                    <TouchableOpacity
                        onPress={() => {
                            const newName = produce(entregas, draftState => {
                                draftState[indexPayment].payment_method = 'Dinheiro';
                            })
                            setEntregas(newName)
                            sheetRef.current.snapTo(0)
                        }}

                        activeOpacity={0.7} style={styles.itemms}>
                        <Text style={styles.tsxtdtg}>Dinheiro</Text>
                    </TouchableOpacity>


                    <View style={{ padding: 10 }} />


                    <TouchableOpacity
                        onPress={() => {
                            const newName = produce(entregas, draftState => {
                                draftState[indexPayment].payment_method = 'Máquina Cartão';
                            })
                            setEntregas(newName)
                            sheetRef.current.snapTo(0)
                        }}

                        activeOpacity={0.7} style={styles.itemms}>
                        <Text style={styles.tsxtdtg}>Máquina Cartão</Text>
                    </TouchableOpacity>
                    <View style={{ padding: 10 }} />
                    <Text style={{ color: '#707070', fontSize: width * 0.04 }} >Selecione uma opção</Text>
                </View>
            </>
        )
    }

    const _renderItem = (item: Entregas, index: number) => {
        return (
            <View style={styles.center}>

                <TouchableOpacity delayLongPress={150} activeOpacity={0.9} onPress={() => openClose(index)}>
                    <View style={[styles.rowheaderitem, { paddingHorizontal: 10 }]}>
                        <View style={[styles.headeritemrowincon]}>
                            <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.icons} source={CarrinhoIcon} />
                            <Text style={styles.entregatitle}>{index + 1}° ENTREGA</Text>
                        </View>
                        <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.iconseta} source={openEntregas[index].isOpen ? CimaSeta : BaixoSeta} />
                    </View>
                </TouchableOpacity>
                {openEntregas[index].isOpen && <View style={styles.viewBody}>
                    <Text style={styles.text}>Nome do cliente</Text>
                    <View style={{ padding: 5 }} />
                    <TextInput
                        style={styles.inptusd}
                        placeholder='Insira o nome o cliente'
                        value={entregas[index].name_client}
                        onChangeText={(e) => onNameEntregas(e, index)}
                    />
                    <View style={{ padding: 7 }} />
                    <Text style={styles.text}>Endereço de destino</Text>
                    <View style={{ padding: 5 }} />
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setIndexLocationItem(index)}>
                        <TextInput
                            style={styles.inptusd}
                            placeholder='Endereço'
                            editable={false}
                            value={entregas[index].address_client}
                        />
                    </TouchableOpacity>
                    <View style={{ padding: 5 }} />

                    {/* <View style={styles.medate}>
                            <Text style={styles.text}>UF</Text>
                            <View style={{ padding: 5 }} />
                            <TouchableOpacity onPress={() => {

                                setIndexUFItem(index)
                                sheetRef.current.snapTo(1)
                            }}>
                                <TextInput
                                    style={styles.inptusd}
                                    placeholder='UF'
                                    value={entregas[index].UF}
                                    editable={false}
                                />
                            </TouchableOpacity>
                        </View> */}

                    <Text style={styles.text}>Número</Text>
                    <View style={{ padding: 5 }} />
                    <TextInput
                        style={styles.inptusd}
                        value={entregas[index].number}
                        keyboardType='number-pad'
                        placeholder='Insira o número'
                        onChangeText={(e) => onNumberEntregas(e, index)}
                    />
                    <View style={{ padding: 7 }} />



                    <Text style={styles.text}>Referência</Text>

                    <View style={{ padding: 5 }} />
                    <TextInput
                        style={styles.inptusd}
                        placeholder='Insira uma referência'
                        value={entregas[index].street}
                        onChangeText={(e) => onStreetEntregas(e, index)}
                    />

                    <View style={{ padding: 7 }} />
                    <Text style={styles.text}>Produto</Text>
                    <View style={{ padding: 5 }} />
                    <TextInput
                        style={styles.inptusd}
                        placeholder='Insira o produto'
                        value={entregas[index].product}
                        onChangeText={(e) => onProdutoEntregas(e, index)}
                    />
                    <View style={{ padding: 7 }} />
                    <Text style={styles.text}>Método de pagamento</Text>
                    <View style={{ padding: 5 }} />
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {
                        setIndexPayment(index)
                        sheetRef.current.snapTo(1)
                    }}>
                        <TextInput
                            style={styles.inptusd}
                            placeholder='Método de Pagamento'
                            editable={false}
                            value={entregas[index].payment_method}
                        />
                    </TouchableOpacity>
                    <View style={{ padding: 7 }} />
                    <View style={styles.rowsds}>
                        <View style={styles.medate}>
                            <Text style={styles.text}>Troco?</Text>
                            <View style={{ padding: 5 }} />
                            <TextInput
                                style={styles.inptusd}
                                placeholder='0,00'
                                value={entregas[index].change}
                                onChangeText={(e) => onTrocoEntregas(e, index)}
                            />
                        </View>
                        <View style={styles.medate}>
                            <Text style={styles.text}>Preço total</Text>
                            <View style={{ padding: 5 }} />
                            <TextInput
                                style={styles.inptusd}
                                placeholder='0,00'
                                value={entregas[index].price}
                                onChangeText={(e) => onPriceEntregas(e, index)}
                            />
                        </View>
                    </View>
                    <View style={{ padding: 20 }} />
                </View>}
            </View>
        )
    }
    const onSearch = async (e: string) => {
        return API.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${e}.json?access_token=pk.eyJ1IjoibHVpc3RzeCIsImEiOiJja2prcnB2dHkyM2FwMnFwZ3B6YTQ5Ym02In0.QVOoBMR87GNBpSwWS7y8QA`).then(res => {
            setFeatures(res.data.features)
        }).catch(err => console.log(err))
    }
    if (indexLocationItem !== null) {
        return (
            <View style={styles.container}>
                <View style={{ padding: 5 }} />
                <View style={styles.searchView}>
                    <Image style={styles.searcIcon} source={require('../../assets/search.png')} />
                    <TextInput onChangeText={(e) => onSearch(e)} placeholder='Procure o endereço' style={styles.seartText} />
                </View>

                <FlatList
                    data={features}
                    style={{ flex: 1 }}
                    renderItem={({ item, index }) => _RenderSearch(item, index)}
                    keyExtractor={(item, index) => String(index)}
                />
            </View>
        )
    }

    return (
        <>

            {/* <BottomSheet
                ref={sheetRef}
                snapPoints={[0, Number(height - 100)]}
                borderRadius={10}
                renderContent={renderUF}
            /> */}
            <View style={styles.container}>

                <FlatList
                    data={entregas}
                    // style={{flex: 1}}
                    renderItem={({ item, index }) => _renderItem(item, index)}
                    keyExtractor={(item, index) => String(index)}
                    ItemSeparatorComponent={() => <View style={{ padding: 7 }} />}
                    ListHeaderComponent={() => <View style={styles.center}><Text style={styles.title}>Preencha os dados de entrega</Text></View>}
                    ListFooterComponent={() => <>
                        <View style={styles.center}>
                            <View style={{ padding: 30 }} />

                            <TouchableOpacity onPress={() => submit()} activeOpacity={0.7} style={styles.submit}>
                                {loading ?
                                    <ActivityIndicator size='large' color='white' />
                                    :
                                    <Text style={styles.textsubmit}>
                                        SOLICITAR ENTREGADOR
                                    </Text>}
                            </TouchableOpacity>
                            <View style={{ padding: 200 }} />
                        </View>
                    </>}
                />
            </View>



            {/* 
            <Dialog.Container visible={isOpenModal}>
                <Dialog.Title>Deleter Produto?</Dialog.Title>
                <Dialog.Description>
                    {` Tem certeza que quer deletar a ${indexDeleteItem + 1}° entrega?`}
                </Dialog.Description>
                <Dialog.Button onPress={() => setIsOpenModal(false)} label="Cancelar" />
                <Dialog.Button onPress={() => onDelele()} label="Deletar" />
            </Dialog.Container> */}


            <TouchableOpacity onPress={addEntrega} style={styles.floats}>
                <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.add} source={Add} />
            </TouchableOpacity>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[0, '85%']}
                borderRadius={30}
                enabledGestureInteraction={false}
                renderContent={renderContent}
            />

        </>
    )

}
export default AddEntrega;