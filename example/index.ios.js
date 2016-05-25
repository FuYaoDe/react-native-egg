/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SimpleExample1 from './SimpleExample1';
import SimpleExample2 from './SimpleExample2';
import SimpleExample3 from './SimpleExample3';
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

class example extends Component {
  renderScene = (route, nav) => {
    switch (route.id) {
      case 'simple1':
        return <SimpleExample1 />;
      case 'simple2':
        return <SimpleExample2 />;
      case 'simple3':
        return <SimpleExample3 />;
      default:
        return <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => nav.push({id: 'simple1', })}
            >
              <Text style={styles.buttonText}>Simple 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => nav.push({id: 'simple2', })}
            >
              <Text style={styles.buttonText}>Simple 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => nav.push({id: 'simple3', })}
            >
              <Text style={styles.buttonText}>Simple 3</Text>
            </TouchableOpacity>
        </View>;
    }
  }
  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{}}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('example', () => example);
