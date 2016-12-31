import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import Util from '../../Utils';

class WatchRecord extends Component{

  static propTypes = {
        record: React.PropTypes.array.isRequired,
    };

  render() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    theDataSource = ds.cloneWithRows(this.props.record);

    return (
      <ListView
        style={{
          width: Util.size.width,
          height: Util.size.height - 300,
          paddingLeft: 15,
        }}
        dataSource={theDataSource}
        renderRow={(rowData) =>
          <View style={{
            height: 40,
            borderBottomWidth:Util.pixel,borderBottomColor:"#bbb",
            paddingTop: 5, paddingLeft: 10, paddingRight:10, paddingBottom:5,
            flexDirection:"row",
            alignItems:"center"
          }}>
            <Text style={{
              backgroundColor:"transparent",
              flex:1,
              textAlign:"left",
              paddingLeft:20,
              color:"#777"
            }}>{rowData.title}</Text>
            <View style={{alignItems: "center"}}>
              <Text style={{
                backgroundColor:"transparent",
                flex:1,
                textAlign:"right",
                paddingRight:20,
                color:"#222"
              }}>{rowData.time}</Text>
            </View>
          </View>}/>
    );
  }
}

export default WatchRecord;
