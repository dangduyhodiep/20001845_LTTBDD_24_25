import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.productSection}>
        <Image
          style={styles.stretch}
          source={require("./assets/vs_blue.png")} // Ensure this path is correct
        />
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>
            Điện thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>
        <View style={styles.ratingSection}>
          <View style={styles.ratingStarContainer}>
            {Array(5).fill().map((_, index) => (
              <AntDesign key={index} name="star" size={20} color="#E0E41A" />
            ))}
          </View>
          <Text style={styles.ratingNumberText}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.priceSection}>
          <Text style={styles.priceTextNew}>1.790.000 đ</Text>
          <Text style={styles.priceTextOld}><del>1.790.000 đ</del></Text>
        </View>
        <View style={styles.saleSection}>
          <Text style={styles.saleText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
          <AntDesign name="questioncircleo" size={24} color="black" />
        </View>
      </View>
      <View style={styles.chooseColorSection}>
        <Pressable style={styles.chooseColorButton} onPress={() => navigation.navigate("Second")}>
          <Text>4 MÀU - CHỌN LOẠI</Text>
          <View style={styles.arrow}>
            <AntDesign name="arrowright" size={20} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={styles.buyButtonSection}>
        <Pressable style={styles.buyButton}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </Pressable>
      </View>
    </View>
  );
}
function SecondScreen({ navigation }) {
  const [image, setImage] = useState(require("./assets/vs_silver.png"));

  return (
    <View style={styles.container}>
      <View style={styles.productSection}>
        <Image style={styles.stretch} source={image} />
        <Text style={styles.productText}>
          Điện Thoại Vsmart Joy 3 Hàng Chính Hãng
        </Text>
      </View>
      <View style={styles.chooseColorSection}>
        <Text style={styles.chooseColorText}>Chọn một màu bên dưới </Text>    
        <AntDesign name="questioncircleo" size={15} color="black" />
        
        <View style={styles.chooseColorContainer}>
          <Pressable
            style={styles.silver}
            onPress={() => setImage(require("./assets/vs_silver.png"))}
          />
          <Pressable
            style={styles.red}
            onPress={() => setImage(require("./assets/vs_red.png"))}
          />
          <Pressable
            style={styles.black}
            onPress={() => setImage(require("./assets/vs_black.png"))}
          />
          <Pressable
            style={styles.blue}
            onPress={() => setImage(require("./assets/vs_blue.png"))}
          />
        </View>
        <Pressable 
          style={styles.button}
          onPress={() => navigation.navigate("First", { color: image })} // Pass selected color back
        >
          <Text style={{ fontWeight: "bold", fontSize: 15, }}>XONG</Text>
        </Pressable>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  stretch: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
  },
  productSection: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerText: {
    fontSize: 14,
  },
  ratingSection: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingStarContainer: {
    flexDirection: "row",
  },
  priceSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  priceTextNew: {
    fontWeight: "bold",
    fontSize: 20,
  },
  priceTextOld: {
    color: "grey",
    fontStyle: "italic",
  },
  saleSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  saleText: {
    fontWeight: "bold",
    color: "red",
  },
  chooseColorSection: {
    marginTop: 10,
    width: "100%",
  },
  chooseColorButton: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: "center",
  },
  arrow: {
    position: "absolute",
    right: 10,
    top: 5,
  },
  buyButtonSection: {
    marginTop: 25,
    width: "100%",
  },
  buyButton: {
    alignItems: "center",
    backgroundColor: "red",
    paddingVertical: 10,
    borderRadius: 10,
  },
  buyButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  productText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  chooseColorContainer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  silver: {
    backgroundColor: "#C5F1FB",
    width: 70,
    height: 70,
  },
  black: {
    backgroundColor: "black",
    width: 70,
    height: 70,
  },
  red: {
    backgroundColor: "red",
    width: 70,
    height: 70,
  },
  blue: {
    backgroundColor: "#234896",
    width: 70,
    height: 70,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1952E294",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 5,
  },
});

