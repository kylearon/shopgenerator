import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/constants/GlobalStyles';
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, useColorScheme, View } from 'react-native';
import shops from '../../../data/shops.json';
import gear from '../../../data/gear.json';
import ToggleButton from '../ToggleButton/ToggleButton';

export interface GearDropdownRowOpenableProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    style: any;
    textStyle?: any;
    disabled?: boolean;
}

export default function GearDropdownRowOpenable({title, onPress, style, textStyle= localStyles.buttonText, disabled = false} : GearDropdownRowOpenableProps): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];
    const styles = GlobalStyles['phone']

    //get distinct types from the gear.json
    const distinctTypes = Array.from(new Set(gear.map((item) => item.type)));

    const [isSubsectionOpen, setIsSubsectionOpen] = useState<boolean>(false);

    const handleSelectOpenable = () => {
        if(!isSubsectionOpen) {
            setIsSubsectionOpen(true);
        } else {
            setIsSubsectionOpen(false);
        }
    }

    
    // State to track which button is toggled on
    const [toggledButton, setToggledButton] = useState<string | null>(null);

    const onToggle = (title: string) => {
        setToggledButton((prev) => (prev === title ? null : title)); // Toggle on/off
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
                    isToggled={toggledButton === type}
                    onToggle={() => onToggle(type)}
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


