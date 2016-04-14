/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';
var React = require('react-native');
var {
  AppRegistry,
  Text,
  View,
  Image,
  TextInput
} = React;
var AwesomeProject = React.createClass({
  render: function() {
    return (
      <View style={{flexDirection:'column',margin:0}}>
     
        <View style={{backgroundColor:'black',flexDirection:'row' ,height:48}}>
        
               
           <Image source={require('./img/ic_action_back.png') }style={{width:24,height:24, marginTop:12,marginLeft:4}}/>
           
           <Text style={{backgroundColor:'#00000000',color:'#ffffff',fontWeight:'bold',fontFamily:'Cochin',fontSize:18,marginLeft:56,marginTop:10}}>首页</Text>
        </View>   
        
       
            
            
            <View style={{marginLeft:5,marginTop:10,marginRight:5}}>
 
         <View style={{flexDirection:'row'}}>
             <View style={{width:70}}>
                 <Image source={require('./img/1.jpg')} style={{alignSelf:'center',width:45,height:45}} />
                 <Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}}>美食</Text>
             </View>
              <View style={{width:70}}>
                 <Image source={require('./img/2.jpg')} style={{alignSelf:'center',width:45,height:45}} />
                 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>电影</Text>
             </View>
             <View style={{width:70}}>
                 <Image source={require('./img/3.jpg')} style={{alignSelf:'center',width:45,height:45}} />
                 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>酒店</Text>
             </View>
             <View style={{width:70}}>
                 <Image source={require('./img/4.jpg')} style={{alignSelf:'center',width:45,height:45}} />
                 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>KTV</Text>
             </View>
             <View style={{width:70}}>
                 <Image source={require('./img/5.jpg')} style={{alignSelf:'center',width:45,height:45}} />
                 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>外卖</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>
             <View style={{width:70}}>
                 <Image source={require('./img/6.jpg')} style={{alignSelf:'center',width:45,height:45}} />
                 <Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}}>优惠买单</Text>
             </View>
              <View style={{width:70}}>
                 <Image source={require('./img/7.jpg')} style={{alignSelf:'center',width:45,height:45}} />
                 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>周边游</Text>
             </View>
             <View style={{width:70}}>
                 <Image source={require('./img/8.jpg')} style={{alignSelf:'center',width:45,height:45}} />
                 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>休闲娱乐</Text>
             </View>
             <View style={{width:70}}>
                 <Image source={require('./img/9.jpg')} style={{alignSelf:'center',width:45,height:45}} />
                 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>今日新单</Text>
             </View>
             <View style={{width:70}}>
                 <Image source={require('./img/10.jpg')} style={{alignSelf:'center',width:45,height:45}} />
                 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>丽人</Text>
             </View>
          </View>
      </View>
            
            
            
            
            <View tyle={{flexDirection:'row',marginTop:10}}>
            
            <Text style={{height:40,borderColor:'red',marginTop:12,borderWidth:1, marginLeft:4} }>账号:</Text>
            
         <TextInput style={{height:40,borderColor:'red',borderWidth:1}}
         multiline={true}
         defaultValue='默认信息1'
        />
       <TextInput 
           style={{}}
           autoFocus={true}
           defaultValue='默认信息2'/>
       <TextInput 
           editable={true}
           maxLength= {2}
           defaultValue='默认信息3'/>
           
        
            </View>
            
      </View>
      
      
    );
  }
});
     //     <View  style={{marginLeft:10,marginTop:10}}>
    //   <Text style={{fontSize:16}}>'测试本地图片'</Text>
    //   <Image source={require('./img/123.jpg') }style={{width:200,height:300 }}/>
    //   </View>
       
 
// AppRegistry.registerComponent('counterRelativeAndroid', () => counterRelativeAndroid);
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
