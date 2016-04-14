'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid,
  Image,
} from 'react-native';
 
class AwesomeProject extends Component {
  render() {
    return (
      <View >
        <Text style={styles.welcome}>
            ViewPagerAndroid实例
        </Text>
        <ViewPagerAndroid style={styles.pageStyle} initialPage={0}>
             <View style={{backgroundColor:"red"}}>
                   <Text>First Page!</Text>
             </View>
             <View style={{backgroundColor:"yellow"}}>
                   <Text>Second Page!</Text>
                   <Image    source={require('./img/1.jpg')}/>
                   
             </View>
             <View style={{backgroundColor:"black"}}>
                   <Text>3 Page!</Text>
                   
             </View>
             <View style={{backgroundColor:"white"}}>
                   <Text>4 Page!</Text>
                   
             </View>
             <View style={{backgroundColor:"green"}}>
                   <Text>5 Page!</Text>
                   
             </View>
             <View style={{backgroundColor:"gray"}}>
                   <Text>6 Page!</Text>
                   
             </View>
             <View style={{backgroundColor:"blue"}}>
                   <Text>7 Page!</Text>
                   
             </View>
        </ViewPagerAndroid>
      </View>
    );
  }
}
const styles = StyleSheet.create({
   pageStyle: {
    alignItems: 'center',
    padding: 20,
    height:200,
  }
});
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
