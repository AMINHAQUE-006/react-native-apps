import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home screen</Text>
      <Button 
      title='Go to details'
      onPress={() => (navigation.navigate("Detail", {productId: "88"}))}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallText: {
        color: '#000000'
    }
})