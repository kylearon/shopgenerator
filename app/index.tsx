import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, StatusBar } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import HomePageButtonRow from './Components/HomePageButtonRow/HomePageButtonRow';
import Header from './Components/Header/Header';
import ShopTypeButtonRow from './Components/ShopTypeButtonRow/ShopTypeButtonRow';
import SpecializationButtonRow from './Components/SpecializationButtonRow/SpecializationButtonRow';
import PresenceButtonRow from './Components/PresenceButtonRow/PresenceButtonRow';
import NegotiationButtonRow from './Components/NegotiationButtonRow/NegotiationButtonRow';
import RarityModifierButtonRow from './Components/RarityModifierButtonRow/RarityModifierButtonRow';
import GenerateShopButtonRow from './Components/GenerateShopButtonRow/GenerateShopButtonRow';
import ItemNumberButtonRow from './Components/ItemNumberButtonRow/ItemNumberButtonRow';

export default function HomeScreen() {
  return (

    <SafeAreaView style={styles.safeArea} >

        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={[{ flex: 1}]}>

            <Header title={'SWRPG Shop Generator'}/>

            {/* <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Explore zzz sdsadsad</ThemedText>
            </ThemedView> */}

            {/* <HomePageButtonRow title='sdasdsa' iconName='' subText='asdsadsadsadsad dsadasdsa' /> */}
            <ShopTypeButtonRow />
            <SpecializationButtonRow/>
            <PresenceButtonRow/>
            <NegotiationButtonRow/>
            <RarityModifierButtonRow/>
            <ItemNumberButtonRow/>
            <GenerateShopButtonRow/>

        </ScrollView>
        
    </SafeAreaView>

    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it sadsadsaxxxxxx</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
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
