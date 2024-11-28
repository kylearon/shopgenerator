import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, StatusBar, useColorScheme, View, Text } from 'react-native';

import Header from './Components/Header/Header';
import ShopTypeButtonRow from './Components/ShopTypeButtonRow/ShopTypeButtonRow';
import SpecializationButtonRow from './Components/SpecializationButtonRow/SpecializationButtonRow';
import PresenceButtonRow from './Components/PresenceButtonRow/PresenceButtonRow';
import NegotiationButtonRow from './Components/NegotiationButtonRow/NegotiationButtonRow';
import RarityModifierButtonRow from './Components/RarityModifierButtonRow/RarityModifierButtonRow';
import GenerateShopButtonRow from './Components/GenerateShopButtonRow/GenerateShopButtonRow';
import ItemNumberButtonRow from './Components/ItemNumberButtonRow/ItemNumberButtonRow';
import BoostDiceButtonRow from './Components/BoostDiceButtonRow/BoostDiceButtonRow';
import DifficultyDiceButtonRow from './Components/DifficultyDiceButtonRow/DifficultyDiceButtonRow';
import SetbackDiceButtonRow from './Components/SetbackDiceButtonRow/SetbackDiceButtonRow';
import armor from '../data/armor.json';
import weapons from '../data/weapons.json';
import gear from '../data/gear.json';
import {ItemKeyAndRarity, ItemArmor, ItemWeapon, ItemGear, rollForItems} from '../utils/diceroller'
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import ItemArmorRow from './Components/ItemArmorRow/ItemArmorRow';
import ItemWeaponRow from './Components/ItemWeaponRow/ItemWeaponRow';
import ItemGearRow from './Components/ItemGearRow/ItemGearRow';

export default function HomeScreen() {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];

    const router = useRouter();

    const[shopType, setShopType] = useState<string>("On The Level");
    const onShopTypeSelected = (val: string) => {
        setShopType(val);
    };

    const[specialization, setSpecialization] = useState<string[]>([]);
    const onSpecializationSelected = (val: string, selected: boolean) => {
        //this is how you update an array in useState
        setSpecialization((prev) => {
            if (!selected) {
                //remove the item
                return prev.filter((item) => item !== val);
            } else {
                //add the item
                return [...prev, val];
            }
        });
    };

    const[presence, setPresence] = useState<number>(0);
    const onPresenceSelected = (val: number) => {
        setPresence(val);
    };

    const[negotiation, setNegotiation] = useState<number>(0);
    const onNegotiationSelected = (val: number) => {
        setNegotiation(val);
    };

    const[boostDice, setBoostDice] = useState<number>(0);
    const onBoostDiceSelected = (val: number) => {
        setBoostDice(val);
    };

    const[setbackDice, setSetbackDice] = useState<number>(0);
    const onSetbackDiceSelected = (val: number) => {
        setSetbackDice(val);
    };

    const[difficultyDice, setDifficultyDice] = useState<number>(0);
    const onDifficultyDiceSelected = (val: number) => {
        setDifficultyDice(val);
    };

    const[rarityModifier, setRarityModifier] = useState<number>(0);
    const onRarityModifierSelected = (val: number) => {
        setRarityModifier(val);
    };

    const[numberOfItems, setNumberOfItems] = useState<number>(5);
    const onNumberOfItemsSelected = (val: number) => {
        setNumberOfItems(val);
    };

    const[shopArmorItemsToShow, setShopArmorItemsToShow] = useState<ItemArmor[]>([]);

    const[shopWeaponsItemsToShow, setShopWeaponsItemsToShow] = useState<ItemWeapon[]>([]);

    const[shopGearItemsToShow, setShopGearItemsToShow] = useState<ItemGear[]>([]);
    

    const onGenerateShop = () => {
        console.log("Generating Shop...");
        console.log("Shop Type: " + shopType);
        console.log("Specialization: " + specialization);
        console.log("Presence: " + presence);
        console.log("Negotiation: " + negotiation);
        console.log("Rarity Modifier: " + rarityModifier);
        console.log("Boost Dice: " + boostDice);
        console.log("Setback Dice: " + setbackDice);
        console.log("Difficulty Dice: " + difficultyDice);
        console.log("Number of Items: " + numberOfItems);


        //get item pool based on specialization
        const itemPool: ItemKeyAndRarity[] = [];
        specialization.forEach((spec, index) => {
            //get the items for this spec
            const armorToUse = armor.filter((item) => item.type === spec)
            const weaponsToUse = weapons.filter((item) => item.type === spec)
            const gearToUse = gear.filter((item) => item.type === spec)

            // items.push(...armorToUse)
            const transformedArmor = armorToUse.map((item) => ({
                key: item.key,
                rarity: Number(item.rarity),
                specializationBaseType: "armor"
            }));
        
            const transformedWeapons = weaponsToUse.map((item) => ({
                key: item.key,
                rarity: Number(item.rarity),
                specializationBaseType: "weapons"
            }));
        
            const transformedGear = gearToUse.map((item) => ({
                key: item.key,
                rarity: Number(item.rarity),
                specializationBaseType: "gear"
            }));

            itemPool.push(...transformedArmor, ...transformedWeapons, ...transformedGear);
        })

        console.log("num items in pool: " + itemPool.length)
        // console.log(itemPool);

        //TODO: calculate markup based on shopType


        //generate the item shop
        const shopItemsKeyAndRarity: ItemKeyAndRarity[] = rollForItems(
            itemPool,
            presence,
            negotiation,
            rarityModifier,
            numberOfItems,
            setbackDice,
            boostDice,
            difficultyDice
        );

        // console.log(itemShop);
        const shopArmorItems : ItemArmor[] = [];
        const shopWeaponsItems : ItemWeapon[] = [];
        const shopGearItems : ItemGear[] = [];

        shopItemsKeyAndRarity.forEach(shopItem => {
            const poolItemToUse = itemPool.find((poolItem) => shopItem.key === poolItem.key);

            
            weapons.find((item) => item.key === shopItem.key);
            gear.find((item) => item.key === shopItem.key);

            if(poolItemToUse?.specializationBaseType == "armor") {
                const armorToAdd:ItemArmor = armor.find((item) => item.key === shopItem.key) as ItemArmor;
                shopArmorItems.push(armorToAdd);
            }
            else if(poolItemToUse?.specializationBaseType == "weapons") {
                const weaponToAdd:ItemWeapon = weapons.find((item) => item.key === shopItem.key) as ItemWeapon;
                shopWeaponsItems.push(weaponToAdd);
            }
            else if(poolItemToUse?.specializationBaseType == "gear") {
                const gearToAdd:ItemGear = gear.find((item) => item.key === shopItem.key) as ItemGear;
                shopGearItems.push(gearToAdd);
            }
        });

        setShopArmorItemsToShow(shopArmorItems);
        setShopWeaponsItemsToShow(shopWeaponsItems);
        setShopGearItemsToShow(shopGearItems);
    };

    const onResetShop = () => {
        console.log("Resetting Shop...");

        setSpecialization([]);

        setPresence(0);
        setNegotiation(0);
        setBoostDice(0);
        setSetbackDice(0);
        setDifficultyDice(0);
        setRarityModifier(0);
        setNumberOfItems(5);

        setShopArmorItemsToShow([]);
        setShopWeaponsItemsToShow([]);
        setShopGearItemsToShow([]);
    };


    return (

        <SafeAreaView style={styles.safeArea} >

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={[{ flex: 1}]}>

                <Header title={'SWRPG Shop Generator'}/>

                {
                    shopArmorItemsToShow.length == 0 &&
                    shopWeaponsItemsToShow.length == 0 &&
                    shopGearItemsToShow.length== 0
                    ?
                    <View 
                        style={[
                            {
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                                marginTop: 8,
                            }]
                        }>

                        <ShopTypeButtonRow onSelected={(val: string) => onShopTypeSelected(val)} initialValue={shopType}/>

                        <SpecializationButtonRow onItemSelected={(val: string, selected: boolean) => onSpecializationSelected(val, selected)}/>

                        <PresenceButtonRow onSelected={(val: number) => onPresenceSelected(val)} initialValue={presence}/>
                        <NegotiationButtonRow onSelected={(val: number) => onNegotiationSelected(val)} initialValue={negotiation}/>
                        <BoostDiceButtonRow onSelected={(val: number) => onBoostDiceSelected(val)} initialValue={boostDice}/>
                        <SetbackDiceButtonRow onSelected={(val: number) => onSetbackDiceSelected(val)} initialValue={setbackDice}/>
                        <DifficultyDiceButtonRow onSelected={(val: number) => onDifficultyDiceSelected(val)} initialValue={difficultyDice}/>

                        <RarityModifierButtonRow onSelected={(val: number) => onRarityModifierSelected(val)} initialValue={rarityModifier}/>
                        <ItemNumberButtonRow onSelected={(val: number) => onNumberOfItemsSelected(val)} initialValue={numberOfItems}/>

                    </View>
                    :
                    <View 
                        style={[
                            {
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                                marginTop: 8,
                            }]
                        }>
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
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 4,
                                    marginBottom: 4,
                                    paddingLeft: 8,
                                }}
                            >

                            
                                <Text
                                    style={[
                                        styles.headerText,
                                        {
                                            color: colors.diceTextColor,
                                            backgroundColor: colors.presenceColor,
                                            marginLeft: 8,
                                            marginRight: 8,
                                            borderRadius: 12,
                                            width: 40
                                        },
                                    ]}
                                >
                                    {presence}
                                </Text>

                                <Text
                                    style={[
                                        styles.headerText,
                                        {
                                            color: colors.diceTextColor,
                                            backgroundColor: colors.negotiationColor,
                                            marginLeft: 8,
                                            marginRight: 8,
                                            borderRadius: 12,
                                            width: 40
                                        },
                                    ]}
                                >
                                    {negotiation}
                                </Text>

                                <Text
                                    style={[
                                        styles.headerText,
                                        {
                                            color: colors.diceTextColor,
                                            backgroundColor: colors.boostDiceColor,
                                            marginLeft: 8,
                                            marginRight: 8,
                                            borderRadius: 12,
                                            width: 40
                                        },
                                    ]}
                                >
                                    {boostDice}
                                </Text>

                                <Text
                                    style={[
                                        styles.headerText,
                                        {
                                            color: colors.diceTextColor,
                                            backgroundColor: colors.setbackDiceColor,
                                            marginLeft: 8,
                                            marginRight: 8,
                                            borderRadius: 12,
                                            width: 40
                                        },
                                    ]}
                                >
                                    {setbackDice}
                                </Text>

                                <Text
                                    style={[
                                        styles.headerText,
                                        {
                                            color: colors.diceTextColor,
                                            backgroundColor: colors.difficultyDiceColor,
                                            marginLeft: 8,
                                            marginRight: 8,
                                            borderRadius: 12,
                                            width: 40
                                        },
                                    ]}
                                >
                                    {difficultyDice}
                                </Text>
                            </View>

                        </View>

                        

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
                            <Text
                                style={[
                                    styles.headerText,
                                    {
                                        color: colors.textColor,
                                    },
                                ]}
                            >
                                Raritry Modifier: {rarityModifier}  -  Num Items: {numberOfItems}
                            </Text>
                        </View>

                        {shopArmorItemsToShow.map((item) => (
                            <ItemArmorRow key={`armor-${item.key}`} itemArmorToShow={item} />
                        ))}
                        {shopWeaponsItemsToShow.map((item) => (
                            <ItemWeaponRow key={`weapon-${item.key}`} itemWeaponToShow={item} />
                        ))}
                        {shopGearItemsToShow.map((item) => (
                            <ItemGearRow key={`gear-${item.key}`} itemGearToShow={item} />
                        ))}

                    </View>

                }

                <GenerateShopButtonRow onSelected={() => onGenerateShop()} onResetSelected={() => onResetShop()}/>

            </ScrollView>
            
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
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
    headerText: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 4,
    },
});
