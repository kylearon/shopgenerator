import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useEffect, useState } from 'react';
import {View, Text, useColorScheme, TouchableOpacity, } from 'react-native';
import { StyleSheet, Image, Platform, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/constants/GlobalStyles';
import StyledButton2 from '../StyledButton/StyledButton2';
import ToggleButton from '../ToggleButton/ToggleButton';

export interface ShopTypeButtonRowProps {
    onSelected: (title: string) => void;
    initialValue: string;
}

export default function ShopTypeButtonRow({onSelected, initialValue} : ShopTypeButtonRowProps): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];
    const styles = GlobalStyles['phone']

    const ICON_SIZE = 40;

    // State to track which button is toggled on
    const [toggledButton, setToggledButton] = useState<string>(String(initialValue));

    useEffect(() => {
        setToggledButton(String(initialValue));
    }, [initialValue]);

    const onToggle = (title: string) => {
        setToggledButton((prev) => (prev === title ? title : title)); //leave toggled on if clicked again
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
                }]
            }>

            <View 
                style={
                    {
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        marginTop: 4,
                        paddingLeft: 8,
                    }
                }>
            

                <View style={[
                    styles.leftContainerWrap,
                    {
                        marginLeft: 20,
                    }
                    ]}>
                    <Text style={[
                        styles.rowHeaderText,
                        {
                            color: colors.textColor,
                        }
                    ]}>
                        Shop Type
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
                {["On The Level", "Black Market"].map((title) => (
                    <ToggleButton
                        key={title}
                        title={title}
                        isToggled={toggledButton === title}
                        onToggle={() => onToggle(title)}
                        width={160}
                        style={localStyles.buttonStyle}
                    />
                ))}
            </View>

        </View>
    );
};



const localStyles = StyleSheet.create({

    homePageSubText: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 'normal',
    },
    buttonStyle: {
        padding: 6,
        borderRadius: 8,
        borderWidth: 2,
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
    }
    
});