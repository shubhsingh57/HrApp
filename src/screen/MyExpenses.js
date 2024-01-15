import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../component/Header";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Btn from "../component/Btn";

const MyExpenses = ({navigation}) => {
  const ReimburshmentData = [
    {
      id: 1,
      status: "Approved",
      claim: 6000,
      approve: 6000,
      paid: 0,
      backgroundColor: "#E1F1F1",
      calendarColor: "#5057B0",
      year: 2023,
      statusColor: "#992ED7",
    },
    {
      id: 2,
      status: "paid",
      claim: 6000,
      approve: 6000,
      paid: 600,
      backgroundColor: "#EFE9F2",
      calendarColor: "#992ED7",
      year: 2023,
      statusColor: "gray",
    },
    {
      id: 3,
      status: "pending",
      claim: 6000,
      approve: 6000,
      paid: 0,
      backgroundColor: "gray",
      calendarColor: "",
      year: 2023,
      statusColor: "#fff",
    },
  ];

  const UnclaimenData = [
    { id: 1, expensesName: "Food", expensesPrice: 500, iconLogo: "fastfood" },
    {
      id: 2,
      expensesName: "Business Development",
      expensesPrice: 500,
      iconLogo: "user-tie",
    },
    {
      id: 3,
      expensesName: "Miscelleneouse",
      expensesPrice: 500,
      iconLogo: "dollar-sign",
    },
    {
      id: 4,
      expensesName: "Travel",
      expensesPrice: 500,
      iconLogo: "card-travel",
    },
  ];
  return (
    <>
      <Header
        title={"My Expenses "}
        backIcon={"menu-fold"}
        searchIcon={"search1"}
        bellIcon={"bell"}
      />
      <ScrollView 
      style={{ flex: 1, padding: 8, backgroundColor: "#F2F1F5",}}
      contentContainerStyle={{bottom:10}}
      >
        <View style={{marginVertical:10}}>
        <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                color: "#000",
                marginHorizontal: 10,
              }}
            >
              December, 2023
            </Text>
            <Entypo name="chevron-right" size={20} style={{ right: 5 }} />
          </View>
          <View style={{
                   borderRadius: 10,
                    padding: 50,
                    backgroundColor: "#fff",}}>
            <Text>Unclaimed Expense ₹12000</Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              fontWeight: "700",
              color: "#000",
              marginHorizontal: 10,
            }}
          >
            Reimburshment History
          </Text>
          <FlatList
            data={ReimburshmentData}
            horizontal
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: 200,
                    height: "85%",
                    backgroundColor: item.backgroundColor,
                    margin: 5,
                    marginHorizontal: 10,
                    borderRadius: 8,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      padding: 5,
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        right: 10,
                      }}
                    >
                      <Entypo
                        name="calendar"
                        size={50}
                        color={item.calendarColor}
                      />
                      <Text
                        style={{
                          position: "absolute",
                          top: 22,
                          alignItems: "center",
                          textAlign: "center",
                          color: item.calendarColor,
                        }}
                      >
                        Aug
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: "600",
                          textAlign: "center",
                          color: item.calendarColor,
                        }}
                      >
                        {item.year}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        bottom: 8,
                        left: 15,
                      }}
                    >
                      <Text
                        style={{
                          borderWidth: 1,
                          borderRadius: 8,
                          padding: 3,
                          right: 5,
                          color: item.statusColor,
                          borderColor: item.statusColor,
                        }}
                      >
                        {item.status}
                      </Text>
                      <Entypo name="chevron-right" size={20} style={{}} />
                    </View>
                  </View>

                  <View
                    style={{
                      padding: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text>Claimed</Text>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialIcons
                        name="currency-rupee"
                        size={18}
                        style={{ top: 2, color: "#000" }}
                      />
                      <Text style={{ color: "#000", fontSize: 15 }}>
                        {item.claim}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      padding: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      bottom: 15,
                    }}
                  >
                    <Text>Approved</Text>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialIcons
                        name="currency-rupee"
                        size={18}
                        style={{ top: 2, color: "#000" }}
                      />
                      <Text style={{ color: "#000", fontSize: 15 }}>
                        {item.approve}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      padding: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      bottom: 30,
                    }}
                  >
                    <Text>Paid</Text>
                    <View style={{ flexDirection: "row" }}>
                      {item.paid ? (
                        <MaterialIcons
                          name="currency-rupee"
                          size={18}
                          style={{ top: 2, color: "#000" }}
                        />
                      ) : null}
                      <Text style={{ color: "#000", fontSize: 15 }}>
                        {item.paid}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>

        <View style={{ bottom: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                color: "#000",
                marginHorizontal: 10,
              }}
            >
              Unclaimed Expenses
            </Text>
            <Entypo name="chevron-right" size={20} style={{ right: 5 }} />
          </View>

          <FlatList
            data={UnclaimenData}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    padding: 10,
                    borderRadius: 10,
                    margin: 5,
                    backgroundColor: "#fff",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View
                        style={{
                          padding: 5,
                          backgroundColor: "#E1F1F1",
                          borderRadius: 10,
                        }}
                      >
                        <MaterialIcons
                          name={item.iconLogo}
                          color={"red"}
                          size={25}
                          style={{}}
                        />
                      </View>
                      <Text
                        style={{
                          textAlign: "center",
                          alignItems: "center",
                          marginHorizontal: 10,
                        }}
                      >
                        {item.expensesName}
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <Text>24 April, 23</Text>
                      <Entypo name="chevron-right" size={20} style={{}} />
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>

        <Btn 
        width={'100%'}
        title={"Add New Expense"} backgroundColor={"#821DD4"} color={"#FFF"} onPress={()=>navigation.navigate('MyLeave')}/>
      </ScrollView>
    </>
  );
};

export default MyExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
