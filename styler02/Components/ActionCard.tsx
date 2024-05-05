import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
  function JavascriptReadmore(website: string) {
    Linking.openURL(website)
  }

  return (
    <View>
      <Text style={styles.heading}>Blog card</Text>
      <View style={styles.cardContainer}>
        <View style={styles.cardHead}>
          <Text style={styles.cardTitle}>JavaScript ES6 updates</Text>
        </View>
        <Image
        source={{
          uri: 'https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?t=st=1711109269~exp=1711112869~hmac=b49ecd42fd4dd72f26e2a4d676c82cace4bf52ba2a65c8d273496392287818d7&w=1060'
        }}
        style={styles.image} />
        <View style={styles.cardBody}>
          <Text numberOfLines={12}>ES6, also known as ECMAScript 2015, brought significant enhancements to JavaScript, revolutionizing the way developers write and structure their code. Key features include block-scoped variables with let and const, concise arrow functions, template literals for easy string interpolation, default parameter values, rest and spread operators for handling arrays and iterables efficiently, destructuring assignment for extracting values from arrays and objects, class syntax for object-oriented programming, native module support for better code organization, promises for asynchronous operations, and additional methods on built-in objects. These improvements aimed to make JavaScript development more efficient, expressive, and aligned with modern programming paradigms.</Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity onPress={() => JavascriptReadmore('https://www.w3schools.com/js/js_es6.asp')}>
            <Text style={styles.socialLink}>Read more...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: '500',
    paddingLeft: 8
  },
  cardContainer: {
    marginHorizontal: 12,
    backgroundColor: '#430A5D',
    borderRadius: 16,
    marginBottom: 10,
  },
  cardHead: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  cardTitle: {
    color: '#FFF455'
  },
  image: {
    height: 300,
  },
  cardBody: {
    padding: 8,
  },
  cardFooter: {
    backgroundColor: 'E72929',
    alignItems: 'center',
    paddingVertical: 10,
  },
  socialLink: {
    backgroundColor: '#FF5BAE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 14,
    marginBottom: 8,
  }
})