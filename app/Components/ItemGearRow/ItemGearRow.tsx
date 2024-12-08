import React, { useEffect, useState } from 'react';
import { View, Text, useColorScheme, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/constants/GlobalStyles';
import ToggleButton from '../ToggleButton/ToggleButton';
import { ItemGear } from '@/utils/diceroller';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ItemStatBox from '../ItemStatBox/ItemStatBox';

export interface ItemGearRowProps {
    itemGearToShow: ItemGear;
}

export default function ItemGearRow({itemGearToShow} : ItemGearRowProps): JSX.Element {
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
                    <MaterialCommunityIcons name="bag-personal" size={24} color={colors.itemTypeColor} />
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
                        {itemGearToShow.type}
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
                        {itemGearToShow.price}c
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
                        {itemGearToShow.name}
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

                <ItemStatBox value={itemGearToShow.encumbrance} stat='Enc'/>

                <ItemStatBox value={itemGearToShow.hard_points} stat='HP'/>

                <ItemStatBox value={itemGearToShow.rarity} stat='Rar'/>

            </View>

            {
                itemGearToShow.description
                ?
                    <View style={[styles.leftContainerFill, { }]}>
                        <Text
                            style={[
                                styles.itemRowDescriptionText,
                                {
                                    color: colors.textColor,
                                },
                            ]}
                        >
                            {itemGearToShow.description}
                        </Text>
                    </View>
                :
                <></>
            }

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
                    {itemGearToShow.type}
                </Text>
            </View>

            {
                !isOpen && itemGearToShow.details
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
                isOpen && itemGearToShow.details
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
                        {itemGearToShow.details}
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
