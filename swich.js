 

 

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Switch,
  Picker,
} from 'react-native';
// var AwesomeProject = React.createClass({
//   getInitialState() {
//     return {
//       trueSwitchIsOn: true,
//       falseSwitchIsOn: false,
//     };
//   },
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>
//            Swtich实例
//         </Text>
//         <Switch
//           onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
//           style={{marginBottom:10,marginTop:10}}
//           value={this.state.falseSwitchIsOn} />
//         <Switch
//           onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
//           value={this.state.trueSwitchIsOn} />
//       </View>
//     );
//   }
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

var AwesomeProject = React.createClass({
  getInitialState() {
    return {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
    };
  },
  render() {
    return (
      <View style={styles.container}>
        <Text>
           Swtich实例
        </Text>
        <Switch
          disabled={true}
          onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
          style={{marginBottom:10,marginTop:10}}
          value={this.state.falseSwitchIsOn} />
        <Switch
          disabled={false}
          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
          value={this.state.trueSwitchIsOn} />
          
          <View >
          <Picker
  selectedValue={this.state.language}
  onValueChange={(lang) => this.setState({language: lang})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
          
          </View>
          
      </View>
    );
  }
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
