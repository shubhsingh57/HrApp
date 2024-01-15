import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import React from "react";
import Picture from "../picture/Picture";
import Btn from "../component/Btn";
import Header from "../component/Header";
import Icon from "react-native-vector-icons/Feather";

const MyLeave = ({navigation}) => {
  const Data = [
    {
      id: 1,
      Expensetype: "Food",
    },
    {
      id: 2,
      Expensetype: "Travel",
    },
    {
      id: 3,
      Expensetype: "Business Development",
    },
    {
      id: 4,
      Expensetype: "Miscellaneous",
    },
  ];
  return (
    <>
      <Header
        title={"My Leaves"}
        backIcon={"left"}
        searchIcon={"search1"}
        bellIcon={"bell"}
        onPress={()=>navigation.goBack()}
      />
      <View style={styles.Container}>
        <>
          <Text style={{ color: "#000", fontSize: 16, fontWeight: "600" }}>
            Add New Expenses
          </Text>
          <View style={styles.Box1}>
            <View
              style={{
                padding: 10,
                backgroundColor: "#F2F1F5",
                borderRadius: 8,
              }}
            >
              <Icon name="camera" size={22} color={"#821DD4"} />
            </View>
            <View
              style={{
                width: "83%",
                backgroundColor: "#F2F1F5",
                borderRadius: 8,
                marginHorizontal: 10,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="calendar" size={22} color={"gray"} />
              <Text
                style={{
                  color: "gray",
                  fontSize: 15,
                  fontWeight: "600",
                  marginHorizontal: 10,
                }}
              >
                Date of Expense
              </Text>
            </View>
          </View>
        </>

        <View style={styles.Box2}>
          <Text style={{ color: "#000", fontWeight: "400", fontSize: 14 }}>
            Expense type
          </Text>

          <FlatList
            data={Data}
            horizontal
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    backgroundColor: item.id == "1" ? "#F3E7F7" : "#F2F1F5",
                    margin: 8,
                    padding: 10,
                    borderRadius: 6,
                    right: 5,
                  }}
                >
                  <Text
                    style={{
                      color: item.id == "1" ? "#821DD4" : "gray",
                      fontWeight: "600",
                    }}
                  >
                    {item.Expensetype}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />

          <View style={{ marginVertical: 5 }}>
            <Text
              style={{
                color: "#000",
                fontWeight: "400",
                fontSize: 14,
                marginVertical: 5,
              }}
            >
              Expense Amount
            </Text>
            <TextInput
              placeholder="Amount"
              style={{
                width: "100%",
                padding: 6,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: "#F2F1F5",
              }}
              keyboardType="numeric"
            />
          </View>
          <View style={{}}>
            <Text
              style={{
                color: "#000",
                fontWeight: "400",
                fontSize: 14,
                marginVertical: 5,
              }}
            >
              Comment
            </Text>
            <TextInput
              placeholder="Comment Reason"
              style={{
                width: "100%",
                padding: 6,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: "#F2F1F5",
              }}
              keyboardType="default"
            />
          </View>
        </View>

        <View style={{ flex: 1, marginVertical: 5 }}>
          <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "600" }}>
            Status
          </Text>
          <View style={styles.Box3}>
            <Text style={{ color: "#821DD4", fontWeight: "bold" }}>
              Approvers
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  style={{
                    height: "45%",
                    width: "50%",
                    borderRadius: 30,
                    alignSelf: "center",
                  }}
                  source={Picture.image1}
                />
                <View style={{ marginTop: 5 }}>
                  <Text style={{ color: "black" }}>Happy Singh</Text>
                  <Text style={{ color: "black" }}>(TEP24456)</Text>
                </View>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  style={{
                    height: "45%",
                    width: "50%",
                    borderRadius: 30,
                    alignSelf: "center",
                  }}
                  source={Picture.image1}
                />
                <View style={{ marginTop: 5 }}>
                  <Text style={{ color: "black" }}>Happy Singh</Text>
                  <Text style={{ color: "black" }}>(TEP24456)</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Btn
            title={"Cancel"}
            backgroundColor={"transparent"}
            color={"gray"}
            width={100}
          />

          <Btn title={"Submit"} backgroundColor={"#821DD4"} color={"#FFF"} width={100} />
        </View>
      </View>
    </>
  );
};

export default MyLeave;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#F2F1F5",
    padding: 15,
  },
  Box1: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
  },
  Box2: {
    backgroundColor: "white",
    borderRadius: 6,
    marginTop: 10,
    padding: 10,
  },
  Box3: {
    backgroundColor: "#F3E7F7",
    borderRadius: 8,
    marginTop: 5,
    padding: 10,
    width: "75%",
    height: "50%",
  },
});
