import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  PanResponder,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default class Egg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setp: [],
      num: -1,
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        this.gestureSetp(gestureState);
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        return true;
      },
    });
  }

  between = (input, min, max) => {
    return input >= min && input <= max;
  }

  gestureSetp = (gestureState) => {
    // console.log("onPanResponderRelease", JSON.stringify(gestureState, null, 2));
    const { dx, dy } = gestureState;
    const isXMove = !this.between(0, dx - 15, dx + 15) && Math.abs(dx) > Math.abs(dy);
    const isYMove = !this.between(0, dy - 15, dy + 15) && Math.abs(dy) > Math.abs(dx);
    const isTap = !isXMove && !isYMove;
    let setp;
    if (isXMove) {
      if (dx > 0) {
        setp = 'R';
      } else {
        setp = 'L';
      }
    } else if (isYMove) {
      if (dy > 0) {
        setp = 'D';
      } else {
        setp = 'U';
      }
    } else if (isTap) {
      setp = 'T';
    }

    let newSetp = [...this.state.setp];
    newSetp[(this.state.num + 1) % 30] = setp;
    this.setState({
      setp: newSetp,
      num: this.state.num + 1,
    });

    const find = ',';
    const re = new RegExp(find, 'g');
    let setpString = newSetp.toString().replace(re, '');

    setpString = newSetp.length >= 30 ? setpString + setpString : setpString;
    console.log(setp, setpString);
    if (setpString.indexOf('UUDDLRLR') !== -1) {
      console.log("!!!!!!!!!!!");
      this.setState({
        setp: [],
        num: -1,
      });
    }
  }


  render() {
    return (
      <View {...this._panResponder.panHandlers} style={this.props.style}>
        {this.props.children}
      </View>
    );
  }
}
