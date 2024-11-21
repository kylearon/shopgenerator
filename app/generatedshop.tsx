import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, StatusBar, View, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Header from './Components/Header/Header';
import StyledButton2 from './Components/StyledButton/StyledButton2';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function GeneratedShopScreen() {

    const isDarkMode = useColorScheme() === 'dark';
    const colors =  isDarkMode ? Colors['dark'] : Colors['light'];
    
    const router = useRouter();


    const handleGoBack = async () => {
        console.log("handleGoBack()")
        router.push('/'); // Navigate to the 'index' page
    }


    return (

    <SafeAreaView style={styles.safeArea} >

        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={[{ flex: 1}]}>

            <Header title={'SWRPG Shop Generator'}/>

            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Generated Shop</ThemedText>
            </ThemedView>

            <View style={[
                styles.centeredContainerFill,
                {
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    marginLeft: 12,
                    marginRight: 8,
                }
                ]}>

                    <StyledButton2 title={"Go Back"} onPress={handleGoBack} width={160} style={[{backgroundColor: colors.backgroundColorRow}, styles.buttonStyle]} textStyle={{color: '#ffffff', fontSize: 16}} />
            </View>

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
    centeredContainerFill: {
        flex: 1,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',     // center content horizontally
    },

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
    buttonStyle: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#00ff00",
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
    },
});
