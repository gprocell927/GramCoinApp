import React from 'react';
import axios from 'axios';
import { ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: null,
            isLoading: true,
        }
    }

    getCurrency = (coin) => {
        // return fetch('https://api.coincap.io/v2/assets?ids=monero,bitcoin,dogecoin,litecoin')
        return fetch(`https://api.coincap.io/v2/markets?baseId=${coin}&quoteSymbol=BTC&exchangeId=kraken`)
            .then((res) => res.json())
            .then((resJson) => {                
                console.log({resJson})
            
                this.setState({ currency: resJson.data, isLoading: false}, () => console.log(this.state.currency, this.state.isLoading))
            })
        .catch ((error) => {
            console.log({error});
        })
    }

        // axios.get(`https://api.coincap.io/v2/assets?ids=monero,bitcoin,dogecoin,litecoin`)
        // .then(res => {
        //     const currencies = res.data;
        //     this.setState({ currencies })
        //     .catch(err => console.tron.log({err}))
        // })
    
    renderCurrency = () => (
            <View>
                <Text>Currency: {this.state.currency[0].baseId}</Text>
                <Text>Current Price(BTC): {this.state.currency[0].priceQuote}</Text>
            </View>
        )

    render() {
        // if(this.state.isLoading){

        //     return (
        //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        //         <ActivityIndicator/>
        //       </View>
    
        //     )
        // }
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
             <FlatList
                 data={this.state.currency}
                 renderItem={this.renderCurrency} 
                 extraData={this.state}
                 />
         )}
         {!this.state.currency && (
                     <View><Text>NO RESULTS</Text></View>
         )}

                <TouchableOpacity onPress={() => this.props.navigation.navigate('PriceHistory')}>
                    <Text> Price History </Text>
                </TouchableOpacity>

                </React.Fragment>
            )}
            </View>

        )
    }
}

