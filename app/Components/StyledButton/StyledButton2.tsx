import { Colors } from '@/constants/Colors';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, useColorScheme } from 'react-native';

export interface StyledButton2Props {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    width: any; 
    style: any;
    textStyle?: any;
    disabled?: boolean;
}

export default function StyledButton2({title, onPress, width, style, textStyle= styles.buttonText, disabled = false} : StyledButton2Props): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];

    return (
        <TouchableOpacity 
            style={[
                style, 
                {
                    width: width,
                }
            ]} 
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    
});


