import React from 'react';
import axios from 'axios';
import { ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: null,
            isLoading: true,
        }
    }

    getCurrencies(){
        return fetch('https://api.coincap.io/v2/assets?ids=monero,bitcoin,dogecoin,litecoin')
            .then((res) => res.json())
            .then((resJson) => {                
                console.log({resJson})
                this.setState({
                    currencies: resJson.data,
                    isLoading: false
                }, () => console.log('CURRENCY SET IN STATE', this.state.currencies));
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
    
    renderCurrency = ({item}) => (
            <View>
                <Text>Currency: {item.name}</Text>
                <Text>Current Price: {item.priceUsd}</Text>
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
                <TouchableOpacity onPress={() => this.getCurrencies()}>
                            <Text>Get currencies</Text>
                    </TouchableOpacity>
                {this.state.currencies && (
                    <FlatList
                        data={this.state.currencies}
                        renderItem={this.renderCurrency} 
                        extraData={this.state}
                        />
                )}
                {!this.state.currencies && (
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

