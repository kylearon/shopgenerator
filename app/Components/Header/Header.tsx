import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Image, Platform, SafeAreaView } from 'react-native';

export interface HeaderProps {
    title: string
}

export default function Header({title} : HeaderProps): JSX.Element {


    return (
        <SafeAreaView style={styles.safeArea}>

            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">{title}</ThemedText>
            </ThemedView>
        
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    headerImage: {
      color: '#808080',
      bottom: -90,
      left: -35,
      position: 'absolute',
    },
    safeArea: {
        flex: 0,
        backgroundColor: "#444444",
        // paddingTop: Platform.OS === 'android' ? 25 : 0, // Additional padding for Android
        borderWidth: 1,
        // borderColor: 'red', // Add a border to visualize the safe area
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 8,
    },
  });