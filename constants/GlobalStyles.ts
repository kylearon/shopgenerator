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

        headerText: {
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            padding: 4,
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
            fontSize: 12,
            fontWeight: 'bold',
            padding: 0,
            marginLeft: 2,
            marginRight: 2,
            borderRadius: 4,
            width: 40,
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

        statTextContainer: {
            flexDirection: 'column',
            borderWidth: 1,
            borderColor: '#cccccc',
            margin: 2

        },

        itemRowTypeText: {
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 'bold',
            padding: 4,
            color: '#ccc'
        },

        itemRowNameText: {
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            padding: 4,
        },

        itemRowDetailsText: {
            textAlign: 'left',
            fontSize: 12,
            fontWeight: 'normal',
            fontStyle: 'italic',
            padding: 4,
            marginLeft: 4,
            marginRight: 4
        },

        itemRowDescriptionText: {
            textAlign: 'left',
            fontSize: 11,
            fontWeight: 'bold',
            padding: 4,
            marginLeft:4,
            marginRight:4,
        },

        itemRowMoreBarText: {
            textAlign: 'center',
            fontSize: 8,
            fontWeight: 'bold',
            padding: 0,
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
