import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import {View, Text, useColorScheme, TouchableOpacity, GestureResponderEvent, } from 'react-native';
import { StyleSheet, Image, Platform, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import StyledButton2 from '../StyledButton/StyledButton2';
import DropdownRowOpenable from '../DropdownRowOpenable/DropdownRowOpenable';
import shops from '../../../data/shops.json';
import ArmorDropdownRowOpenable from '../ArmorDropdownRowOpenable/ArmorDropdownRowOpenable';
import WeaponsDropdownRowOpenable from '../WeaponsDropdownRowOpenable/WeaponsDropdownRowOpenable';
import GearDropdownRowOpenable from '../GearDropdownRowOpenable/GearDropdownRowOpenable';

import armor from '../../../data/armor.json';
import weapons from '../../../data/weapons.json';
import gear from '../../../data/gear.json';

export interface SpecializationButtonRowProps {
    onSelected: (title: string) => void;
}

export default function SpecializationButtonRow({onSelected} : SpecializationButtonRowProps): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];

    const armorTypes = Array.from(new Set(armor.map((item) => item.type)));
    const weaponsTypes = Array.from(new Set(weapons.map((item) => item.type)));
    const gearTypes = Array.from(new Set(gear.map((item) => item.type)));

    const ICON_SIZE = 40;

    const handleButtonClick = (name: string) => {
        console.log(`${name} button clicked`);
    };

    const handleEditArmorClick = async () => {
        console.log("handleEditArmorClick()")
    }

    const handleEditWeaponsClick = async () => {
        console.log("handleEditWeaponsClick()")
    }

    const handleEditGearClick = async () => {
        console.log("handleEditGearClick()")
    }

    const handleEditEverythingClick = async () => {
        console.log("handleEditEverythingClick()")
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
                        Specialization
                    </Text>
                </View>
            </View>

            <View style={[
                styles.leftContainerFill,
                {
                    marginLeft: 12,
                    marginRight: 8,
                }
                ]}>

                {/* {shops.map((shop) => (
                    <DropdownRowOpenable
                        key={shop.name}
                        title={shop.name}
                        onPress={() => handleButtonClick(shop.name)}
                        style={[
                            { backgroundColor: colors.backgroundColorRow },
                            styles.buttonStyle,
                        ]}
                        textStyle={{
                            color: colors.textColor,
                            fontSize: 16,
                        }}
                    />
                ))} */}

                {/* <ArmorDropdownRowOpenable title={'Armor'} onPress={handleEditArmorClick} style={[{backgroundColor: colors.backgroundColorRow}, styles.buttonStyle]} textStyle={{color: colors.textColor, fontSize: 16}}/> */}
                <DropdownRowOpenable title={'Armor'} distinctTypes={armorTypes} onPress={handleEditArmorClick} style={[{backgroundColor: colors.backgroundColorRow}, styles.buttonStyle]} textStyle={{color: colors.textColor, fontSize: 16}}/>

                {/* <WeaponsDropdownRowOpenable title={'Weapons'} onPress={handleEditWeaponsClick} style={[{backgroundColor: colors.backgroundColorRow}, styles.buttonStyle]} textStyle={{color: colors.textColor, fontSize: 16}}/> */}
                <DropdownRowOpenable title={'Weapons'} distinctTypes={weaponsTypes} onPress={handleEditWeaponsClick} style={[{backgroundColor: colors.backgroundColorRow}, styles.buttonStyle]} textStyle={{color: colors.textColor, fontSize: 16}}/>

                {/* <GearDropdownRowOpenable title={'Gear'} onPress={handleEditGearClick} style={[{backgroundColor: colors.backgroundColorRow}, styles.buttonStyle]} textStyle={{color: colors.textColor, fontSize: 16}}/> */}
                <DropdownRowOpenable title={'Gear'} distinctTypes={gearTypes} onPress={handleEditGearClick} style={[{backgroundColor: colors.backgroundColorRow}, styles.buttonStyle]} textStyle={{color: colors.textColor, fontSize: 16}}/>

                {/* <DropdownRowOpenable title={'Everything'} onPress={handleEditEverythingClick} style={[{backgroundColor: colors.backgroundColorRow}, styles.buttonStyle]} textStyle={{color: colors.textColor, fontSize: 16}}/> */}

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