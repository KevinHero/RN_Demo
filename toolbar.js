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
  View,
} from 'react-native';
var ToolbarAndroid = require('ToolbarAndroid');
var SwitchAndroid = require('SwitchAndroid');
class AwesomeProject extends Component {
  render() {
    return (
       <ToolbarAndroid
            navIcon={require('./img/ic_drawer .png')}
            logo={require('./img/1.jpg')}
            style={styles.toolbar}>
            <SwitchAndroid
                value={true}
                />
        </ToolbarAndroid>
    );
  }
}
var toolbarActions = [
  {title: 'Create', icon: require('./img/1.jpg'), show: 'always'},
  {title: 'Filter'},
  {title: 'Settings', icon: require('./img/1.jpg'), show: 'always'},
];
const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'red',
    height: 56,
  },
});
// 'use strict';
// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   View,
// } from 'react-native';
// var ToolbarAndroid = require('ToolbarAndroid');
// class AwesomeProject extends Component {
//   render() {
//     return (
//        <ToolbarAndroid
//             actions={toolbarActions}
//             style={styles.toolbar}
//             title="只存在标题"></ToolbarAndroid>
//     );
//   }
// }
// var toolbarActions = [
//   {title: 'Create', icon: require('./img/1.jpg'), show: 'always'},
//   {title: 'Filter'},
//   {title: 'Settings', icon: require('./img/1.jpg'), show: 'always'},
// ];
// const styles = StyleSheet.create({
//   toolbar: {
//     backgroundColor: '#e9eaed',
//     height: 56,
//   },
// });
// AppRegistry.registerComponent('ToolBarAndroidDemo', () => ToolBarAndroidDemo);
// 'use strict';
// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// var ToolbarAndroid = require('ToolbarAndroid');
// class AwesomeProject extends Component {
//   render() {
//     return (
//        <ToolbarAndroid
//             actions={toolbarActions}
//             navIcon={require('./img/1.jpg')}
//             style={styles.toolbar}
//             subtitle="副标题"
//             title="主标题"></ToolbarAndroid>
//     );
//   }
// }
// var toolbarActions = [
//   {title: 'Create', icon: require('./img/1.jpg'), show: 'always'},
//   {title: 'Filter'},
//   {title: 'Settings', icon: require('./img/2.jpg'), show: 'always'},
// ];
// const styles = StyleSheet.create({
//   toolbar: {
//     backgroundColor: '#e9eaed',
//     height: 56,
//   },
// });
// // AppRegistry.registerComponent('ToolBarAndroidDemo', () => ToolBarAndroidDemo);


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
