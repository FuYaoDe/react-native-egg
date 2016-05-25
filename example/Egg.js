import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  PanResponder,
  Text,
  Animated,
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
      reset: null,
      setp: [],
      num: -1,
      opacity: new Animated.Value(1),
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        if (this.props.type === 'Button') {
          Animated.timing(
            this.state.opacity,
            {
              toValue: 0.3,
              duration: 200,
            },
          ).start();
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.gestureSetp(gestureState);
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        return true;
      },
    });
  }

  componentWillUnmount() {
    if (this.state.reset) {
      clearTimeout(this.state.reset);
    }
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

    if (this.state.num === -1) {
      const reset = setTimeout(() => {
        this.setState({
          setp: [],
          num: -1,
        });
      }, this.props.timeLimit);
      this.setState({
        reset,
      });
    }
    if (this.props.type === 'Button') {
      Animated.timing(
        this.state.opacity,
        {
          toValue: 1,
          duration: 200,
        },
      ).start();
    }

    newSetp[(this.state.num + 1) % 30] = setp;
    this.setState({
      setp: newSetp,
      num: this.state.num + 1,
    });

    const find = ',';
    const re = new RegExp(find, 'g');
    let setpString = newSetp.toString().replace(re, '');

    setpString = newSetp.length >= 30 ? setpString + setpString : setpString;
    if (setpString.indexOf(this.props.setps.toUpperCase()) !== -1) {
      this.props.onCatch();
      this.setState({
        setp: [],
        num: -1,
      });
    }

    if (this.props.onAction) {
      this.props.onAction(setp)
    }
  }


  render() {
    return (
      <Animated.View {...this._panResponder.panHandlers}
        style={[this.props.style, { opacity: this.state.opacity }]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

Egg.propTypes = {
  setps: PropTypes.string,
  timeLimit: PropTypes.number,
  onCatch: PropTypes.func.isRequired,
  onAction: PropTypes.func,
  type: PropTypes.string,
};

Egg.defaultProps = {
  setps: 'UUDDLRLRTT',
  timeLimit: 2000,
  onCatch: null,
  onAction: null,
  type: 'View',
};
