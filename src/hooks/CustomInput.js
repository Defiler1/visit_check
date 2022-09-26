import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
/**
 *
 * @param params stateHandler, placeholder, secureTextEntry
 * @returns void
 */
const CustomInput = ({stateHandler, placeholder, secureTextEntry}) => {
  return (
    <TextInput
      {...stateHandler}
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '80%',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: 'white',
    paddingLeft: 15,
  },
});

export default CustomInput;
