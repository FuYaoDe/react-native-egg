# react-native-egg
react-native-egg make your react native app infinitely more fun !!

Implementation simple gestures detection achieve trigger easter egg, You can also use it as a gesture switch.

# Why ?

### Just for fun !!
[Example code](https://github.com/FuYaoDe/react-native-egg/blob/master/example/SimpleExample3.js)   
<img src="http://gifyu.com/images/S3i.gif">

### Hide some secret message.
[Example code](https://github.com/FuYaoDe/react-native-egg/blob/master/example/SimpleExample1.js)   
<img src="http://gifyu.com/images/S1i.gif">

### Hide and Trigger some features.
[Example code](https://github.com/FuYaoDe/react-native-egg/blob/master/example/SimpleExample2.js)   
<img src="http://gifyu.com/images/S2i.gif">

# Add it to your project
```bash
$ npm i react-native-egg --save
```

# Basic usage
Use like a `<View>`, but the children can not have onPress、onScroll props, like `ScrollView`、`ListView`、`TouchableOpacity`.
```javascript
import Egg from 'react-native-egg';

<Egg style={styles.container}
  setps={'TTT'}
  onCatch={() => {
    Alert.alert('Version', '1.0.1');
  }}
>
  <Text>FuYaoDe</Text>
  <Text>dan82625@gmail.com</Text>
</Egg>
```

# Props

| Prop         | PropType      | Default Value | Description                                                                                                                         |
|--------------|---------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------|
| setps        | string        | UUDDLRLRTT    | Trigger onCatch conditions,`U` is slide up,`D` is slide down,`R` is slide right,`L` is slide left,`T` is click. Max string length is 15. |
| timeLimit    | number        | 2000          | combo limit time in milliseconds.                                                                                                   |
| onCatch      | func          |               | combo equal setps trigger onCatch.                                                                                                  |
| onAction     | (event) => {}   |               | Any touch will trigger. event has the following `U`、`D`、`R`、`L`、`T`                                                                                                         |
| touchOpacity | bool          | false         | make `<Egg>` look like `<TouchableOpacity>`                                                                                         |
