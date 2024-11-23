import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import {View, Text, useColorScheme, TouchableOpacity, } from 'react-native';
import { StyleSheet, Image, Platform, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import StyledButton2 from '../StyledButton/StyledButton2';
import { useRouter } from 'expo-router';

export interface GenerateShopButtonRowProps {
    onSelected: () => void;
    onResetSelected: () => void;
}

export default function GenerateShopButtonRow({onSelected, onResetSelected} : GenerateShopButtonRowProps): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];

    const router = useRouter();

    const handleGenerateShop = async () => {
        console.log("handleGenerateShop()")

        //callback to generate the shop
        onSelected();
    }

    const handleResetShop = async () => {
        console.log("handleResetShop()")

        //callback to reset the shop
        onResetSelected();
    }


    return (
        
        <View 
            style={[
                styles.rowRounded,
                styles.centeredContainerFill,
                {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: colors.backgroundColorRow,
                    marginTop: 8,
                }]
            }>


            <View style={[
                styles.centeredContainerFill,
                {
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginLeft: 12,
                    marginRight: 8,
                }
                ]}> 
                    <StyledButton2 title={"Generate Shop"} onPress={handleGenerateShop} width={160} style={[{backgroundColor: colors.backgroundColorRow}, styles.buttonStyleGreen]} textStyle={{color: '#ffffff', fontSize: 16}} />

                    <StyledButton2 title={"Reset"} onPress={handleResetShop} width={160} style={[{backgroundColor: colors.backgroundColorRow}, styles.buttonStyleRed]} textStyle={{color: '#ffffff', fontSize: 16}} />
            </View>

        </View>
    );
};



const styles = StyleSheet.create({

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
    buttonStyleGreen: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#00ff00",
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
    },
    buttonStyleRed: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ff0000",
        backgroundColor: '#b53737',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
    },
    
});