import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import {View, Text, useColorScheme, TouchableOpacity, } from 'react-native';
import { StyleSheet, Image, Platform, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/constants/GlobalStyles';
import StyledButton2 from '../StyledButton/StyledButton2';
import { useRouter } from 'expo-router';

export interface GenerateShopButtonRowProps {
    onSelected: () => void;
    onResetSelected: () => void;
}

export default function GenerateShopButtonRow({onSelected, onResetSelected} : GenerateShopButtonRowProps): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];
    const styles = GlobalStyles['phone']

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
                    marginBottom: 8
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
                    <StyledButton2 title={"Reset"} onPress={handleResetShop} width={160} style={[{backgroundColor: colors.backgroundColorRow}, localStyles.buttonStyleRed]} textStyle={{color: '#ffffff', fontSize: 16}} />

                    <StyledButton2 title={"Generate Shop"} onPress={handleGenerateShop} width={160} style={[{backgroundColor: colors.backgroundColorRow}, localStyles.buttonStyleGreen]} textStyle={{color: '#ffffff', fontSize: 16}} />

            </View>

        </View>
    );
};



const localStyles = StyleSheet.create({

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