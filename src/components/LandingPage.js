import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";

const image = { uri: "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_960_720.jpg" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Red Opal Innovations</Text>
      <Image source={require('../images/ROI-logo.png')} />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 35,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#c64c38"
  }
});

export default App;
