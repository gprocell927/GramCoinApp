import React from 'react';
import moment from 'moment';
import { capitalize, sortBy, last } from 'lodash';
import { ActivityIndicator, Image, View, Text, TouchableOpacity } from 'react-native';
import Styles from './styles'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: null,
            isLoading: true,
        }
    }

    getCurrency = (coin) => {
        return fetch(`https://api.coincap.io/v2/markets?baseId=${coin}&quoteSymbol=BTC&exchangeId=kraken`)
            .then((res) => res.json())
            .then((resJson) => {                            
                this.setState(() => ({ currency: resJson.data, isLoading: false}))
            })
        .catch ((error) => {
            console.log({error});
        })
    }

    getPriceHistory = () => {
        const currentTime = moment(new Date()).valueOf();
        const halfHourAgo = moment(new Date()).subtract(30, 'minutes').valueOf();
        const { currency } = this.state;
        return fetch(`https://api.coincap.io/v2/candles?exchange=kraken&interval=m1&baseId=${this.state.currency[0].baseId}&quoteId=bitcoin&end=${currentTime}&start=${halfHourAgo}`)
            .then((res) => res.json())
            .then((resJson) => {
                const priceHistory = resJson.data;
                const itemsSortedByPrice = sortBy(priceHistory, ['close'])
                const highestPrice = last(itemsSortedByPrice)
                const lowestPrice = itemsSortedByPrice[0]
                const title = capitalize(currency[0].baseId);

                this.props.navigation.navigate('PriceHistory', {priceHistory, highestPrice, lowestPrice, title})
            })
            .catch((error) => console.log(error))
    }
    
    renderCurrency = () => (
            <React.Fragment>
                <Text>Currency: {capitalize(this.state.currency[0].baseId)}</Text>
                <Text>Current Price(BTC): {this.state.currency[0].priceQuote}</Text>
            </React.Fragment>
        )

    render() {
        const { currency, loading } = this.state;
        return (
            <View style={Styles.MainContainer}>
            {loading && (
                    <View style={Styles.MainContainer}>
                        <ActivityIndicator />
                    </View>
            )}
                {!loading && (
                <React.Fragment>
                <Text style={Styles.TitleText}>GramCoin</Text>
                <Text>Select a currency to view it's current price.</Text>
                <TouchableOpacity onPress={() => this.getCurrency('litecoin')}>
                    <Image
                        source={require('./assets/litecoin.png')}
                        resizeMode={"contain"}
                        style={Styles.CurrencyButton}
                    />
                </TouchableOpacity>
                < TouchableOpacity 
                    onPress = {() => this.getCurrency('dogecoin')}
                >
                    <Image
                        source = {require('./assets/dogecoin.png')}
                        resizeMode={"contain"}
                        style = {Styles.CurrencyButton}
                    />
                </TouchableOpacity>
                < TouchableOpacity onPress = {() => this.getCurrency('monero')} >
                    <Image 
                        source={require('./assets/monero.png')}
                        resizeMode={"contain"}
                        style={Styles.CurrencyButton}
                    />
                </TouchableOpacity>
                    
         {currency && (
             <View style={Styles.CurrencyContainer}>
                {this.renderCurrency()}
                <TouchableOpacity style={Styles.HistoryButton} onPress={() => this.getPriceHistory()}>
                    <Text style={Styles.HistoryButtonText}> Price History for {capitalize(currency[0].baseId)}</Text>
                </TouchableOpacity>
            </View>

         )}
                </React.Fragment>
            )}
            </View>

        )
    }
}

