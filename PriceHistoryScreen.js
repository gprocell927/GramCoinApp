import React from 'react';
import moment from 'moment';
import { FlatList, ScrollView, Text, View } from 'react-native';
import Styles from './styles';

export default class PriceHistoryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title,
        };
    };

    renderListItemStyle = (item) => {
        const { navigation } = this.props;
        const { state } = navigation
        const highestItem = state.params.highestPrice
        const lowestItem = state.params.lowestPrice

        if(item.close === highestItem.close) {
            return [Styles.PriceListing, Styles.HighestItem];
        } else if (item.close === lowestItem.close) {
            return [Styles.PriceListing, Styles.LowestItem];
        } else {
            return Styles.PriceListing;
        }
    }

    renderPrice = ({item}) => {
        return (
            <View style={this.renderListItemStyle(item)}>
                <Text>Time: {moment(item.period).format("HH:mm")}</Text>
                <Text>Price: {item.close} BTC</Text>
            </View>

        )

    }

    

    render() {
        const { navigation } = this.props;
        const { state } = navigation
        return (
        <View>
            <Text style={Styles.TitleText}>Price History</Text>
            <ScrollView style={Styles.HistoryContainer}>
                <FlatList
                    data={state.params.priceHistory}
                    renderItem={this.renderPrice}
                /> 
            </ScrollView>
            <View>
                <View style={Styles.PriceLegend}>
                    <Text>Highest Price: </Text>
                    <View style={Styles.HighIndicator} />
                </View>
                <View style={Styles.PriceLegend}>
                    <Text>Lowest Price: </Text>
                    <View style={Styles.LowIndicator} />
                </View>    
            </View>
        </View>

        )
    }
}