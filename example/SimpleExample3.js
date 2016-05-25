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
  View,
  Dimensions,
} from 'react-native';
const windowSize = Dimensions.get('window');
import Egg from './Egg';
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
  egg: {
    position: 'absolute',
    top: windowSize.height / 2 - 200,
    left: windowSize.width / 2 - 160,
  },
});

export default class SimpleExample3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 0,
    };
  }

  render() {
    return (
      <Egg style={styles.container}
        setps={'UUDDLRLRTT'}
        timeLimit={10000}
        onCatch={() => {
          this.setState({
            show: 1,
          })
          setTimeout(() => {
            this.setState({
              show: 0,
            })
          }, 5000);
        }}
      >
        <Text>Try swipe Up、Up、Down、Down</Text>
        <Text>Left、Right、Left、Right、Tap、Tap</Text>
        <View style={[styles.egg, {opacity: this.state.show}]}>
          <Image
            source={{uri: 'https://media.giphy.com/media/xTiTnoHt2NwerFMsCI/giphy.gif'}}
            style={{
              height: 179,
              width: 320,
            }}
          />
        </View>
      </Egg>
    );
  }
}
