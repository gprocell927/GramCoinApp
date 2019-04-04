import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
    render () {
        return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('PriceHistory')}>
                    <Text> Price History </Text>
                    </TouchableOpacity>
          </View>

        )
    }
}

