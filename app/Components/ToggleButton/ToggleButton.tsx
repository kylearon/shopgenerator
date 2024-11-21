import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export interface ToggleButtonProps {
    title: string;
    isToggled: boolean; // Controlled by parent
    onToggle: () => void;
    width: number;
    style?: any; // Optional custom button styles
    toggledStyle?: any; // Optional custom button styles
    textStyle?: any; // Optional custom text styles
    disabled?: boolean;
}

export default function ToggleButton({
    title,
    isToggled,
    onToggle,
    width,
    style = {}, // Default to empty object if no styles are passed
    toggledStyle = {},
    textStyle = {}, // Default to empty object for text styles
    disabled = false,
}: ToggleButtonProps): JSX.Element {
    return (
        <TouchableOpacity
            style={[
                styles.button, // Base button styles
                { width }, // Respect the width prop
                isToggled && styles.toggled, // Apply toggled styles dynamically
                disabled && styles.disabled, // Apply disabled styles if applicable
                style, // Allow overriding styles if passed
                isToggled && toggledStyle, // Allow overriding toggled styles if passed
            ]}
            onPress={onToggle}
            disabled={disabled}
        >
            <Text
                style={[
                    styles.defaultText, // Base text styles
                    isToggled && styles.toggledText, // Apply toggled text styles dynamically
                    textStyle, // Allow overriding text styles if passed
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000000', // Default black border
        backgroundColor: '#FFFFFF', // Default white background
    },
    toggled: {
        backgroundColor: '#4CAF50', // Green background when toggled
        borderColor: '#388E3C', // Darker green border
    },
    disabled: {
        opacity: 0.5, // Visual indicator for disabled state
    },
    defaultText: {
        color: '#000000', // Black text for default state
        fontSize: 16,
    },
    toggledText: {
        color: '#FFFFFF', // White text for toggled state
    },
});
