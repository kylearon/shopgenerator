import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/constants/GlobalStyles';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, useColorScheme, View } from 'react-native';

import ToggleButton from '../ToggleButton/ToggleButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export interface DropdownRowOpenableProps {
    title: string;
    distinctTypes: string[];
    isReset: boolean;
    onPress: (event: GestureResponderEvent) => void;
    onItemSelected: (item: string, selected: boolean) => void;
    icon: any;
    style: any;
    textStyle?: any;
    disabled?: boolean;
}

export default function DropdownRowOpenable({title, distinctTypes, isReset=false, onPress, onItemSelected, icon="tortoise", style, textStyle= localStyles.buttonText, disabled = false} : DropdownRowOpenableProps): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];
    const styles = GlobalStyles['phone']

    useEffect(() => {
        if (isReset) {
            console.log("Resetting " + title + " row");
            
            //perform reset logic
            setIsSubsectionOpen(false);
            setToggledStates(initialState);
        }
    }, [isReset]);

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
            localStyles.rowStyle,
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
                        localStyles.openableRowText,
                        {
                            color: colors.textColor,
                            backgroundColor: colors.backgroundColorRow,
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
                    width={320}
                    style={localStyles.buttonStyle}
                    toggledStyle={localStyles.buttonToggledStyle}
                />
                ))}
            </View>
                : 
                <></>
            }
        </View>
        
    );
}

const localStyles = StyleSheet.create({

    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    openableRowText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 4
    },

    buttonStyle: {
        padding: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#4CAF50",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
    },
    buttonToggledStyle: {
        padding: 6,
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