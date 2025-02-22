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
import attachments from '../data/item_attachments.json';
import droids from '../data/droids.json';
import {ItemKeyAndRarity, ItemArmor, ItemWeapon, ItemGear, ItemAttachment, rollForItems, ItemDroid} from '../utils/diceroller'
import { useState, useEffect, useRef  } from 'react';
import { BackHandler, Alert } from 'react-native';
import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/constants/GlobalStyles';
import { ThemedText } from '@/components/ThemedText';
import ItemArmorRow from './Components/ItemArmorRow/ItemArmorRow';
import ItemWeaponRow from './Components/ItemWeaponRow/ItemWeaponRow';
import ItemGearRow from './Components/ItemGearRow/ItemGearRow';
import ItemAttachmentRow from './Components/ItemAttachmentRow/ItemAttachmentRow';
import ItemDroidRow from './Components/ItemDroidRow/ItemDroidRow';

export default function HomeScreen() {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];
    const styles = GlobalStyles['phone']

    const scrollViewRef = useRef<ScrollView>(null);

    const[shopType, setShopType] = useState<string>("On The Level");
    const onShopTypeSelected = (val: string) => {
        setShopType(val);
        setIsShopReset(false);
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
        setIsShopReset(false);
    };

    const[presence, setPresence] = useState<number>(0);
    const onPresenceSelected = (val: number) => {
        setPresence(val);
        if(isShopReset != false) {
            setIsShopReset(false);
        }
    };

    const[negotiation, setNegotiation] = useState<number>(0);
    const onNegotiationSelected = (val: number) => {
        setNegotiation(val);
        if(isShopReset != false) {
            setIsShopReset(false);
        }
    };

    const[boostDice, setBoostDice] = useState<number>(0);
    const onBoostDiceSelected = (val: number) => {
        setBoostDice(val);
        if(isShopReset != false) {
            setIsShopReset(false);
        }
    };

    const[setbackDice, setSetbackDice] = useState<number>(0);
    const onSetbackDiceSelected = (val: number) => {
        setSetbackDice(val);
        if(isShopReset != false) {
            setIsShopReset(false);
        }
    };

    const[difficultyDice, setDifficultyDice] = useState<number>(0);
    const onDifficultyDiceSelected = (val: number) => {
        setDifficultyDice(val);
        if(isShopReset != false) {
            setIsShopReset(false);
        }
    };

    const[rarityModifier, setRarityModifier] = useState<number>(0);
    const onRarityModifierSelected = (val: number) => {
        setRarityModifier(val);
        if(isShopReset != false) {
            setIsShopReset(false);
        }
    };

    const[numberOfItems, setNumberOfItems] = useState<number>(5);
    const onNumberOfItemsSelected = (val: number) => {
        setNumberOfItems(val);
        if(isShopReset != false) {
            setIsShopReset(false);
        }
    };

    const[shopArmorItemsToShow, setShopArmorItemsToShow] = useState<ItemArmor[]>([]);

    const[shopWeaponsItemsToShow, setShopWeaponsItemsToShow] = useState<ItemWeapon[]>([]);

    const[shopGearItemsToShow, setShopGearItemsToShow] = useState<ItemGear[]>([]);

    const[shopAttachmentsItemsToShow, setShopAttachmentsItemsToShow] = useState<ItemAttachment[]>([]);

    const[shopDroidsItemsToShow, setShopDroidsItemsToShow] = useState<ItemDroid[]>([]);

    const[isShopReset, setIsShopReset] = useState<boolean>(false);

    useEffect(() => {
        const backAction = () => {

            console.log("backAction()");
            if(isShopReset == false) {
                //reset the shop
                onResetShop();
                //prevent default back behavior (thus staying in the app)
                return true; 
            } else {
                //allow default back behavior (thus exiting the app) since app was already reset
                console.log("Exiting app");
                return false; 
            }
        };

        // Add back button listener
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        // Cleanup the listener when the component unmounts
        return () => backHandler.remove();
    }, [isShopReset]);
    

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
            const attachmentsToUse = attachments.filter((item) => item.type === spec)
            const droidsToUse = droids.filter((item) => item.type === spec)

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

            const transformedAttachments = attachmentsToUse.map((item) => ({
                key: item.key,
                rarity: Number(item.rarity),
                specializationBaseType: "attachments"
            }));

            const transformedDroids = droidsToUse.map((item) => ({
                key: item.key,
                rarity: Number(item.rarity),
                specializationBaseType: "droids"
            }));

            itemPool.push(...transformedArmor, ...transformedWeapons, ...transformedGear, ...transformedAttachments, ...transformedDroids);
        })

        console.log("num items in pool: " + itemPool.length)
        // console.log(itemPool);

        if(itemPool.length < 1)
        {
            Alert.alert(
                "Empty Item Pool",
                "Please select some Shop Specializations",
                [{ text: "OK", onPress: () => console.log("Alert closed") }]
            );
        }

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
        const shopAttachmentsItems : ItemAttachment[] = [];
        const shopDroidsItems : ItemDroid[] = [];

        shopItemsKeyAndRarity.forEach(shopItem => {
            const poolItemToUse = itemPool.find((poolItem) => shopItem.key === poolItem.key);

            
            // armor.find((item) => item.key === shopItem.key);
            // weapons.find((item) => item.key === shopItem.key);
            // gear.find((item) => item.key === shopItem.key);

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
            else if(poolItemToUse?.specializationBaseType == "attachments") {
                const attachmentsToAdd:ItemAttachment = attachments.find((item) => item.key === shopItem.key) as ItemAttachment;
                shopAttachmentsItems.push(attachmentsToAdd);
            }
            else if(poolItemToUse?.specializationBaseType == "droids") {
                const droidToAdd:ItemDroid = droids.find((item) => item.key === shopItem.key) as ItemDroid;
                shopDroidsItems.push(droidToAdd);
            }
        });

        setShopArmorItemsToShow(shopArmorItems);
        setShopWeaponsItemsToShow(shopWeaponsItems);
        setShopGearItemsToShow(shopGearItems);
        setShopAttachmentsItemsToShow(shopAttachmentsItems);
        setShopDroidsItemsToShow(shopDroidsItems);

        setTimeout(() => {
            scrollViewRef.current?.scrollTo({ y: 0, animated: false });
        }, 0);
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
        setShopAttachmentsItemsToShow([]);
        setShopDroidsItemsToShow([]);

        setIsShopReset(true);
    };


    return (

        <SafeAreaView style={localStyles.safeArea} >

            <ScrollView
                ref={scrollViewRef}
                contentInsetAdjustmentBehavior="automatic"
                style={[{ flex: 1, backgroundColor: colors.backgroundColor}]}>

                <Header title={'SWRPG Shop Generator'}/>

                {
                    shopArmorItemsToShow.length == 0 &&
                    shopWeaponsItemsToShow.length == 0 &&
                    shopGearItemsToShow.length == 0 &&
                    shopAttachmentsItemsToShow.length == 0 &&
                    shopDroidsItemsToShow.length == 0
                    ?
                    <View 
                        style={[
                            {
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                                marginTop: 8,
                                backgroundColor: colors.backgroundColor
                            }]
                        }>

                        <ShopTypeButtonRow onSelected={(val: string) => onShopTypeSelected(val)} initialValue={shopType}/>

                        <SpecializationButtonRow onItemSelected={(val: string, selected: boolean) => onSpecializationSelected(val, selected)} isReset={isShopReset}/>

                        <PresenceButtonRow onSelected={(val: number) => onPresenceSelected(val)} initialValue={presence} currentShopType={shopType}/>
                        <NegotiationButtonRow onSelected={(val: number) => onNegotiationSelected(val)} initialValue={negotiation} currentShopType={shopType}/>
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
                                Rarity Modifier: {rarityModifier}  -  Num Items: {numberOfItems}
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
                        {shopAttachmentsItemsToShow.map((item) => (
                            <ItemAttachmentRow key={`attachment-${item.key}`} itemAttachmentToShow={item} />
                        ))}
                        {shopDroidsItemsToShow.map((item) => (
                            <ItemDroidRow key={`droid-${item.key}`} itemDroidToShow={item} />
                        ))}

                    </View>

                }

                <GenerateShopButtonRow onSelected={() => onGenerateShop()} onResetSelected={() => onResetShop()}/>

            </ScrollView>
            
        </SafeAreaView>

    );
}

const localStyles = StyleSheet.create({
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

});
