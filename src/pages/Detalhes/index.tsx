import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Text, View, ScrollView } from 'react-native';
import { DeliveriesProduct } from '../../types'
import api from '../../service/api';

interface Props {
    route: {
        params: {
            deliveriesProduct: DeliveriesProduct
        }
    }
}

interface Data {
    deliveries: {
        id: string;
        is_active_deliveries: boolean;
        delivermanID: string | null;
        companiesID: string;
        code_deliveries: string;
    },
    deliverman: {
        id: string;
        is_active_delivermans: boolean;
        is_online_delivermans: boolean;
        name_delivermans: string;
        age_delivermans: string;
        email_delivermans: string;
        CPF_delivermans: string;
        phone_delivermans: string;
        vehicle_plate_delivermans: string;
        vehicle_model_delivermans: string;
    }
    isDeliverman: boolean;
}
const Detalhes: React.FC<Props> = ({ route: { params: { deliveriesProduct } } }) => {

    const [data, setData] = useState<Data>({} as Data)

    const load = () => {
        api.get(`/api/deliveries/product/${deliveriesProduct.id}`).then(res => {
            if (res.data.message === 'success') {
                setData(res.data.value)
            }
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        load()
    }, [])


    const getNamePortugiese = (e: string) => {
        if (e === 'pending') {
            return 'pendente'
        }
        if (e === 'seeking out') {
            return 'Em mãos'
        }
        if (e === 'delivering') {
            return 'levando'
        }
        if (e === 'delivered') {
            return 'entregue'
        }
        if (e === 'returning') {
            return 'voltando'
        }
        if (e === 'complete') {
            return 'finalizado'
        }
        return 'loading'
    }


    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ padding: 10 }} />
                    <View style={styles.rows}>
                        <View style={styles.viewStstusItems}>
                            <Text style={styles.statusText}>STATUS</Text>
                            <View style={styles.endVier}>
                                <Text style={styles.texto}>{String(getNamePortugiese(deliveriesProduct.status_product)).toUpperCase()}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 15 }} />
                    <Text style={[styles.titelss,{fontWeight:'bold'}]}>Endereço</Text>
                    <View style={{ padding: 5 }} />
                    <Text style={styles.titelsss}>{deliveriesProduct.address_client_product}</Text>
                    <View style={{ padding: 10 }} />

                    <Text style={[styles.titelss,{fontWeight:'bold'}]}>Nome do Cliente</Text>
                    <View style={{ padding: 5 }} />
                    <Text style={styles.titelsss}>{deliveriesProduct.name_client_product}</Text>
                    <View style={{ padding: 10 }} />


                    <Text style={[styles.titelss,{fontWeight:'bold'}]}>Produto</Text>
                    <View style={{ padding: 5 }} />
                    <Text style={styles.titelsss}>{deliveriesProduct.product}</Text>
                    <View style={{ padding: 10 }} />


                    <Text style={[styles.titelss,{fontWeight:'bold'}]}>Método de Pagamento</Text>
                    <View style={{ padding: 5 }} />
                    <Text style={styles.titelsss}>{deliveriesProduct.payment_method_product}</Text>
                    <View style={{ padding: 10 }} />

                    <Text style={[styles.titelss,{fontWeight:'bold'}]}>Preço Total</Text>
                    <View style={{ padding: 5 }} />
                    <Text style={styles.titelsss}>R$ {deliveriesProduct.price_product}</Text>
                    <View style={{ padding: 10 }} />

                    <Text style={[styles.titelss,{fontWeight:'bold'}]}>Troco</Text>
                    <View style={{ padding: 5 }} />
                    <Text style={styles.titelsss}>R$ {deliveriesProduct.change_product}</Text>
                    <View style={{ padding: 10 }} />
                    {data.isDeliverman && <>
                        <Text style={[styles.titelss,{fontWeight:'bold'}]}>Entregador</Text>
                        <View style={{ padding: 10 }} />
                        <View style={styles.view}>
                            <Text style={styles.text}>Nome: {data.deliverman.name_delivermans}</Text>
                            <Text style={styles.text}>Idade: {data.deliverman.age_delivermans}</Text>
                            <Text style={styles.text}>Motocicleta: {data.deliverman.vehicle_model_delivermans}</Text>
                            <Text style={styles.text}>Placa: {data.deliverman.vehicle_plate_delivermans}</Text>
                        </View>
                    </>}
                    <View style={{ padding: 50 }} />

                </View>
            </ScrollView>
        </>

    )
}
export default Detalhes;