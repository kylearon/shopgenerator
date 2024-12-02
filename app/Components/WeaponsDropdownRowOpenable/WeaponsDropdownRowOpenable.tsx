import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/constants/GlobalStyles';
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, useColorScheme, View } from 'react-native';
import shops from '../../../data/shops.json';
import weapons from '../../../data/weapons.json';
import ToggleButton from '../ToggleButton/ToggleButton';

export interface WeaponsDropdownRowOpenableProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    style: any;
    textStyle?: any;
    disabled?: boolean;
}

export default function WeaponsDropdownRowOpenable({title, onPress, style, textStyle= localStyles.buttonText, disabled = false} : WeaponsDropdownRowOpenableProps): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];
    const styles = GlobalStyles['phone']

    //get distinct types from the weapons.json
    const distinctTypes = Array.from(new Set(weapons.map((item) => item.type)));

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
        setToggledStates((prev) => ({
            ...prev,
            [key]: !prev[key], // Toggle the specific button
        }));
    };


    return (

        <View style={[
            styles.leftContainerWrap,
            {
                width: '100%',
            }
        ]}>

            <TouchableOpacity style={{width: '100%',}} onPress={() => {
                handleSelectOpenable()
            }}>
                <Text style={[
                    localStyles.openableRowText,
                    {
                        width: '100%',
                        color: colors.textColor,
                        backgroundColor: colors.backgroundColorRow,
                        padding: 6,
                        marginTop: 6,
                        marginBottom: 0,
                    }
                    ]}>
                        {title}
                </Text>
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
                    style={localStyles.buttonStyle}
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
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
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


