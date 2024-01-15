import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import MyExpenses from "../screen/MyExpenses";
import MySpace from "../screen/MySpace";
import Team from "../screen/Team";
import Approvals from "../screen/Approvals";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="MyExpenses"
      screenOptions={{
        tabBarActiveTintColor: "#821DD4",
        headerShown: false
      }}
    >
      <Tab.Screen
        name="MyExpenses"
        component={MyExpenses}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MySpace"
        component={MySpace}
        options={{
          tabBarLabel: "My Space",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Team"
        component={Team}
        options={{
          tabBarLabel: "Team",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="groups" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Approvals"
        component={Approvals}
        options={{
          tabBarLabel: "Approvals",
          tabBarIcon: ({ color, size }) => (
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="checkmark-circle-outline"
                color={color}
                size={size}
              />
              <Text
                style={{
                  right: 12,
                  fontSize: 15,
                  bottom: 2,
                  width: 15,
                  height: 15,
                  borderWidth: 1,
                  borderRadius: 20,
                  backgroundColor: "#821DD4",
                  textAlign: "center",
                  color: "#fff",
                  fontSize: 10,
                }}
              >
                2
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
