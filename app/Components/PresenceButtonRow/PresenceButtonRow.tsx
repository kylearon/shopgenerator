import React, { useEffect, useState } from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/constants/GlobalStyles';
import ToggleButton from '../ToggleButton/ToggleButton';

export interface PresenceButtonRowProps {
    onSelected: (val: number) => void;
    initialValue: number;
    currentShopType: string;
}

export default function PresenceButtonRow({onSelected, initialValue, currentShopType}:PresenceButtonRowProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const colors = isDarkMode ? Colors['dark'] : Colors['light'];
    const styles = GlobalStyles['phone']

    // State to track which button is toggled on
    const [toggledButton, setToggledButton] = useState<string>(String(initialValue));

    // const [shopType, setShopType] = useState<string>(currentShopType);

    useEffect(() => {
        setToggledButton(String(initialValue));
    }, [initialValue]);

    const onToggle = (title: string) => {
        setToggledButton((prev) => (prev === title ? title : title)); //leave toggled on if clicked again
        onSelected(Number(title))
    };

    return (
        <View
            style={[
                styles.rowRounded,
                {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: colors.backgroundColorRow,
                    marginTop: 8,
                },
            ]}
        >
            <View
                style={[
                    styles.rowTitleContainer,
                    {
                    }
                ]}
            >
                <View style={[styles.leftContainerWrap]}>
                    <Text
                        style={[
                            styles.rowHeaderText,
                            {
                                color: colors.textColor,
                            },
                        ]}
                    >
                        {currentShopType === 'On The Level' ? 'Presence' : 'Cunning' }
                    </Text>
                </View>
            </View>

            <View
                style={[
                    styles.rowContentContainer,
                    {
                    },
                ]}
            >
                {['0', '1', '2', '3', '4', '5', '6'].map((title) => (
                    <ToggleButton
                        key={title}
                        title={title}
                        isToggled={toggledButton === title}
                        onToggle={() => onToggle(title)}
                        width={40}
                        style={[styles.buttonStyle, {
                            borderColor: colors.presenceColor,
                        }]}
                        toggledStyle={[styles.buttonToggledStyle, {
                            backgroundColor: colors.presenceColor,
                            borderColor: colors.presenceColor,
                        }]}
                    />
                ))}
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    

});
