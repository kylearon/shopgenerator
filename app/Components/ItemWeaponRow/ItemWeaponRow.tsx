import React, { useEffect, useState } from 'react';
import { View, Text, useColorScheme, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/constants/GlobalStyles';
import ToggleButton from '../ToggleButton/ToggleButton';
import { ItemWeapon } from '@/utils/diceroller';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ItemStatBox from '../ItemStatBox/ItemStatBox';

export interface ItemWeaponRowProps {
    itemWeaponToShow: ItemWeapon;
}

export default function ItemWeaponRow({itemWeaponToShow} : ItemWeaponRowProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const colors = isDarkMode ? Colors['dark'] : Colors['light'];
    const styles = GlobalStyles['phone']

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onPress = () => {
        setIsOpen(!isOpen);
    };

    return (
        <TouchableOpacity 
            style={[
                {
                }
            ]} 
            onPress={onPress}
        >
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
                    <MaterialCommunityIcons name="sword" size={24} color={colors.itemTypeColor} />
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
                        {itemWeaponToShow.type}
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
                        {itemWeaponToShow.price}c
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
                        {itemWeaponToShow.name}
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

                {
                    itemWeaponToShow.damage_add && itemWeaponToShow.damage_add != '0'
                    ?
                    <ItemStatBox value={'+' + itemWeaponToShow.damage_add} stat='Dmg'/>
                    :
                    <ItemStatBox value={itemWeaponToShow.damage} stat='Dmg'/>
                }

                <ItemStatBox value={itemWeaponToShow.crit} stat='Crt'/>

                <ItemStatBox value={itemWeaponToShow.hard_points} stat='HP'/>

                <ItemStatBox value={itemWeaponToShow.encumbrance} stat='Enc'/>

                <ItemStatBox value={itemWeaponToShow.rarity} stat='RAR'/>

            </View>

            {
                itemWeaponToShow.description
                ?
                    <View style={[styles.leftContainerFill, { }]}>
                        <Text
                            style={[
                                styles.itemRowDescriptionText,
                                {
                                    color: colors.textColor,
                                    paddingLeft: 0,
                                    marginBottom: 6
                                },
                            ]}
                        >
                            {itemWeaponToShow.description}
                        </Text>
                    </View>
                :
                <></>
            }

            {/* <Text
                style={[
                    styles.statTextNoBorder,
                    {
                        color: colors.textColor,
                        backgroundColor: colors.backgroundColorRow,

                    },
                ]}
            >
                {itemWeaponToShow.range_value}
            </Text> */}

            <View
                style={[
                    styles.leftContainerFill,
                    {
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        marginLeft: 8,
                        marginRight: 8,
                    },
                ]}
            >

                <Text
                    style={[
                        styles.statTextNoWidth,
                        {
                            color: colors.textColor,
                            backgroundColor: colors.backgroundColorRow,

                        },
                    ]}
                >
                    {itemWeaponToShow.range_value}
                </Text>
                
            </View>

            {/* <View
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
                        Array.isArray(itemWeaponToShow.categories)
                        ? itemWeaponToShow.categories.join(' - ') 
                        : itemWeaponToShow.categories
                    }
                </Text>
            </View> */}

            {
                !isOpen && itemWeaponToShow.details
                ?
                <View 
                    style={[
                        styles.rowRounded,
                        {
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignContent: 'center',
                            backgroundColor: colors.backgroundColorRow,
                            marginTop: 2,
                            marginLeft: 8,
                            marginRight: 8,
                            borderWidth: 1,
                            borderColor: colors.backgroundColor
                        }]
                    }>
                    
                    <Text
                        style={[
                            styles.itemRowMoreBarText,
                            {
                                color: colors.moreInfoColor,
                            },
                        ]}
                    >
                        more info
                    </Text>
                </View>
                :
                <></>
            }

            {
                isOpen && itemWeaponToShow.details
                ?
                <View 
                    style={[
                        styles.leftContainerFill,
                        styles.rowRounded,
                        { 
                            borderWidth: 1,
                            borderColor: colors.backgroundColor
                        }]
                    }>
                    <Text
                        style={[
                            styles.itemRowDetailsText,
                            {
                                color: colors.textColor,
                            },
                        ]}
                    >
                        {itemWeaponToShow.details}
                    </Text>
                </View>
                :
                <></>
            }

        </View>
        </TouchableOpacity>
    );
}

const localStyles = StyleSheet.create({
    
});
