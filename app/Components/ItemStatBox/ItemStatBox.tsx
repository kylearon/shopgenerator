import React, { useEffect, useState } from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/constants/GlobalStyles';

export interface ItemStatBoxProps {
    value: string
    stat: string
}

export default function ItemStatBox({value, stat} : ItemStatBoxProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const colors = isDarkMode ? Colors['dark'] : Colors['light'];
    const styles = GlobalStyles['phone']


    return (
        <View
                style={[
                    styles.statTextContainer,
                    {
                        backgroundColor: colors.backgroundColorRow,
                    },
                ]}
            >
            <Text
                style={[
                    styles.statText,
                    {
                        color: colors.textColor,
                    },
                ]}
            >
                {value}
            </Text>
            <Text
                style={[
                    styles.statText,
                    {
                        color: colors.textColor,
                    },
                ]}
            >
                {stat}
            </Text>
        </View>
    );
}

const localStyles = StyleSheet.create({
    
});
