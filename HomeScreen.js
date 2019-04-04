import React from 'react';
import moment from 'moment';
import { ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';


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
                this.setState({ currency: resJson.data, isLoading: false}, () => console.log(this.state.currency, this.state.isLoading))
            })
        .catch ((error) => {
            console.log({error});
        })
    }

    getPriceHistory = () => {
        const currentTime = moment(new Date()).valueOf();
        console.log({ currentTime });
        const halfHourAgo = moment(new Date()).subtract(30, 'minutes').valueOf();
        console.log({ halfHourAgo })
        return fetch(`https://api.coincap.io/v2/candles?exchange=kraken&interval=m1&baseId=${this.state.currency[0].baseId}&quoteId=bitcoin&end=${currentTime}&start=${halfHourAgo}`)
            .then((res) => res.json())
            .then((resJson) => {
                console.log({resJson})
                const priceHistory = resJson.data;
                this.props.navigation.navigate('PriceHistory', {priceHistory})
            })
            .catch((error) => console.log(error))
    }
    
    renderCurrency = () => (
            <View>
                <Text>Currency: {this.state.currency[0].baseId}</Text>
                <Text>Current Price(BTC): {this.state.currency[0].priceQuote}</Text>
            </View>
        )

    render() {
   
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {this.state.loading && (
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <ActivityIndicator />
                    </View>
            )}
                {!this.state.loading && (
                <React.Fragment>
                <Text>Home Screen</Text>
                <TouchableOpacity onPress={() => this.getCurrency('litecoin')}>
                            <Text>LiteCoin</Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={() => this.getCurrency('dogecoin')}>
                            <Text>DogeCoin</Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={() => this.getCurrency('monero')}>
                            <Text>Monero</Text>
                    </TouchableOpacity>
                    
         {this.state.currency && (
             <React.Fragment>
            {this.renderCurrency()}
                        <TouchableOpacity onPress={() => this.getPriceHistory()}>
                            <Text> Price History for {this.state.currency[0].baseId}</Text>
                        </TouchableOpacity>
        </React.Fragment>

         )}

                </React.Fragment>
            )}
            </View>

        )
    }
}

