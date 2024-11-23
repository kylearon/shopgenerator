import React, { useEffect, useState } from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import ToggleButton from '../ToggleButton/ToggleButton';
import { ItemArmor } from '@/utils/diceroller';

export interface ItemArmorRowProps {
    itemArmorToShow: ItemArmor;
}

export default function ItemArmorRow({itemArmorToShow} : ItemArmorRowProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const colors = isDarkMode ? Colors['dark'] : Colors['light'];


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
                    <Text
                        style={[
                            styles.headerText,
                            {
                                color: colors.textColor,
                            },
                        ]}
                    >
                        {itemArmorToShow.name}
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
                    marginTop: 4,
                    marginBottom: 4,
                    paddingLeft: 8,
                }}
            >

            
                <Text
                    style={[
                        styles.statText,
                        {
                            color: colors.textColor,
                            backgroundColor: colors.backgroundColorRow,

                        },
                    ]}
                >
                    {itemArmorToShow.defense} Def
                </Text>

                <Text
                    style={[
                        styles.statText,
                        {
                            color: colors.textColor,
                            backgroundColor: colors.backgroundColorRow,

                        },
                    ]}
                >
                    {itemArmorToShow.soak} Sok
                </Text>

                <Text
                    style={[
                        styles.statText,
                        {
                            color: colors.textColor,
                            backgroundColor: colors.backgroundColorRow,

                        },
                    ]}
                >
                    {itemArmorToShow.encumbrance} Enc
                </Text>

                <Text
                    style={[
                        styles.statText,
                        {
                            color: colors.textColor,
                            backgroundColor: colors.backgroundColorRow,

                        },
                    ]}
                >
                    {itemArmorToShow.hard_points} HP
                </Text>

                <Text
                    style={[
                        styles.statText,
                        {
                            color: colors.textColor,
                            backgroundColor: colors.backgroundColorRow,

                        },
                    ]}
                >
                    {itemArmorToShow.rarity} RAR
                </Text>
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

const styles = StyleSheet.create({
    rowRounded: {
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 12,
    },
    leftContainerFill: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    leftContainerWrap: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightContainerFill: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    rightContainerWrap: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 4,
    },
    statText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 2,
        marginLeft: 4,
        marginRight: 4,
        borderRadius: 4,
        borderWidth: 1,
        width: 64,
        borderColor: '#cccccc'
    },
    statTextNoBorder: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        padding: 4,
        marginLeft: 8,
        marginRight: 8,
        borderColor: '#cccccc'
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
