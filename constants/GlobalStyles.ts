import { StyleSheet } from 'react-native';

export const GlobalStyles = {
    phone: StyleSheet.create({

        centeredContainerWrap: {
            flex: 0,
            justifyContent: 'center', // Center content along flexDirection
            alignItems: 'center',     // Center content on cross axis
        },
        centeredContainerFill: {
            flex: 1,
            justifyContent: 'center', // Center content along flexDirection
            alignItems: 'center',     // center content on cross axis
        },
    
        leftContainerFill: {
            flex: 1,
            justifyContent: 'flex-start', // left items along flexDirection
            alignItems: 'center',     // center content on cross axis
        },
        leftContainerWrap: {
            flex: 0,
            justifyContent: 'center', // center items along flexDirection
            alignItems: 'flex-start',     // left content on cross axis
        },
        rightContainerFill: {
            flex: 1,
            justifyContent: 'center', // Center content along flexDirection
            alignItems: 'flex-end',   // right content on cross axis
        },
        rightContainerWrap: {
            flex: 0,
            justifyContent: 'center', // Center content along flexDirection
            alignItems: 'flex-end',   // right content on cross axis
        },

        rowRounded: {
            marginLeft: 4,
            marginRight: 4,
            borderRadius: 12,
        },
        rowHeaderText: {
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            padding: 4,
        },

        rowTitleContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start', // left items along flexDirection
            alignItems: 'center',     // center content on cross axis
            marginLeft: 8
        },
        rowContentContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start', // left items along flexDirection
            alignItems: 'center',     // center content on cross axis
            marginLeft: 8
        },
        
        statText: {
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            padding: 2,
            marginLeft: 4,
            marginRight: 4,
            borderRadius: 4,
            borderWidth: 1,
            width: 64,
            borderColor: '#cccccc'
        },
        statTextNoWidth: {
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            padding: 2,
            paddingLeft: 6,
            paddingRight: 6,
            marginLeft: 4,
            marginRight: 4,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#b35000'
        },
        statTextNoBorder: {
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 'bold',
            padding: 4,
            marginLeft: 8,
            marginRight: 8,
            borderColor: '#cccccc'
        },

        buttonStyle: {
            padding: 6,
            borderRadius: 8,
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 4,
            fontSize: 12,
        },
        buttonToggledStyle: {
            padding: 6,
            borderRadius: 8,
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 4,
            fontSize: 12,
        }
    }),
    
};
