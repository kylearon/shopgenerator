import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import {View, Text, useColorScheme, TouchableOpacity, GestureResponderEvent, } from 'react-native';
import { StyleSheet, Image, Platform, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/constants/GlobalStyles';
import StyledButton2 from '../StyledButton/StyledButton2';
import DropdownRowOpenable from '../DropdownRowOpenable/DropdownRowOpenable';
import shops from '../../../data/shops.json';
import ArmorDropdownRowOpenable from '../ArmorDropdownRowOpenable/ArmorDropdownRowOpenable';
import WeaponsDropdownRowOpenable from '../WeaponsDropdownRowOpenable/WeaponsDropdownRowOpenable';
import GearDropdownRowOpenable from '../GearDropdownRowOpenable/GearDropdownRowOpenable';

import armor from '../../../data/armor.json';
import weapons from '../../../data/weapons.json';
import gear from '../../../data/gear.json';
import item_attachments from '../../../data/item_attachments.json';

export interface SpecializationButtonRowProps {
    onItemSelected: (item: string, selected: boolean) => void;
}

export default function SpecializationButtonRow({onItemSelected} : SpecializationButtonRowProps): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];
    const styles = GlobalStyles['phone']

    const armorTypes = Array.from(new Set(armor.map((item) => item.type)));
    const weaponsTypes = Array.from(new Set(weapons.map((item) => item.type)));
    const gearTypes = Array.from(new Set(gear.map((item) => item.type)));
    const attachmentTypes = Array.from(new Set(item_attachments.map((item) => item.type)));

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

    const handleEditAttachmentsClick = async () => {
        console.log("handleEditAttachmentsClick()")
    }

    const handleArmorSelected = (item: string, selected: boolean) => {
        console.log(`Armor Selected: ${item} : ${selected}`);
        onItemSelected(item, selected);
    };

    const handleWeaponSelected = (item: string, selected: boolean) => {
        console.log(`Weapon Selected: ${item} : ${selected}`);
        onItemSelected(item, selected);
    };

    const handleGearSelected = (item: string, selected: boolean) => {
        console.log(`Gear Selected: ${item} : ${selected}`);
        onItemSelected(item, selected);
    };

    const handleAttachmentsSelected = (item: string, selected: boolean) => {
        console.log(`Attachment Selected: ${item} : ${selected}`);
        onItemSelected(item, selected);
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
                        Shop Specialization
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

                <DropdownRowOpenable title={'Armor'} distinctTypes={armorTypes} onPress={handleEditArmorClick} onItemSelected={(item: string, selected: boolean) => handleArmorSelected(item, selected)} icon={'shield-outline'} style={[{backgroundColor: colors.backgroundColorRow}, localStyles.buttonStyle]} textStyle={{color: colors.textColor, fontSize: 16}}/>

                <DropdownRowOpenable title={'Weapons'} distinctTypes={weaponsTypes} onPress={handleEditWeaponsClick} onItemSelected={(item: string, selected: boolean) => handleWeaponSelected(item, selected)} icon={'sword'} style={[{backgroundColor: colors.backgroundColorRow}, localStyles.buttonStyle]} textStyle={{color: colors.textColor, fontSize: 16}}/>

                <DropdownRowOpenable title={'Gear'} distinctTypes={gearTypes} onPress={handleEditGearClick} onItemSelected={(item: string, selected: boolean) => handleGearSelected(item, selected)} icon={'bag-personal'} style={[{backgroundColor: colors.backgroundColorRow}, localStyles.buttonStyle]} textStyle={{color: colors.textColor, fontSize: 16}}/>

                <DropdownRowOpenable title={'Attachments'} distinctTypes={attachmentTypes} onPress={handleEditAttachmentsClick} onItemSelected={(item: string, selected: boolean) => handleAttachmentsSelected(item, selected)} icon={'toy-brick-plus-outline'} style={[{backgroundColor: colors.backgroundColorRow}, localStyles.buttonStyle]} textStyle={{color: colors.textColor, fontSize: 16}}/>

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
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#4CAF50",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
    },
    
});