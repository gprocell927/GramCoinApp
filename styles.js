import { StyleSheet } from 'react-native';

const Styles =  StyleSheet.create({
    CurrencyButton: {
        width: 200,
        height: 75,
    },
    CurrencyContainer: {
        alignItems: 'center',
        paddingTop: 25,
        textAlign: 'center'
    },
    HistoryButton: {
        marginVertical: 25,
        borderWidth: 2,
        borderRadius: 25,
    },
    HistoryButtonText: {
        padding: 20,
        fontWeight: 'bold',
    },
    MainContainer: {
         flex: 1,
         alignItems: "center",
    },
    TitleText: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 25,
    }
})

export default Styles;