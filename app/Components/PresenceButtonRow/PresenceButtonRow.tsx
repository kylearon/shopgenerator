import React, { useState } from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import ToggleButton from '../ToggleButton/ToggleButton';

export interface PresenceButtonRowProps {
    onSelected: (title: string) => void;
}

export default function PresenceButtonRow({onSelected}:PresenceButtonRowProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const colors = isDarkMode ? Colors['dark'] : Colors['light'];

    // State to track which button is toggled on
    const [toggledButton, setToggledButton] = useState<string | null>(null);

    const onToggle = (title: string) => {
        setToggledButton((prev) => (prev === title ? null : title)); // Toggle on/off
        onSelected(title)
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
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: 4,
                    paddingLeft: 8,
                }}
            >
                <View style={[styles.leftContainerWrap, { marginLeft: 20 }]}>
                    <Text
                        style={[
                            styles.headerText,
                            {
                                color: colors.textColor,
                            },
                        ]}
                    >
                        Presence
                    </Text>
                </View>
            </View>

            <View
                style={[
                    styles.leftContainerFill,
                    {
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        marginLeft: 12,
                        marginRight: 8,
                    },
                ]}
            >
                {['1', '2', '3', '4', '5', '6'].map((title) => (
                    <ToggleButton
                        key={title}
                        title={title}
                        isToggled={toggledButton === title}
                        onToggle={() => onToggle(title)}
                        width={40}
                        style={styles.buttonStyle}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rowRounded: {
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 12,
    },
    leftContainerFill: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    leftContainerWrap: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 4,
    },
    buttonStyle: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#00ff00",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
    },
});
