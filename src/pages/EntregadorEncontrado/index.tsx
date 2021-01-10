import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles'
//@ts-ignore
import Moto from '../../assets/moto.png'
const EntregadorEncontrado: React.FC = () => {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>SOLICITAÇÃO FEITA COM SUCESSO!</Text>
                    <Text style={styles.title0}>O entregador Will Silva está a caminho da coleta</Text>
                    <View style={{ padding: 10 }} />
                    <Text style={styles.titleB}>Instruções importantes</Text>
                    <Text style={styles.title1}>
                        * Caso o pagamento escolhido for crédito/debito
                        não esqueça de fornecer a maquininha para o
                        entregador.
                </Text>
                    <View style={{ padding: 10 }} />
                    <Text style={styles.title1}>
                        * Em caso de transtornos, abra uma reclamação.
                </Text>
                    <View style={{ padding: 10 }} />
                    <Text style={styles.title1}>
                        * Em caso de uma ou mais entregas, forneça o troco
                        correto de cada entrega.
                </Text>
                    <View style={{ padding: 10 }} />
                    <Text style={styles.title1}>
                        * Sempre emita nota fiscal para o entregador
                </Text>
                    <View style={{ padding: 10 }} />
                    <Text style={styles.titleB}>Dados do entregador</Text>
                    <View style={{ padding: 4 }} />


                    <View style={styles.view}>
                        <FastImage resizeMode={'contain'} source={Moto} style={styles.moto} />
                        <View style={{ padding: 7 }} />
                        <Text style={styles.testyd}><Text style={{ fontWeight: 'bold' }}>Nome do entregador:</Text> will silva </Text>
                        <Text style={styles.testyd}><Text style={{ fontWeight: 'bold' }}>Idade:</Text> 20 anos </Text>
                        <Text style={styles.testyd}><Text style={{ fontWeight: 'bold' }}>Motocicleta:</Text> BIZ 150 </Text>
                        <Text style={styles.testyd}><Text style={{ fontWeight: 'bold' }}>Placa da motocicleta:</Text> MKZ203</Text>
                    </View>

                    <View style={{ padding: 40 }} />
                </View>
            </ScrollView>
        </>
    )
}
export default EntregadorEncontrado;