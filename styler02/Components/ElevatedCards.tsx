import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.elevatedCard, styles.card]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.elevatedCard, styles.card]}>
            <Text>me</Text>
        </View>
        <View style={[styles.elevatedCard, styles.card]}>
            <Text>to</Text>
        </View>
        <View style={[styles.elevatedCard, styles.card]}>
            <Text>scroll</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {

        fontSize: 24,
        fontWeight: 'bold',
        margin: 8,
    },

    container: {
        margin: 8,
    },

    elevatedCard: {
        height: 100,
        width: 100,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        borderRadius: 16,
    },
    
    card: {},
})