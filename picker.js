 

 

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Picker,
} from 'react-native';
// var AwesomeProject = React.createClass({
//    getInitialState: function() {
//     return {
//       language: '',
//     };
//   },
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text >
//           Picker选择器实例
//         </Text>
//         <Picker 
//           style={{width:200}}
//           selectedValue={this.state.language}
//           onValueChange={(value) => this.setState({language: value})}>
//           <Picker.Item label="Java" value="java" />
//           <Picker.Item label="JavaScript" value="javaScript" />
//           <Picker.Item label="swift" value="swift" />
//           <Picker.Item label="python" value="python" />
//           <Picker.Item label="c#" value="c#" />
//         </Picker>
//         <Text>当前选择的是:{this.state.language}</Text>
//       </View>
//     );
//   }
// });

var AwesomeProject = React.createClass({
   getInitialState: function() {
    return {
      language: '',
    };
  },
  render() {
    return (
      <View style={styles.container}>
        <Text >
          Picker选择器实例
        </Text>
        <Picker 
          prompt="请选择编程语言"
          style={{width:200}}
          selectedValue={this.state.language}
          onValueChange={(value) => this.setState({language: value})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="javaScript" />
          <Picker.Item label="JavaScript" value="javaScript" />
          <Picker.Item label="JavaScript" value="javaScript" />
          <Picker.Item label="JavaScript" value="javaScript" />
          <Picker.Item label="JavaScript" value="javaScript" />
          <Picker.Item label="JavaScript" value="javaScript" />
        </Picker>
        <Text>当前选择的是:{this.state.language}</Text>
      </View>
    );
}});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
