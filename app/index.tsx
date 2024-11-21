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

    const[presence, setPresence] = useState<number>(1);
    const onPresenceSelected = (val: number) => {
        setPresence(val);
    };

    const[negotiation, setNegotiation] = useState<number>(1);
    const onNegotiationSelected = (val: number) => {
        setNegotiation(val);
    };

    const[boostDice, setBoostDice] = useState<number>(1);
    const onBoostDiceSelected = (val: number) => {
        setBoostDice(val);
    };

    const[setbackDice, setSetbackDice] = useState<number>(1);
    const onSetbackDiceSelected = (val: number) => {
        setSetbackDice(val);
    };

    const[difficultyDice, setDifficultyDice] = useState<number>(1);
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

                <ShopTypeButtonRow onSelected={(val: string) => onShopTypeSelected(val)} initialValue={shopType}/>

                <SpecializationButtonRow onItemSelected={(val: string, selected: boolean) => onSpecializationSelected(val, selected)}/>

                <PresenceButtonRow onSelected={(val: number) => onPresenceSelected(val)} initialValue={presence}/>
                <NegotiationButtonRow onSelected={(val: number) => onNegotiationSelected(val)} initialValue={negotiation}/>
                <BoostDiceButtonRow onSelected={(val: number) => onBoostDiceSelected(val)} initialValue={boostDice}/>
                <SetbackDiceButtonRow onSelected={(val: number) => onSetbackDiceSelected(val)} initialValue={setbackDice}/>
                <DifficultyDiceButtonRow onSelected={(val: number) => onDifficultyDiceSelected(val)} initialValue={difficultyDice}/>

                <RarityModifierButtonRow onSelected={(val: number) => onRarityModifierSelected(val)} initialValue={rarityModifier}/>
                <ItemNumberButtonRow onSelected={(val: number) => onNumberOfItemsSelected(val)} initialValue={numberOfItems}/>
        
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
