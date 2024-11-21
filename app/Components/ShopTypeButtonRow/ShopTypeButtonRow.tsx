import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import {View, Text, useColorScheme, TouchableOpacity, } from 'react-native';
import { StyleSheet, Image, Platform, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import StyledButton2 from '../StyledButton/StyledButton2';
import ToggleButton from '../ToggleButton/ToggleButton';

export interface ShopTypeButtonRowProps {

}

export default function ShopTypeButtonRow({} : ShopTypeButtonRowProps): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];

    const ICON_SIZE = 40;

    // State to track which button is toggled on
    const [toggledButton, setToggledButton] = useState<string | null>(null);

    const onToggle = (title: string) => {
        setToggledButton((prev) => (prev === title ? null : title)); // Toggle on/off

        console.log(title)
    };

    // const handleOnTheLevel = async () => {
    //     console.log("handleOnTheLevel()")
    // }

    // const handleBlackMarket = async () => {
    //     console.log("handleBlackMarket()")
    // }

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
                        styles.headerText,
                        {
                            color: colors.textColor,
                        }
                    ]}>
                        Shop Type
                    </Text>
                </View>
            </View>
{/* 
            <View style={[
                styles.leftContainerFill,
                {
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginLeft: 12,
                    marginRight: 8,
                }
                ]}>

                    <StyledButton2 title={"On The Level"} onPress={handleOnTheLevel} width={160} style={[{backgroundColor: colors.backgroundColorRow}, styles.buttonStyle]} textStyle={{color: colors.textColor, fontSize: 16}} />

                    <StyledButton2 title={"Black Market"} onPress={handleBlackMarket} width={160} style={[{backgroundColor: colors.backgroundColorRow}, styles.buttonStyle]} textStyle={{color: colors.textColor, fontSize: 16}} />

            </View> */}

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
                        width={120}
                        style={styles.buttonStyle}
                    />
                ))}
            </View>

        </View>
    );
};



const styles = StyleSheet.create({

    centeredContainerWrap: {
        flex: 0,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',     // Center content horizontally
    },

    rowRounded: {
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 12,
    },

    leftContainerFill: {
        flex: 1,
        justifyContent: 'center', // Center content vertically
        alignItems: 'flex-start',     // left content horizontally
    },
    leftContainerWrap: {
        flex: 0,
        justifyContent: 'center', // Center content vertically
        alignItems: 'flex-start',     // left content horizontally
    },

    headerText: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 4,
    },
    homePageSubText: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 'normal',
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