import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.heading}>Trending Place</Text>
      <View style={styles.card}>
      <Image 
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Victoria_Memorial_Illuminated_at_Night.jpg/560px-Victoria_Memorial_Illuminated_at_Night.jpg',
        }}
        style={styles.cardImage}
      />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Victoria Memorial</Text>
            <Text style={styles.cardLabel}>West Bengal, Kolkata</Text>
            <Text style={styles.cardDescription}>The Victoria Memorial is a large marble monument dedicated to Queen Victoria, the Empress of India (1876-1901) facing the Queens Way on the Maidan in Central Kolkata. It was built between 1906 and 1921 by the British Raj. It is the largest monument to a monarch anywhere in the world. It stands at 64 acres of gardens and is now a museum under the control of the Ministry of Culture, Government of India. Possessing prominent features of the Indo-Saracenic architecture, it has evolved into one of the most popular attractions in the city.</Text>
            <Text style={styles.cardFooter}>40 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        margin: 8,
        fontWeight: 'bold',
    },

    card: {

    },

    cardImage: {
      height: 200,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
    },

    cardBody: {
      backgroundColor: '#EAF0F1',
      padding: 10,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      marginBottom: 10,
    },

    cardTitle: {
      color: '#2B2B52',
      fontSize: 24,
      fontWeight: '600'
    },
    
    cardLabel: {
      color: '#2C3335',
      fontSize: 16,
      fontWeight: '500',
    },

    cardDescription: {
      color: '#2C3335',
      fontSize: 16,
      fontWeight: '400',
      marginTop: 10,
    },
    
    cardFooter: {
      color: '#019031',
      marginTop: 10,
      alignSelf: 'flex-end'
    },


})