import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

export default function FlatCard() {
    return (
        <View>
            <Text style={styles.heading} >Flat card</Text>
            <View style={styles.cardContainer}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue</Text>
                </View>

                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View><View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View><View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8,
    },

    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },

    card: {
        flex: 1,
        height: 100,
        width: 100,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardOne: {
        backgroundColor: 'red',
    },

    cardTwo: {
        backgroundColor: 'green',
    },

    cardThree: {
        backgroundColor: 'blue',
    },
})