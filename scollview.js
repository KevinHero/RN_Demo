/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
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
  ScrollView,
} from 'react-native';
 
class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           进行测试ScrollView控件
        </Text>
         <ScrollView showsVerticalScrollIndicator={true} 
              contentContainerStyle={styles.contentContainer}>
            <Text 
            style={{color:'#FFF',margin:5,fontSize:16,backgroundColor:"blue"}}>
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
            </Text>
         </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height:800,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
      margin:10,
      backgroundColor:"#ff0000",
    }
});
// AppRegistry.registerComponent('ScrollViewDemo', () => ScrollViewDemo);


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
