import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, useColorScheme, View } from 'react-native';

import ToggleButton from '../ToggleButton/ToggleButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface DropdownRowOpenableProps {
    title: string;
    distinctTypes: string[];
    onPress: (event: GestureResponderEvent) => void;
    onItemSelected: (item: string, selected: boolean) => void;
    icon: any;
    style: any;
    textStyle?: any;
    disabled?: boolean;
}

export default function DropdownRowOpenable({title, distinctTypes, onPress, onItemSelected, icon="tortoise", style, textStyle= styles.buttonText, disabled = false} : DropdownRowOpenableProps): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];


    const [isSubsectionOpen, setIsSubsectionOpen] = useState<boolean>(false);

    const handleSelectOpenable = () => {
        if(!isSubsectionOpen) {
            setIsSubsectionOpen(true);
        } else {
            setIsSubsectionOpen(false);
        }
    }


    const initialState = Object.fromEntries(distinctTypes.map((key) => [key, false]));
    const [toggledStates, setToggledStates] = useState<{ [key: string]: boolean }>(initialState);

    const handleToggle = (key: string) => {
        //save the state up
        onItemSelected(key, !toggledStates[key])
        
        setToggledStates((prev) => ({
            ...prev,
            [key]: !prev[key], // Toggle the specific button
        }));
    };


    return (

        <View style={[
            styles.centeredContainerFill,
            styles.rowStyle,
            {
                width: '100%'
            }
        ]}>

            

            <TouchableOpacity style={{width: '100%',}} onPress={() => {
                handleSelectOpenable()
            }}>

                <View style={[
                    styles.centeredContainerFill,
                    {
                        flexDirection: 'row',
                    }
                ]}>
                    <View style={[styles.leftContainerWrap, { marginLeft: 8 }]}>
                        <MaterialCommunityIcons name={icon} size={24} color={colors.iconColor} />
                    </View>

                    <Text style={[
                        styles.openableRowText,
                        {
                            color: colors.textColor,
                            backgroundColor: colors.backgroundColorRow,
                            padding: 6,
                            marginTop: 6,
                            marginBottom: 0,
                        }
                        ]}>
                            {title}
                    </Text>
                </View>
            </TouchableOpacity>

            {
                isSubsectionOpen  
                ? 
                <View
                style={[
                    styles.leftContainerFill,
                    {
                        marginLeft: 12,
                        marginRight: 8,
                    },
                ]}
            >
                {distinctTypes.map((type) => (
                    <ToggleButton
                    key={type}
                    title={type}
                    isToggled={toggledStates[type]}
                    onToggle={() => handleToggle(type)}
                    width={180}
                    style={styles.buttonStyle}
                    toggledStyle={styles.buttonToggledStyle}
                />
                ))}
            </View>
                : 
                <></>
            }
        </View>
        
    );
}

const styles = StyleSheet.create({

    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    openableRowText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    centeredContainerFill: {
        flex: 1,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',     // center content horizontally
    },

    centeredContainerWrap: {
        flex: 0,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',     // Center content horizontally
    },
    leftContainerWrap: {
        flex: 0,
        justifyContent: 'center', // Center content vertically
        alignItems: 'flex-start',     // left content horizontally
    },
    leftContainerFill: {
        flex: 1,
        justifyContent: 'center', // Center content vertically
        alignItems: 'flex-start',     // left content horizontally
    },
    buttonStyle: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#4CAF50",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
    },
    buttonToggledStyle: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,

        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
    },
    rowStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000000', // Default black border
        backgroundColor: '#FFFFFF', // Default white background
        margin: 4,
        padding: 2
    },
});