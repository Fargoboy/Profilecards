
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 150,
  },
});

const DisplayAnImage = ({imageSource}) => {
    
  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: imageSource,
        }}
      />
    </View>
  );
}

export default DisplayAnImage;