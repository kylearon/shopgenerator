import React, { useEffect, useState } from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/constants/GlobalStyles';
import ToggleButton from '../ToggleButton/ToggleButton';
import { ItemArmor } from '@/utils/diceroller';
import ItemStatBox from '../ItemStatBox/ItemStatBox';

export interface ItemArmorRowProps {
    itemArmorToShow: ItemArmor;
}

export default function ItemArmorRow({itemArmorToShow} : ItemArmorRowProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const colors = isDarkMode ? Colors['dark'] : Colors['light'];
    const styles = GlobalStyles['phone']


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
                    marginLeft: 6,
                    marginRight: 6,
                    paddingBottom: 8
                },
            ]}
        >
            
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: 4,
                    paddingLeft: 8,
                }}
            >

                <View style={[styles.leftContainerWrap, { marginLeft: 8 }]}>
                    <MaterialCommunityIcons name="shield-outline" size={24} color={colors.itemTypeColor} />
                </View>

                <View style={[styles.leftContainerWrap, { marginLeft: 8 }]}>
                    <Text
                        style={[
                            styles.itemRowTypeText,
                            {
                                color: colors.itemTypeColor,
                            },
                        ]}
                    >
                        {itemArmorToShow.type}
                    </Text>
                </View>

                <View style={[styles.rightContainerFill, { marginRight: 8 }]}>
                    <Text
                        style={[
                            styles.headerText,
                            {
                                color: colors.itemPriceColor,
                            },
                        ]}
                    >
                        {itemArmorToShow.price}c
                    </Text>
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: 0,
                    paddingLeft: 8,
                }}
            >

                <View style={[styles.centeredContainerFill, { }]}>
                    <Text
                        style={[
                            styles.itemRowNameText,
                            {
                                color: colors.textColor,
                            },
                        ]}
                    >
                        {itemArmorToShow.name}
                    </Text>
                </View>

            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: 4,
                    marginBottom: 4,
                    paddingLeft: 8,
                }}
            >
                
                <ItemStatBox value={itemArmorToShow.defense} stat='Def'/>

                <ItemStatBox value={itemArmorToShow.soak} stat='Sok'/>

                <ItemStatBox value={itemArmorToShow.encumbrance} stat='Enc'/>

                <ItemStatBox value={itemArmorToShow.hard_points} stat='HP'/>

                <ItemStatBox value={itemArmorToShow.rarity} stat='Rar'/>
               
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
                <Text
                    style={[
                        styles.statTextNoBorder,
                        {
                            color: colors.textColor,
                            backgroundColor: colors.backgroundColorRow,
                        },
                    ]}
                >

                    {
                        Array.isArray(itemArmorToShow.categories)
                        ? itemArmorToShow.categories.join(' - ') 
                        : itemArmorToShow.categories
                    }
                </Text>
                
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    
    headerText: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 4,
    },
    
    buttonStyle: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
    },
    buttonToggledStyle: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
    }
});
