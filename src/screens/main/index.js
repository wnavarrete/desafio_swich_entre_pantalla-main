import React from "react";
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, ScrollView } from 'react-native';
import { styles } from './styles';
import { Card} from "../../components";
import COLORS from "../../constants/colors";

const Main = ({onSelectStatus}) => {

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <ScrollView style={styles.containerScroll}>
                <View style={styles.container}>
                    <Card style={styles.inputContainer}>
                    <Text style={styles.title}>Main Screen</Text>
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Go pending"
                                onPress={() => onSelectStatus('pending')}
                                color={COLORS.secondary}
                            />
                            <Button 
                                title="Go delivered"
                                onPress={() => onSelectStatus('delivered')}
                                color={COLORS.primary}
                            />
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default Main;