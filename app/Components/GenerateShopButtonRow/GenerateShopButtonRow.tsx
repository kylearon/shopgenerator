import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import {View, Text, useColorScheme, TouchableOpacity, } from 'react-native';
import { StyleSheet, Image, Platform, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import StyledButton2 from '../StyledButton/StyledButton2';
import { useRouter } from 'expo-router';

export interface ShopTypeButtonRowProps {

}

export default function ShopTypeButtonRow({} : ShopTypeButtonRowProps): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];

    const router = useRouter();

    const handleGenerateShop = async () => {
        console.log("handleGenerateShop()")
        router.push('/generatedshop'); // Navigate to the 'generatedshop' page
    }


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


            <View style={[
                styles.centeredContainerFill,
                {
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    marginLeft: 12,
                    marginRight: 8,
                }
                ]}>

                    <StyledButton2 title={"Generate Shop"} onPress={handleGenerateShop} width={160} style={[{backgroundColor: colors.backgroundColorRow}, styles.buttonStyle]} textStyle={{color: '#ffffff', fontSize: 16}} />
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
    buttonStyle: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#00ff00",
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
    },
    
});