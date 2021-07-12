import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'


const width = Dimensions.get('window').width


const CustomCartButton = ( props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {props.text} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: '#3F51B5',
    paddingVertical: 8,
    width: width / 1.3,
    borderRadius: 5
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Quicksand-Medium'
  }
})

export default CustomCartButton
