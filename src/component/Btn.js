import { StyleSheet, Text, View ,Button ,TouchableOpacity} from 'react-native'
import React from 'react'

const Btn = ({title,backgroundColor,color,onPress,width}) => {
  return (
      <TouchableOpacity 
      style={{width:width,backgroundColor:backgroundColor ,borderRadius:18,padding:10,}}
      onPress={onPress}
      >
       {title &&
        <Text style={{fontSize:15,color:color ,fontWeight:'600',alignItems:'center',textAlign:'center'}}>
          {title}
        </Text>
       }
      </TouchableOpacity>
  )
}

export default Btn

const styles = StyleSheet.create({})