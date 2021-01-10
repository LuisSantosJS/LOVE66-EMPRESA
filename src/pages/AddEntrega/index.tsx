import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import styles from './styles'
//@ts-ignore
import CarrinhoIcon from '../../assets/carrinho.png'
import FastImage from 'react-native-fast-image';
//@ts-ignore
import BaixoSeta from '../../assets/icons/baixo.png'
//@ts-ignore
import CimaSeta from '../../assets/icons/cima.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const AddEntrega: React.FC = () => {

    const [onOpen, setOnOpen] = useState<boolean>(false);
    const navigation = useNavigation()
    return (
        <>
            <ScrollView >
                <View style={styles.container}>
                    <Text style={styles.title}>Preencha os dados de entrega</Text>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => setOnOpen(!onOpen)}>
                        <View style={styles.rowheaderitem}>
                            <View style={styles.headeritemrowincon}>
                                <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.icons} source={CarrinhoIcon} />
                                <Text style={styles.entregatitle}>1 ENTREGA</Text>
                            </View>
                            <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.iconseta} source={onOpen ? CimaSeta : BaixoSeta} />
                        </View>
                    </TouchableOpacity>
                    {onOpen && <View style={styles.viewBody}>
                        <Text style={styles.text}>Nome do cliente</Text>
                        <View style={{ padding: 5 }} />
                        <TextInput style={styles.inptusd} />

                        <View style={{ padding: 7 }} />

                        <Text style={styles.text}>Endereço de destino</Text>
                        <View style={{ padding: 5 }} />
                        <TextInput style={styles.inptusd} />

                        <View style={{ padding: 7 }} />

                        <Text style={styles.text}>Número da casa</Text>
                        <View style={{ padding: 5 }} />
                        <TextInput style={styles.inptusd} />

                        <View style={{ padding: 7 }} />

                        <Text style={styles.text}>Telefone do cliente</Text>
                        <View style={{ padding: 5 }} />
                        <TextInput style={styles.inptusd} />


                        <View style={{ padding: 7 }} />

                        <Text style={styles.text}>Ponto de referência</Text>
                        <View style={{ padding: 5 }} />
                        <TextInput style={styles.inptusd} />

                        <View style={{ padding: 7 }} />

                        <View style={styles.rowsds}>
                            <View style={styles.medate}>
                                <Text style={styles.text}>Troco?</Text>
                                <View style={{ padding: 5 }} />
                                <TextInput style={styles.inptusd} />
                            </View>
                            <View style={styles.medate}>
                                <Text style={styles.text}>Preço total</Text>
                                <View style={{ padding: 5 }} />
                                <TextInput style={styles.inptusd} />
                            </View>
                        </View>
                        <View style={{ padding: 20 }} />
                    </View>}

                    <View style={{ padding: 20 }} />

                    <Text style={styles.textTerm}>
                        Ao solicitar o entregador confirmo todos os
                        <Text style={{ color: '#FF032A' }}> termos</Text>
                         do aplicativo.
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('EntregadorEncontrado')} activeOpacity={0.7} style={styles.submit}>
                        <Text style={styles.textsubmit}>
                            SOLICITAR ENTREGADOR
                        </Text>
                    </TouchableOpacity>


                    <View style={{ padding: 50 }} />
                </View>
            </ScrollView>
        </>
    )

}
export default AddEntrega;