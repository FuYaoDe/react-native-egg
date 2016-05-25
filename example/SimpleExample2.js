/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  View,
  TouchableOpacity,
} from 'react-native';
import Egg from 'react-native-egg';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    margin: 20,
    height: 50,
    width: 150,
    backgroundColor: '#406E9F',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default class SimpleExample2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setp: '',
      deugBtn: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Setp: {this.state.setp}</Text>
        <Egg style={styles.button}
          setps={'UUDD'}
          type={'Button'}
          timeLimit={10000}
          onCatch={() => {
            this.setState({
              deugBtn: 1,
            });
          }}
          onAction={(setp) => {
            this.setState({
              setp: this.state.setp ? `${this.state.setp}、${setp}` : setp,
            });
          }}
        >
          <Text style={styles.buttonText}>Click me!!</Text>
        </Egg>
        <Text>Try swipe Up、Up、Down、Down</Text>
        <Text>on "Click me!!" Button</Text>
        <View style={{ opacity: this.state.deugBtn }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Debug Mode</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
