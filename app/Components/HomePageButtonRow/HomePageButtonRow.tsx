import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import {View, Text, useColorScheme, TouchableOpacity, } from 'react-native';
import { StyleSheet, Image, Platform, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';

export interface HomePageButtonRowProps {
    title: String,
    iconName: string,
    subText: string
}

export default function HomePageButtonRow({title, iconName, subText} : HomePageButtonRowProps): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];

    const ICON_SIZE = 40;

    return (
        
        <View 
            style={[
                styles.rowRounded,
                {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: colors.backgroundColorRow,
                    height: 112,
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
            
                {/* <View style={[
                    styles.centeredContainerWrap,
                    {
                        padding: 2
                    }
                    ]}>
                    <Icon name={props.iconName} size={ICON_SIZE} color={colors.iconColor} />
                </View> */}

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
                        {title}
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
                <Text style={[
                    styles.homePageSubText,
                    {
                        color: colors.subTextColor,
                    }
                ]}>
                    {subText}
                </Text>
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
    
});