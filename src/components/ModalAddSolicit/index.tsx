import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';

import styles from './styles';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

interface Props {
    isOpen: boolean;
    navigation: any;
    onSwipeComplete: (value: boolean) => void;
}

const ModalAddSolicit: React.FC<Props> = ({ isOpen, onSwipeComplete, navigation }) => {
    const [numberEntregas, setNumberEntregas] = useState<string>('1');
    const handleNavigation = async () => {
        if (Number(numberEntregas) < 1) {
            return
        }
        await Promise.resolve(onSwipeComplete(false));


        return navigation.navigate('AddEntrega', { numberEntregas: numberEntregas })


    }

    return (
        <>
            <Modal
                swipeDirection="down"
                customBackdrop={<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 0 }} />}
                onSwipeComplete={() => onSwipeComplete(false)}
                isVisible={isOpen}>
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
export default ModalAddSolicit;