import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class PriceHistoryScreen extends React.Component {
    componentDidMount () {
        console.log(this.props.navigation);
        
    }
    render() {
        return (
        <View>
            <Text>PriceHistoryScreen</Text>
        </View>

        )
    }
}