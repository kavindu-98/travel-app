import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { icons } from '../constants';

const Rating = ({ containerStyle, rate }) => {

    const starComponents = []

for (var i = 0; i < rate; i++) {
    starComponents.push(
        <Image
           key={'full-${1}'}
           source={icons.star}
           resizeMode="cover"
           style={{
               marginLeft: i == 0 ? 0 : 5,
               width: 15,
               height: 15
           }}
        />
    )
    
    
}

  return (
    <View style={{ flexDirection: 'row', ...containerStyle }}>
      {starComponents}
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({})