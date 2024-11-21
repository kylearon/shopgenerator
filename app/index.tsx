import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, StatusBar } from 'react-native';

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
import { useState } from 'react';

export default function HomeScreen() {

    const[shopType, setShopType] = useState<string | null>(null);
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

    const[presence, setPresence] = useState<string | null>(null);
    const onPresenceSelected = (val: string) => {
        setPresence(val);
    };

    const[negotiation, setNegotiation] = useState<string | null>(null);
    const onNegotiationSelected = (val: string) => {
        setNegotiation(val);
    };

    const[rarityModifier, setRarityModifier] = useState<string | null>(null);
    const onRarityModifierSelected = (val: string) => {
        setRarityModifier(val);
    };

    const[boostDice, setBoostDice] = useState<string | null>(null);
    const onBoostDiceSelected = (val: string) => {
        setBoostDice(val);
    };

    const[setbackDice, setSetbackDice] = useState<string | null>(null);
    const onSetbackDiceSelected = (val: string) => {
        setSetbackDice(val);
    };

    const[difficultyDice, setDifficultyDice] = useState<string | null>(null);
    const onDifficultyDiceSelected = (val: string) => {
        setDifficultyDice(val);
    };

    const[numberOfItems, setNumberOfItems] = useState<string | null>(null);
    const onNumberOfItemsSelected = (val: string) => {
        setNumberOfItems(val);
    };

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
    };

    return (

        <SafeAreaView style={styles.safeArea} >

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={[{ flex: 1}]}>

                <Header title={'SWRPG Shop Generator'}/>

                <ShopTypeButtonRow onSelected={(val: string) => onShopTypeSelected(val)}/>

                <SpecializationButtonRow onItemSelected={(val: string, selected: boolean) => onSpecializationSelected(val, selected)}/>

                <PresenceButtonRow onSelected={(val: string) => onPresenceSelected(val)}/>
                <NegotiationButtonRow onSelected={(val: string) => onNegotiationSelected(val)}/>
                <BoostDiceButtonRow onSelected={(val: string) => onBoostDiceSelected(val)}/>
                <SetbackDiceButtonRow onSelected={(val: string) => onSetbackDiceSelected(val)}/>
                <DifficultyDiceButtonRow onSelected={(val: string) => onDifficultyDiceSelected(val)}/>

                <RarityModifierButtonRow onSelected={(val: string) => onRarityModifierSelected(val)}/>
                <ItemNumberButtonRow onSelected={(val: string) => onNumberOfItemsSelected(val)}/>
        
                <GenerateShopButtonRow onSelected={() => onGenerateShop()}/>

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
});
