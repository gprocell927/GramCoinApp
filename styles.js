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
    HighIndicator: {
        backgroundColor: '#009933',
        height: 10,
        width: 10,
    },
    HighestItem: {
        borderColor: '#009933',
        borderWidth: 2
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
    HistoryContainer: {
        height: 200, width: '100%',
    },
    LowIndicator: {
        backgroundColor: '#99001a',
        height: 10,
        width: 10,
    },
    LowestItem: {
        borderColor: '#99001a',
        borderWidth: 2,
    },
    MainContainer: {
         flex: 1,
         alignItems: "center",
    },
    PriceLegend: { flexDirection: 'row', justifyContent: 'space-around' },
    PriceListing: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 15,
        flexWrap: 'wrap'
    },  
    TitleText: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 25,
        textAlign: 'center',
    }
})

export default Styles;