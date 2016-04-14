/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  PixelRatio,
} from 'react-native';
 
class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           PixelRatio实例测试:
        </Text>
        <Text style={styles.instructions}>
           当前的屏幕像素密度比例为:{PixelRatio.get()};
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
// AppRegistry.registerComponent('PixelPatioDemo', () => PixelPatioDemo);??

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
