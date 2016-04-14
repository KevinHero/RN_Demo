// 'use strict';
// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   View,
//   ListView,
// } from 'react-native';
// var AwesomeProject = React.createClass({
//     getInitialState: function() {
//       var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         return {
//           dataSource: ds.cloneWithRows(['row 1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8']),
//         };
//     },
//     render: function() {
//       return (
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(rowData) => <Text>{rowData}</Text>}
//         />
//       );
//     }
// });
// AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
// 'use strict';
// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   View,
//   ListView,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// var THUMB_URLS = [
//   require('./img/2.jpg'),
//   require('./img/2.jpg'),
//   require('./img/2.jpg'),
//   require('./img/2.jpg'),
//   require('./img/2.jpg'),
//   require('./img/2.jpg'),
//   require('./img/2.jpg'),
//   require('./img/2.jpg'),
//   require('./img/2.jpg'),
//   require('./img/2.jpg'),
//   require('./img/2.jpg'),
//   require('./img/2.jpg'),
//   ];
// var AwesomeProject = React.createClass({
//     getInitialState: function() {
//       var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         return {
//           dataSource: ds.cloneWithRows(['row 1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8','row 9','row 10','row 11','row 12']),
//         };
//     },
//     _renderRow: function(rowData: string, sectionID: number, rowID: number) {
//     var imgSource = THUMB_URLS[rowID];
//     return (
//         <TouchableOpacity>
//           <View>
//             <View style={styles.row}>
//               <Image style={styles.thumb} source={imgSource} />
//               <Text style={{flex:1,fontSize:16,color:'blue'}}>
//                 {rowData + '我是测试行号哦~'}
//               </Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//     );
//    },
//     render: function() {
//       return (
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={this._renderRow}
//         />
//       );
//     }
// });
// var styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     padding: 10,
//     backgroundColor: '#F6F6F6',
//   },
//   thumb: {
//     width: 50,
//     height: 50,
//   },
// });

'use strict';
var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} = React;
 
var THUMB_URLS = [
  require('./img/2.jpg'),
require('./img/2.jpg'),
require('./img/2.jpg'),
require('./img/2.jpg'),
require('./img/2.jpg'),
require('./img/2.jpg'),
require('./img/2.jpg'),
require('./img/2.jpg'),
require('./img/2.jpg'),
require('./img/2.jpg'),
require('./img/2.jpg'),
require('./img/2.jpg'),
];
 
var AwesomeProject = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },
  _pressData: ({}: {[key: number]: boolean}),
  componentWillMount: function() {
    this._pressData = {};
  },
  render: function() {
    return (
      <ListView
        initialListSize={12}
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  },
  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    var imgSource = THUMB_URLS[rowID];
    return (
      <TouchableHighlight underlayColor="red">
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource} />
            <Text style={styles.text}>
              {rowData}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },
  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < THUMB_URLS.length; ii++) {
      dataBlob.push('单元格 ' + ii);
    }
    return dataBlob;
  },
});
var styles = StyleSheet.create({
  list: {
    marginTop:5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 3,
    width: 85,
    height: 85,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 45,
    height: 45
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
