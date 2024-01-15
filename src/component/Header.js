import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const Header = ({ title, backIcon, onPress, searchIcon, bellIcon }) => {
  return (
    <View
      style={{
        height: 50,
        flexDirection: "row",
        backgroundColor: "#F3E7F7",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor={"#F3E7F7"} />
      {backIcon && (
        <Icon
          name={backIcon}
          size={22}
          onPress={onPress}
          style={{ marginLeft: 10 }}
          color={"#000"}
        />
      )}
      {title && (
        <Text
          style={{
            fontSize: 17,
            marginHorizontal: 25,
            color: "#000",
            fontWeight: "500",
          }}
        >
          {title}
        </Text>
      )}
      <View style={{left:100, flexDirection: "row", justifyContent: "flex-end" }}>
        {searchIcon && <Icon name="search1" size={25} color={"#000"}/>}
        {bellIcon && 
        <View style={{flexDirection:'row',}}>
        <Feather name="bell" size={25} color={"#000"} style={{marginHorizontal:10}}/>
        <Text style={{right:25,fontSize:15,bottom:5,width:15,height:15,borderWidth:1,borderRadius:20,backgroundColor:'#821DD4',textAlign:'center',color:'#fff',fontSize:10}}>2</Text>
        </View>
        }
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
