/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  Image,
} from 'react-native';
import Egg from 'react-native-egg';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingBottom: 200,
  },
  avatarImage: {
    borderRadius: 60,
    width: 120,
    height: 120,
    flexDirection: 'row',
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default class SimpleExample1 extends Component {
  render() {
    return (
      <Egg style={styles.container}
        setps={'TTT'}
        onCatch={() => {
          Alert.alert('Version', '1.0.0');
        }}
      >
        <Image source={{ uri: 'https://avatars2.githubusercontent.com/u/6357215?v=3&s=460' }} style={styles.avatarImage} />
        <Text style={styles.text}>FuYaoDe</Text>
        <Text>dan82625@gmail.com</Text>
        <Text style={{marginTop: 10}}>Try tap screen * 3</Text>
      </Egg>
    );
  }
}
