import React from 'react';
import moment from 'moment';
import { ActivityIndicator, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class PriceHistoryScreen extends React.Component {
  
    renderPrice = ({item}) => {
        const highestItem = this.props.navigation.state.params.highestPrice
        const lowestItem = this.props.navigation.state.params.lowestPrice
        return (
        <View>
            {item.close === highestItem.close && <Text>Highest!</Text>}
            {item.close === lowestItem.close && <Text>Lowest!</Text>}
            <Text>{moment(item.period).format("HH:mm")}</Text>
            <Text>Price: {item.close} BTC</Text>
        </View>

        )

    }

    

    render() {
        return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text>PriceHistoryScreen</Text>
            {/* {!this.state.loading && ( */}
                <FlatList
                    data={this.props.navigation.state.params.priceHistory}
                    renderItem={this.renderPrice}
                />

            {/* )} */}
                {/* {this.state.loading && (
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <ActivityIndicator />
                    </View>
                )}  */}
        </View>

        )
    }
}