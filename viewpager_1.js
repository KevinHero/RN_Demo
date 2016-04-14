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
    Component,
    StyleSheet,
    Image,
    TextInput,
    ViewPagerAndroid,
} = React;
var AwesomeProject = React.createClass({
    render: function() {
        return (
            //toolbar
            <View style={{ flexDirection: 'column', margin: 0 }}>
                <View style={{ backgroundColor: 'black', flexDirection: 'row', height: 48 }}>
                    <Image source={require('./img/ic_action_back.png') }style={{ width: 24, height: 24, marginTop: 12, marginLeft: 4 }}/>
                    <Text style={{ backgroundColor: '#00000000', color: '#ffffff', fontWeight: 'bold', fontFamily: 'Cochin', fontSize: 18, marginLeft: 56, marginTop: 10 }}>首页</Text>
                </View>

                <View tyle={{ flexDirection: 'row', marginTop: 10 }}>
                    <ViewPagerAndroid style={styles.pageStyle} initialPage={0}>
                        <View style={{ backgroundColor: "red" }}>
                            <Text>First Page!</Text>
                               <Image    source={require('./img/7.jpg') }/>
                        </View>
                        <View style={{ backgroundColor: "yellow" }}>
                            <Text>Second Page!</Text>
                            <Image    source={require('./img/1.jpg') }/>

                        </View>
                        <View style={{ backgroundColor: "blue" }}>
                            <Text>3 Page!</Text>
                            <Image    source={require('./img/2.jpg') }/>

                        </View>
                        <View style={{ backgroundColor: "white" }}>
                            <Text>4 Page!</Text>
                            <Image    source={require('./img/3.jpg') }/>

                        </View>
                        <View style={{ backgroundColor: "green" }}>
                            <Text>5 Page!</Text>
                            <Image    source={require('./img/4.jpg') }/>

                        </View>
                        <View style={{ backgroundColor: "gray" }}>
                            <Text>6 Page!</Text>
                            <Image    source={require('./img/5.jpg') }/>

                        </View>
                        <View style={{ backgroundColor: "blue" }}>
                            <Text>7 Page!</Text>
                            <Image    source={require('./img/6.jpg') }/>

                        </View>
                    </ViewPagerAndroid>
                </View>


                <View style={{ marginLeft: 5, marginTop: 10, marginRight: 5 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 70 }}>
                            <Image source={require('./img/1.jpg') } style={{ alignSelf: 'center', width: 45, height: 45 }} />
                            <Text style={{ marginTop: 5, textAlign: 'center', fontSize: 11, color: '#555555' }}>美食</Text>
                        </View>
                        <View style={{ width: 70 }}>
                            <Image source={require('./img/2.jpg') } style={{ alignSelf: 'center', width: 45, height: 45 }} />
                            <Text style={{ marginTop: 5, alignSelf: 'center', fontSize: 11, color: '#555555', textAlign: 'center' }}>电影</Text>
                        </View>
                        <View style={{ width: 70 }}>
                            <Image source={require('./img/3.jpg') } style={{ alignSelf: 'center', width: 45, height: 45 }} />
                            <Text style={{ marginTop: 5, alignSelf: 'center', fontSize: 11, color: '#555555', textAlign: 'center' }}>酒店</Text>
                        </View>
                        <View style={{ width: 70 }}>
                            <Image source={require('./img/4.jpg') } style={{ alignSelf: 'center', width: 45, height: 45 }} />
                            <Text style={{ marginTop: 5, alignSelf: 'center', fontSize: 11, color: '#555555', textAlign: 'center' }}>KTV</Text>
                        </View>
                        <View style={{ width: 70 }}>
                            <Image source={require('./img/5.jpg') } style={{ alignSelf: 'center', width: 45, height: 45 }} />
                            <Text style={{ marginTop: 5, alignSelf: 'center', fontSize: 11, color: '#555555', textAlign: 'center' }}>外卖</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ width: 70 }}>
                            <Image source={require('./img/6.jpg') } style={{ alignSelf: 'center', width: 45, height: 45 }} />
                            <Text style={{ marginTop: 5, textAlign: 'center', fontSize: 11, color: '#555555' }}>优惠买单</Text>
                        </View>
                        <View style={{ width: 70 }}>
                            <Image source={require('./img/7.jpg') } style={{ alignSelf: 'center', width: 45, height: 45 }} />
                            <Text style={{ marginTop: 5, alignSelf: 'center', fontSize: 11, color: '#555555', textAlign: 'center' }}>周边游</Text>
                        </View>
                        <View style={{ width: 70 }}>
                            <Image source={require('./img/8.jpg') } style={{ alignSelf: 'center', width: 45, height: 45 }} />
                            <Text style={{ marginTop: 5, alignSelf: 'center', fontSize: 11, color: '#555555', textAlign: 'center' }}>休闲娱乐</Text>
                        </View>
                        <View style={{ width: 70 }}>
                            <Image source={require('./img/9.jpg') } style={{ alignSelf: 'center', width: 45, height: 45 }} />
                            <Text style={{ marginTop: 5, alignSelf: 'center', fontSize: 11, color: '#555555', textAlign: 'center' }}>今日新单</Text>
                        </View>
                        <View style={{ width: 70 }}>
                            <Image source={require('./img/10.jpg') } style={{ alignSelf: 'center', width: 45, height: 45 }} />
                            <Text style={{ marginTop: 5, alignSelf: 'center', fontSize: 11, color: '#555555', textAlign: 'center' }}>丽人</Text>
                        </View>
                    </View>
                </View>





            </View>


        );
    }
});


const styles = StyleSheet.create({
    pageStyle: {
        alignItems: 'center',
        padding: 20,
        height: 200,
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
