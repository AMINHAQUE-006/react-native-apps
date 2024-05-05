import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Detail = ({route}: any) => {
    const navigation = useNavigation();
    const {productId} = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Product id: {productId} </Text>
      <Button
      title="Go to home"
      onPress={() => (navigation.goBack())}
      />
    </View>
  )
}

export default Detail

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