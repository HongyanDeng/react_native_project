import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat = () => {
  return (
    <View>
      <Text>Please choose your cat!</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue="Name me!"
      />
    </View>
  );
}

export default Cat;
